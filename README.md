# 🏥 Arogya Connect

**AI-Powered Disease Prediction Web Application**

Arogya Connect is a simple, beginner-friendly web application that uses machine learning to predict diseases based on symptoms. This project demonstrates how to integrate trained ML models into a user-friendly web interface, making healthcare AI accessible to everyone.

![Arogya Connect Homepage](https://github.com/user-attachments/assets/ecdaa978-dc9e-411a-8b65-a9b9c5c9b89c)

---

## 🚀 Quick Start

**Run the web application in 3 simple steps:**

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the web app
python app.py

# 3. Open in browser
# Go to http://localhost:5000
```

## 🔑 Features

- 🌐 **Easy-to-Use Web Interface**
  - Clean, responsive design that works on all devices
  - Simple symptom selection with checkboxes
  - Instant disease predictions

- 🤖 **Advanced Machine Learning**
  - Ensemble of Random Forest and Naive Bayes models
  - Trained on medical symptom-disease datasets
  - Supports 10 symptoms and 32 diseases

- 📱 **Beginner-Friendly**
  - No complex setup required
  - Clear documentation and setup instructions
  - Educational content explaining how AI predictions work

- 🛡️ **Responsible AI**
  - Clear medical disclaimers
  - Guidance to consult healthcare professionals
  - Transparent about AI limitations

- 🔌 **REST API Support**
  - JSON endpoints for integration
  - Developer-friendly API documentation

![Prediction Results](https://github.com/user-attachments/assets/eb3331ad-e917-430e-b5c1-269f76105b99)

## 🎯 How It Works

1. **Select Symptoms**: Choose from 10 available symptoms (fever, headache, nausea, etc.)
2. **AI Analysis**: Our ensemble ML models analyze the symptom combination
3. **Get Predictions**: Receive predictions from Random Forest and Naive Bayes models
4. **View Results**: See detailed results with medical disclaimers and next steps

## 🧠 Machine Learning Models

- **Random Forest**: Ensemble method combining multiple decision trees
- **Naive Bayes**: Probabilistic classifier based on Bayes' theorem
- **Ensemble Prediction**: Final prediction uses majority voting for accuracy
- **Training Data**: Medical symptom-disease relationships from healthcare literature

### Supported Symptoms (10)
`fever`, `headache`, `nausea`, `vomiting`, `fatigue`, `joint_pain`, `skin_rash`, `cough`, `weight_loss`, `yellow_eyes`

### Predicted Diseases (32)
Including: Pneumonia, Diabetes, Malaria, Tuberculosis, Hepatitis A, Heart Attack, Arthritis, and 25 more...

## 📁 Project Structure

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
├── WEB_APP_SETUP.md     # Detailed setup instructions
└── README.md            # This file
```

## 🛠️ Technology Stack

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **ML Framework**: Scikit-learn
- **Data Processing**: Pandas, NumPy
- **Model Storage**: Joblib/Pickle
- **Styling**: Custom CSS with Font Awesome icons

## 📖 Documentation

- **[WEB_APP_SETUP.md](WEB_APP_SETUP.md)**: Complete setup and usage guide
- **[ML/README2.md](ML/README2.md)**: Machine learning model documentation

## 🔌 API Endpoints

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

## ⚠️ Important Medical Disclaimer

**This tool is for educational and demonstration purposes only.**

- ❌ **NOT a medical diagnosis tool**
- ❌ **NOT a substitute for professional medical advice**
- ✅ **Educational demonstration of ML in healthcare**
- ✅ **Always consult qualified healthcare professionals**
- ✅ **For emergencies, contact local emergency services**

## 🤝 Perfect for

- **ML Students**: Learn how to deploy ML models in web applications
- **Healthcare Tech Enthusiasts**: Understand AI in healthcare applications  
- **Developers**: See practical Flask + ML integration
- **Educators**: Demonstrate responsible AI in healthcare
- **Portfolio Projects**: Showcase full-stack ML capabilities

## 🚀 Getting Started

For detailed setup instructions, see **[WEB_APP_SETUP.md](WEB_APP_SETUP.md)**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for education and responsible AI in healthcare**
