from fastapi import APIRouter, HTTPException
from models.predict import PredictRequest, PredictResponse
from core.ml_service import ml_service

router = APIRouter()


@router.post("/predict", response_model=PredictResponse, tags=["Prediction"])
async def predict_heart_disease(request: PredictRequest):
    """
    Predict the risk of heart disease based on 13 clinical features.

    - **prediction**: 0 = No Disease, 1 = Disease Present
    - **confidence**: Model confidence for the predicted class (%)
    - **risk_percent**: Probability of heart disease (%)
    - **risk_level**: Low / Moderate / High
    - **label**: Human-readable result
    - **message**: Advice based on prediction
    """
    try:
        features = request.model_dump()
        result = ml_service.predict(features)
        return PredictResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")
