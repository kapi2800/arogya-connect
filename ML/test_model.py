import joblib
import numpy as np
import pandas as pd
from statistics import mode
from collections import Counter
import random


rf_model = joblib.load("models/rf_model.pkl")
nb_model = joblib.load("models/nb_model.pkl")
encoder = joblib.load("models/encoder.pkl")
symptom_index = joblib.load("models/symptom_index.pkl")


all_symptoms = list(symptom_index.keys())

def predict_disease(input_symptoms: str):
    input_symptoms = input_symptoms.split(",")
    input_data = [0] * len(symptom_index)

    found_symptom = False
    for symptom in input_symptoms:
        symptom = symptom.strip().lower()
        if symptom in symptom_index:
            found_symptom = True
            input_data[symptom_index[symptom]] = 1

    if not found_symptom:
        return {"Error": "No valid symptoms provided."}

    # Create DataFrame with proper feature names for prediction
    feature_names = [symptom for symptom in symptom_index.keys()]
    input_df = pd.DataFrame([input_data], columns=feature_names)

    rf_pred = encoder.classes_[rf_model.predict(input_df)[0]]
    nb_pred = encoder.classes_[nb_model.predict(input_df)[0]]
    final_pred = mode([rf_pred, nb_pred])

    return {
        "Random Forest Prediction": rf_pred,
        "Naive Bayes Prediction": nb_pred,
        "Final Prediction (Combined)": final_pred
    }


# 1. Basic Testing

print(" Basic Test Cases:")
test_cases = [
    "fever,headache",
    "joint_pain,skin_rash",
    "nausea,yellow_eyes",
    "fatigue,skin_rash",
    "",
    "xyz"
]

for symptoms in test_cases:
    print(f"\n Input: {symptoms}")
    try:
        result = predict_disease(symptoms)
        for k, v in result.items():
            print(f"{k}: {v}")
    except Exception as e:
        print(f" Error: {e}")


# 2. Stress Test

print("\n Frequency of Predictions (100 Random Inputs):")
prediction_counts = []

for _ in range(100):
    random_symptoms = random.sample(all_symptoms, random.randint(2, 4))
    result = predict_disease(",".join(random_symptoms))
    if "Final Prediction (Combined)" in result:
        prediction_counts.append(result["Final Prediction (Combined)"])

counter = Counter(prediction_counts)
for disease, count in counter.items():
    print(f"{disease}: {count} times")
