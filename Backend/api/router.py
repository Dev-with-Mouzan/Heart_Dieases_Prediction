from fastapi import APIRouter
from api.route.predict import router as predict_router
from api.route.health import router as health_router

api_router = APIRouter()

api_router.include_router(health_router, prefix="/api")
api_router.include_router(predict_router, prefix="/api")
