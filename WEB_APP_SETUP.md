# 🚀 Arogya Connect Web Application Setup

This guide will help you run the Arogya Connect disease prediction web application on your local machine.

## 📋 Prerequisites

- Python 3.7 or higher
- Internet connection (for initial setup)

## 🛠️ Quick Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run the Application

```bash
python app.py
```

### 3. Access the Web App

Open your web browser and go to:
```
http://localhost:5000
```

## 🎯 How to Use

1. **Select Symptoms**: Choose the symptoms you're experiencing from the checkbox list
2. **Get Prediction**: Click the "Get Prediction" button
3. **View Results**: Review the AI-generated disease predictions
4. **Important**: Always consult with healthcare professionals for proper medical advice

## 🔬 Available Symptoms

The system can analyze these 10 symptoms:
- Fever
- Headache  
- Nausea
- Vomiting
- Fatigue
- Joint Pain
- Skin Rash
- Cough
- Weight Loss
- Yellow Eyes

## 🏥 Supported Diseases

The AI model can predict from 32 different diseases including:
- Pneumonia
- Diabetes
- Malaria
- Tuberculosis
- Hepatitis A
- Heart Attack
- And 26 more...

## 🤖 API Endpoints

The application also provides REST API endpoints:

### Get Available Symptoms
```bash
curl http://localhost:5000/api/symptoms
```

### Get Available Diseases
```bash
curl http://localhost:5000/api/diseases
```

### Make a Prediction
```bash
curl -X POST -H "Content-Type: application/json" \
     -d '{"symptoms": ["fever", "headache"]}' \
     http://localhost:5000/api/predict
```

## 📱 Features

- **Modern Web Interface**: Clean, responsive design that works on all devices
- **Real-time Predictions**: Instant disease predictions using ML models
- **Ensemble Learning**: Combines Random Forest and Naive Bayes models
- **Educational Content**: Clear explanations of how predictions are made
- **Medical Disclaimers**: Proper warnings about the limitations of AI predictions
- **Print Support**: Results can be printed for doctor consultations

## 🎨 Technology Stack

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **ML Models**: Scikit-learn (Random Forest, Naive Bayes)
- **Data**: Pandas, NumPy
- **Styling**: Custom CSS with Font Awesome icons

## ⚠️ Important Disclaimers

- This tool is for **educational purposes only**
- **Not a substitute** for professional medical advice
- Always **consult healthcare professionals** for medical concerns
- AI predictions can have **false positives/negatives**
- **Emergency situations** require immediate medical attention

## 🛠️ Troubleshooting

### Common Issues

1. **Port 5000 already in use**:
   ```bash
   # Change port in app.py, line 137:
   app.run(debug=True, host='0.0.0.0', port=5001)
   ```

2. **Module not found errors**:
   ```bash
   pip install --upgrade -r requirements.txt
   ```

3. **Models not loading**:
   - Ensure you're running from the project root directory
   - Check that ML/models/ folder contains all .pkl files

## 🚀 Production Deployment

For production use, consider:

1. **Use a production WSGI server**:
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

2. **Enable HTTPS** for secure communication
3. **Add rate limiting** to prevent abuse
4. **Use environment variables** for configuration
5. **Add logging** for monitoring

## 📧 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all dependencies are properly installed
3. Verify Python version compatibility
4. Review console output for error messages

---

**Remember**: This is an educational tool to demonstrate ML integration in web applications. Always seek professional medical advice for health concerns.