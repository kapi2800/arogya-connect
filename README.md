# Arogya Connect

**AI-Powered Disease Prediction Web Application**

Arogya Connect is a beginner-friendly web application that uses machine learning to predict diseases based on symptoms. The project shows how to integrate trained ML models into a user-friendly web interface, making healthcare AI accessible to everyone.

![Arogya Connect Homepage](https://github.com/user-attachments/assets/ecdaa978-dc9e-411a-8b65-a9b9c5c9b89c)

---

## Quick Start

Run the web application in three simple steps:

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the web app
python app.py

# 3. Open in browser
# Go to http://localhost:5000
```

## Features

- **Easy-to-Use Web Interface**
  - Clean, responsive design that works on all devices
  - Simple symptom selection with checkboxes
  - Instant disease predictions

- **Advanced Machine Learning**
  - Ensemble of Random Forest and Naive Bayes models
  - Trained on medical symptom-disease datasets
  - Supports 10 symptoms and 32 diseases

- **Beginner-Friendly**
  - No complex setup required
  - Clear documentation and setup instructions
  - Educational content explaining how AI predictions work

- **Responsible AI**
  - Clear medical disclaimers
  - Guidance to consult healthcare professionals
  - Transparent about AI limitations

- **REST API Support**
  - JSON endpoints for integration
  - API documentation included for developers

![Prediction Results](https://github.com/user-attachments/assets/eb3331ad-e917-430e-b5c1-269f76105b99)

## How It Works

1. Select symptoms from the available options (fever, headache, nausea, etc.)
2. The ensemble ML models analyze the combination of symptoms
3. Receive predictions from Random Forest and Naive Bayes models
4. View detailed results, medical disclaimers, and suggested next steps

## Machine Learning Models

- Random Forest: Ensemble method combining multiple decision trees
- Naive Bayes: Probabilistic classifier based on Bayes' theorem
- Ensemble Prediction: Final prediction uses majority voting for accuracy
- Training Data: Medical symptom-disease relationships from healthcare literature

### Supported Symptoms (10)
`fever`, `headache`, `nausea`, `vomiting`, `fatigue`, `joint_pain`, `skin_rash`, `cough`, `weight_loss`, `yellow_eyes`

### Predicted Diseases (32)
Including Pneumonia, Diabetes, Malaria, Tuberculosis, Hepatitis A, Heart Attack, Arthritis, and many more.

## Project Structure

```
arogya-connect/
├── app.py                 # Main Flask web application
├── templates/             # HTML templates
│   ├── index.html        # Symptom selection page
│   └── result.html       # Prediction results page
├── static/
│   └── style.css         # CSS styling
├── ML/                   # Machine Learning components
│   ├── models/          # Trained ML models (.pkl files)
│   ├── src/             # ML utilities
│   ├── datasets/        # Training data
│   └── test_model.py    # Model testing script
├── requirements.txt      # Python dependencies
├── WEB_APP_SETUP.md     # Setup instructions
└── README.md            # This file
```

## Technology Stack

- Backend: Flask (Python web framework)
- Frontend: HTML5, CSS3, JavaScript
- ML Framework: Scikit-learn
- Data Processing: Pandas, NumPy
- Model Storage: Joblib/Pickle
- Styling: Custom CSS with Font Awesome icons

## Documentation

- [WEB_APP_SETUP.md](WEB_APP_SETUP.md): Complete setup and usage guide
- [ML/README2.md](ML/README2.md): Machine learning model documentation

## API Endpoints

```bash
# Get available symptoms
GET /api/symptoms

# Get available diseases  
GET /api/diseases

# Make prediction
POST /api/predict
Content-Type: application/json
{"symptoms": ["fever", "headache"]}
```

## Important Medical Disclaimer

This tool is for educational and demonstration purposes only.

- **Not a medical diagnosis tool**
- **Not a substitute for professional medical advice**
- **For emergencies, contact local emergency services**
- Always consult qualified healthcare professionals

## Who Is This For?

- ML students interested in deploying ML models in web applications
- Healthcare tech enthusiasts curious about AI in healthcare
- Developers wanting practical Flask + ML integration examples
- Educators demonstrating responsible AI in healthcare
- Portfolio projects showcasing full-stack ML skills

## Getting Started

For detailed setup instructions, see [WEB_APP_SETUP.md](WEB_APP_SETUP.md)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built for education and responsible AI in healthcare.
