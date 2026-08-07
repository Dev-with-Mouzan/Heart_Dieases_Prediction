from pathlib import Path

# Base directory of the Backend folder
BASE_DIR = Path(__file__).resolve().parent.parent

# ML Model paths
MODEL_PATH = BASE_DIR / "models" / "KNN_heart.pkl"
SCALER_PATH = BASE_DIR / "models" / "scaler.pkl"
COLUMNS_PATH = BASE_DIR / "models" / "columns.pkl"

# App metadata
APP_TITLE = "Heart Disease Prediction API"
APP_DESCRIPTION = "Predict heart disease risk using a trained KNN model (UCI Heart Disease Dataset)."
APP_VERSION = "1.0.0"
