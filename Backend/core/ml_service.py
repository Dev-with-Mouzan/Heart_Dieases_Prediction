import joblib
import numpy as np
from core.config import MODEL_PATH, SCALER_PATH, COLUMNS_PATH


class MLService:
    """Service that loads and runs the trained KNN heart disease model."""

    def __init__(self):
        self.model = None
        self.scaler = None
        self.columns = None
        self._load()

    def _load(self):
        """Load model, scaler, and column names from disk."""
        try:
            self.model = joblib.load(MODEL_PATH)
            self.scaler = joblib.load(SCALER_PATH)
            self.columns = joblib.load(COLUMNS_PATH)
            print(f"[MLService] Model loaded from {MODEL_PATH}")
            print(f"[MLService] Scaler loaded from {SCALER_PATH}")
            print(f"[MLService] Columns loaded: {self.columns}")
        except FileNotFoundError as e:
            print(f"[MLService] Model file not found: {e}")
            raise RuntimeError(
                "Model files are missing. Please ensure KNN_heart.pkl, scaler.pkl, "
                "and columns.pkl exist in the Backend/models/ directory."
            )

    def predict(self, features: dict) -> dict:
        """
        Run prediction on a dict of feature values.

        Args:
            features: dict with the raw dataset features (Age, Sex, ChestPainType,
                      RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR,
                      ExerciseAngina, Oldpeak, ST_Slope).

        Returns:
            dict with keys: prediction (int), confidence (float), label (str), message (str)
        """
        # Build one-hot encoded feature array in the trained model's column order
        encoded = _encode_features(features)
        input_array = np.array([[encoded[col] for col in self.columns]])

        # Scale features
        input_scaled = self.scaler.transform(input_array)

        # Predict class
        prediction = int(self.model.predict(input_scaled)[0])

        # Confidence via predict_proba (probability of class 1)
        proba = self.model.predict_proba(input_scaled)[0]
        confidence = float(proba[prediction])
        risk_percent = float(proba[1]) * 100  # probability of having disease

        label = "Heart Disease Detected" if prediction == 1 else "No Heart Disease"
        risk_level = _get_risk_level(risk_percent)

        message = (
            "The model predicts a risk of heart disease. Please consult a cardiologist."
            if prediction == 1
            else "The model predicts no significant risk of heart disease. Maintain a healthy lifestyle!"
        )

        return {
            "prediction": prediction,
            "confidence": round(confidence * 100, 2),
            "risk_percent": round(risk_percent, 2),
            "risk_level": risk_level,
            "label": label,
            "message": message,
        }


def _get_risk_level(risk_percent: float) -> str:
    if risk_percent < 30:
        return "Low"
    elif risk_percent < 60:
        return "Moderate"
    else:
        return "High"


def _encode_features(f: dict) -> dict:
    """Encode raw dataset features into the trained model's one-hot columns."""
    encoded = {
        "Age": float(f["age"]),
        "RestingBP": float(f["resting_bp"]),
        "Cholesterol": float(f["cholesterol"]),
        "FastingBS": int(f["fasting_bs"]),
        "MaxHR": float(f["max_hr"]),
        "Oldpeak": float(f["oldpeak"]),
        "Sex_M": 1 if f["sex"] == "M" else 0,
        "ChestPainType_ATA": 1 if f["chest_pain_type"] == "ATA" else 0,
        "ChestPainType_NAP": 1 if f["chest_pain_type"] == "NAP" else 0,
        "ChestPainType_TA": 1 if f["chest_pain_type"] == "TA" else 0,
        "RestingECG_Normal": 1 if f["resting_ecg"] == "Normal" else 0,
        "RestingECG_ST": 1 if f["resting_ecg"] == "ST" else 0,
        "ExerciseAngina_Y": 1 if f["exercise_angina"] == "Y" else 0,
        "ST_Slope_Flat": 1 if f["st_slope"] == "Flat" else 0,
        "ST_Slope_Up": 1 if f["st_slope"] == "Up" else 0,
    }
    return encoded


# Singleton instance – imported by route handlers
ml_service = MLService()
