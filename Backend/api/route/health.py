from fastapi import APIRouter

router = APIRouter()


@router.get("/health", tags=["Health"])
async def health_check():
    """
    Health check endpoint.
    Returns 200 OK when the API is up and running.
    """
    return {"status": "ok", "message": "Heart Disease Prediction API is running."}
