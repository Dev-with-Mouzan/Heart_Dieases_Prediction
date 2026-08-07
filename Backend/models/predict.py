from pydantic import BaseModel, Field
from typing import Literal


class PredictRequest(BaseModel):
    """Input features for heart disease prediction (Heart Failure Prediction dataset format)."""

    age: int = Field(..., ge=1, le=120, description="Age of the patient in years")
    sex: Literal["M", "F"] = Field(..., description="Sex: M = Male, F = Female")
    chest_pain_type: Literal["ATA", "NAP", "TA", "ASY"] = Field(
        ..., description="Chest pain type: ATA = Atypical Angina, NAP = Non-anginal Pain, TA = Typical Angina, ASY = Asymptomatic"
    )
    resting_bp: float = Field(..., ge=0, le=250, description="Resting blood pressure (mm Hg)")
    cholesterol: float = Field(..., ge=0, le=700, description="Serum cholesterol (mg/dl)")
    fasting_bs: int = Field(..., ge=0, le=1, description="Fasting blood sugar > 120 mg/dl: 1 = True, 0 = False")
    resting_ecg: Literal["Normal", "ST", "LVH"] = Field(
        ..., description="Resting ECG results: Normal, ST-T wave abnormality (ST), Left ventricular hypertrophy (LVH)"
    )
    max_hr: int = Field(..., ge=60, le=250, description="Maximum heart rate achieved")
    exercise_angina: Literal["Y", "N"] = Field(..., description="Exercise-induced angina: Y = Yes, N = No")
    oldpeak: float = Field(..., ge=0.0, le=10.0, description="ST depression induced by exercise relative to rest")
    st_slope: Literal["Up", "Flat", "Down"] = Field(
        ..., description="Slope of peak exercise ST segment: Up = Upsloping, Flat = Flat, Down = Downsloping"
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "age": 40,
                "sex": "M",
                "chest_pain_type": "ATA",
                "resting_bp": 140,
                "cholesterol": 289,
                "fasting_bs": 0,
                "resting_ecg": "Normal",
                "max_hr": 172,
                "exercise_angina": "N",
                "oldpeak": 0.0,
                "st_slope": "Up",
            }
        }
    }


class PredictResponse(BaseModel):
    """Prediction result from the KNN model."""

    prediction: int = Field(..., description="0 = No Disease, 1 = Disease Present")
    label: str = Field(..., description="Human-readable prediction label")
    confidence: float = Field(..., description="Model confidence for the predicted class (%)")
    risk_percent: float = Field(..., description="Probability of heart disease (%)")
    risk_level: Literal["Low", "Moderate", "High"] = Field(..., description="Risk level category")
    message: str = Field(..., description="Advice message based on prediction")
