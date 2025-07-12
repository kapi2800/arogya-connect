"""
Arogya Connect - Disease Prediction Web Application
A simple Flask web app for disease prediction based on symptoms using ML models.
"""

from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
import pandas as pd
from statistics import mode
import os

app = Flask(__name__)

# Load ML models and data
MODEL_DIR = os.path.join(os.path.dirname(__file__), 'ML', 'models')

try:
    rf_model = joblib.load(os.path.join(MODEL_DIR, 'rf_model.pkl'))
    nb_model = joblib.load(os.path.join(MODEL_DIR, 'nb_model.pkl'))
    encoder = joblib.load(os.path.join(MODEL_DIR, 'encoder.pkl'))
    symptom_index = joblib.load(os.path.join(MODEL_DIR, 'symptom_index.pkl'))
    
    # Get available symptoms and diseases
    AVAILABLE_SYMPTOMS = list(symptom_index.keys())
    AVAILABLE_DISEASES = list(encoder.classes_)
    
    print(f"✅ Models loaded successfully!")
    print(f"📋 Available symptoms: {len(AVAILABLE_SYMPTOMS)}")
    print(f"🏥 Available diseases: {len(AVAILABLE_DISEASES)}")
    
except Exception as e:
    print(f"❌ Error loading models: {e}")
    AVAILABLE_SYMPTOMS = []
    AVAILABLE_DISEASES = []


def predict_disease_from_symptoms(selected_symptoms):
    """
    Predict disease based on selected symptoms
    
    Args:
        selected_symptoms (list): List of symptom names
        
    Returns:
        dict: Prediction results or error message
    """
    try:
        # Validate input
        if not selected_symptoms:
            return {"error": "Please select at least one symptom."}
        
        # Create input vector
        input_data = [0] * len(symptom_index)
        valid_symptoms = []
        
        for symptom in selected_symptoms:
            symptom = symptom.strip().lower()
            if symptom in symptom_index:
                input_data[symptom_index[symptom]] = 1
                valid_symptoms.append(symptom)
        
        if not valid_symptoms:
            return {"error": "No valid symptoms found. Please select valid symptoms."}
        
        # Create DataFrame with proper feature names for prediction
        feature_names = [symptom for symptom in symptom_index.keys()]
        input_df = pd.DataFrame([input_data], columns=feature_names)
        
        # Get predictions from both models
        rf_pred = encoder.classes_[rf_model.predict(input_df)[0]]
        nb_pred = encoder.classes_[nb_model.predict(input_df)[0]]
        
        # Ensemble prediction (majority vote)
        final_pred = mode([rf_pred, nb_pred])
        
        return {
            "success": True,
            "selected_symptoms": valid_symptoms,
            "predictions": {
                "random_forest": rf_pred,
                "naive_bayes": nb_pred,
                "final_prediction": final_pred
            }
        }
        
    except Exception as e:
        return {"error": f"Prediction error: {str(e)}"}


@app.route('/')
def index():
    """Main homepage highlighting ML project and services"""
    return render_template('index.html')


@app.route('/prediction')
def prediction():
    """Disease prediction page with symptom selection"""
    return render_template('prediction.html', symptoms=AVAILABLE_SYMPTOMS)


@app.route('/appointments')
def appointments():
    """Appointment booking page"""
    return render_template('appointments.html')


@app.route('/doctors')
def doctors():
    """Doctors information page"""
    return render_template('doctors.html')


@app.route('/predict', methods=['POST'])
def predict():
    """Handle prediction request"""
    try:
        # Get selected symptoms from form
        selected_symptoms = request.form.getlist('symptoms')
        
        # Get prediction
        result = predict_disease_from_symptoms(selected_symptoms)
        
        if 'error' in result:
            return render_template('prediction.html', 
                                 symptoms=AVAILABLE_SYMPTOMS, 
                                 error=result['error'])
        
        return render_template('result.html', result=result)
        
    except Exception as e:
        return render_template('prediction.html', 
                             symptoms=AVAILABLE_SYMPTOMS, 
                             error=f"An error occurred: {str(e)}")


@app.route('/api/predict', methods=['POST'])
def api_predict():
    """API endpoint for prediction (JSON response)"""
    try:
        data = request.get_json()
        if not data or 'symptoms' not in data:
            return jsonify({"error": "Please provide symptoms in JSON format"}), 400
        
        selected_symptoms = data['symptoms']
        result = predict_disease_from_symptoms(selected_symptoms)
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/symptoms')
def api_symptoms():
    """API endpoint to get available symptoms"""
    return jsonify({"symptoms": AVAILABLE_SYMPTOMS})


@app.route('/api/diseases')
def api_diseases():
    """API endpoint to get available diseases"""
    return jsonify({"diseases": AVAILABLE_DISEASES})


if __name__ == '__main__':
    print("🚀 Starting Arogya Connect Disease Prediction App...")
    print("📡 Access the app at: http://localhost:5000")
    print("🔬 API endpoints available at: /api/predict, /api/symptoms, /api/diseases")
    app.run(debug=True, host='0.0.0.0', port=5000)