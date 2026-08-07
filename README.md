<p align="center">
  <img src="assets/icons/logo.svg" width="72" height="72" alt="Heart Disease Prediction logo" />
</p>

<h1 align="center"> Heart Disease Prediction </h1>

<p align="center">
  An end-to-end  **K-Nearest Neighbors** pipeline that predicts heart disease risk from
  11 clinical features  trained on the Heart Failure Prediction Dataset, served by a
  **FastAPI** backend, and presented through a real-time web dashboard.
</p>

<p align="center">
  <img src="assets/icons/badge-python.svg" width="98" height="20" alt="Python 3.11+" />
  <img src="assets/icons/badge-model.svg" width="76" height="20" alt="Model: KNN" />
  <img src="assets/icons/badge-accuracy.svg" width="110" height="20" alt="Accuracy 88.6%" />
  <img src="assets/icons/badge-f1.svg" width="108" height="20" alt="F1-Score 89.9%" />
  <img src="assets/icons/badge-status.svg" width="96" height="20" alt="Status: Active" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Model Performance](#model-performance)
- [Dataset & Features](#dataset--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Heart Disease Prediction is a complete machine-learning project that takes raw clinical
records and turns them into an instant, explainable risk assessment. The pipeline covers
every stage — from exploratory data analysis and model comparison, to serving the trained
model behind a production-style **FastAPI** service and a polished browser interface.

The **K-Nearest Neighbors (KNN)** classifier was selected as the best-performing model
after head-to-head evaluation against Logistic Regression, Naive Bayes, Decision Tree,
and SVM on the 918-record Heart Failure Prediction Dataset.

---

## Features

- <img src="assets/icons/ic-preprocess.svg" width="16" height="16" style="vertical-align:middle;margin-right:8px" alt="" /> **End-to-end ML pipeline** — preprocessing, one-hot encoding, scaling, training, and evaluation
- <img src="assets/icons/ic-api.svg" width="16" height="16" style="vertical-align:middle;margin-right:8px" alt="" /> **REST API** — FastAPI service with automatic Swagger docs at `/docs`
- <img src="assets/icons/ic-risk.svg" width="16" height="16" style="vertical-align:middle;margin-right:8px" alt="" /> **Instant risk scoring** — prediction, confidence, risk percentage, risk level, and plain-language advice
- <img src="assets/icons/ic-dashboard.svg" width="16" height="16" style="vertical-align:middle;margin-right:8px" alt="" /> **Web dashboard** — CardioPredict frontend with animated risk gauge built in vanilla HTML/CSS/JS
- <img src="assets/icons/ic-notebook.svg" width="16" height="16" style="vertical-align:middle;margin-right:8px" alt="" /> **Reproducible research** — Jupyter notebook covering EDA, cleaning, and model comparison
- <img src="assets/icons/ic-artifacts.svg" width="16" height="16" style="vertical-align:middle;margin-right:8px" alt="" /> **Serialized artifacts** — trained model, scaler, and feature columns ready for deployment

---

## How It Works

| Step | Icon | Description |
| ---- | ---- | ----------- |
| **1 · Input** | <img src="assets/icons/ic-preprocess.svg" width="22" height="22" alt="" /> | Submit the 11 clinical features through the web form or the REST API. |
| **2 · Transform** | <img src="assets/icons/ic-transform.svg" width="22" height="22" alt="" /> | Features are one-hot encoded and scaled with the same `StandardScaler` used at training time. |
| **3 · Predict** | <img src="assets/icons/ic-predict.svg" width="22" height="22" alt="" /> | The KNN classifier returns the class, confidence, risk percentage, and risk level. |

The risk assessment is returned in **under a second**, along with a human-readable
message and medical guidance.

---

## Model Performance

Models were evaluated on a held-out test split of the 918-record dataset. **KNN**
achieved the best overall balance of accuracy and F1-score.

| Model | Accuracy | F1 Score |
| ----- | -------- | -------- |
| **K-Nearest Neighbors** | **0.8859** | **0.8986** |
| Logistic Regression | 0.8750 | 0.8878 |
| Naive Bayes | 0.8696 | 0.8788 |
| SVM (RBF Kernel) | 0.8641 | 0.8804 |
| Decision Tree | 0.7663 | 0.7817 |

> **Note:** KNN was trained with the default `k = 5`. Hyperparameter tuning
> (`GridSearchCV` / `RandomizedSearchCV`) is a natural next step to push accuracy further.

---

## Dataset & Features

The model is trained on the **[Heart Failure Prediction Dataset](https://www.kaggle.com/datasets/fedesoriano/heart-failure-prediction)**
— 918 patient records with 11 clinical attributes plus a binary target. The API consumes
the same 11 features.

| Feature | Description | Values |
| ------- | ----------- | ------ |
| `age` | Patient age (years) | 28 – 77 |
| `sex` | Biological sex | `M`, `F` |
| `chest_pain_type` | Chest pain type | `ATA`, `NAP`, `TA`, `ASY` |
| `resting_bp` | Resting blood pressure (mm Hg) | 0 – 200 |
| `cholesterol` | Serum cholesterol (mg/dl) | 0 – 603 |
| `fasting_bs` | Fasting blood sugar > 120 mg/dl | 0, 1 |
| `resting_ecg` | Resting ECG result | `Normal`, `ST`, `LVH` |
| `max_hr` | Maximum heart rate achieved (bpm) | 60 – 202 |
| `exercise_angina` | Exercise-induced angina | `Y`, `N` |
| `oldpeak` | ST depression induced by exercise | –2.6 – 6.2 |
| `st_slope` | Slope of peak exercise ST segment | `Up`, `Flat`, `Down` |

**Target:** `HeartDisease` — `0` = no disease, `1` = disease present (≈ 55% of records positive).

---

## Tech Stack

- <img src="assets/icons/python.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **Python** — core implementation
- <img src="assets/icons/numpy.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **NumPy** — numerical arrays & performance
- <img src="assets/icons/pandas.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **Pandas** — tabular data processing
- <img src="assets/icons/sklearn.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **scikit-learn** — modeling & evaluation
- <img src="assets/icons/fastapi.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **FastAPI** — REST API framework
- <img src="assets/icons/uvicorn.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **Uvicorn** — ASGI server
- <img src="assets/icons/joblib.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **Joblib** — model serialization
- <img src="assets/icons/jupyter.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **Jupyter** — exploratory analysis
- <img src="assets/icons/javascript.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **JavaScript** — interactive dashboard
- <img src="assets/icons/html.svg" width="18" height="18" style="vertical-align:middle;margin-right:8px" alt="" /> **HTML / CSS** — markup & design system

---

## Project Structure

```
Heart_Dieases_Prediction/
├── assets/
│   └── icons/                        # SVG icons used by the README
├── Backend/
│   ├── main.py                       # FastAPI entry point (uvicorn)
│   ├── requirements.txt              # Python dependencies
│   ├── api/
│   │   ├── router.py                 # API router aggregator
│   │   ├── route.py                  # Router alias
│   │   └── route/
│   │       ├── health.py             # GET /api/health
│   │       └── predict.py            # POST /api/predict
│   ├── core/
│   │   ├── config.py                 # Paths & app metadata
│   │   └── ml_service.py             # KNN inference service (load + predict)
│   ├── Dataset/
│   │   └── heart.csv                 # Heart Failure dataset (918 rows)
│   ├── models/
│   │   ├── KNN_heart.pkl             # Trained KNN classifier
│   │   ├── scaler.pkl                # Fitted StandardScaler
│   │   ├── columns.pkl               # One-hot encoded feature columns
│   │   └── predict.py                # Pydantic request/response schemas
│   └── notebook/
│       └── HeartdiseaseFinal.ipynb   # EDA, cleaning & model comparison
└── Frontend/
    ├── index.html                    # CardioPredict SPA
    ├── css/
    │   └── style.css                 # Design system & animations
    └── js/
        └── app.js                    # API client & UI logic
```

---

## Getting Started

### Prerequisites

- <img src="assets/icons/python.svg" width="14" height="14" style="vertical-align:middle;margin-right:6px" alt="" /> **Python 3.11+**
- <img src="assets/icons/browser.svg" width="14" height="14" style="vertical-align:middle;margin-right:6px" alt="" /> A modern web browser (Chrome, Edge, Firefox, Safari)

### Installation

1. Clone the repository:

```powershell
git clone https://github.com/Dev-with-Mouzan/Heart_Dieases_Prediction.git

cd Heart_Dieases_Prediction
```

2. Create and activate a virtual environment:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1   # Windows PowerShell
```

3. Install dependencies:

```powershell
pip install -r Backend/requirements.txt
```

### Run the API

```powershell
python Backend/main.py
```

The server starts at `http://localhost:8000`:

- Interactive docs (Swagger UI): <a href="http://localhost:8000/docs">http://localhost:8000/docs</a>
- ReDoc: <a href="http://localhost:8000/redoc">http://localhost:8000/redoc</a>

### Run the Web Dashboard

Open `Frontend/index.html` in your browser. The dashboard reads the API status badge in
the header and calls `http://localhost:8000` for predictions, so keep the server running.

### Explore the Notebook

```powershell
jupyter notebook Backend/notebook/HeartdiseaseFinal.ipynb
```

---

## API Reference

All endpoints are exposed under the `/api` prefix.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| <img src="assets/icons/badge-get.svg" width="40" height="14" alt="GET" /> | `/api/health` | Service health check |
| <img src="assets/icons/badge-post.svg" width="42" height="14" alt="POST" /> | `/api/predict` | Predict heart disease risk |
| <img src="assets/icons/badge-get.svg" width="40" height="14" alt="GET" /> | `/` | Service metadata & links |

### Example request

```bash
curl -X POST http://localhost:8000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
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
    "st_slope": "Up"
  }'
```

### Example response

```json
{
  "prediction": 1,
  "label": "Heart Disease Detected",
  "confidence": 94.12,
  "risk_percent": 94.12,
  "risk_level": "High",
  "message": "The model predicts a risk of heart disease. Please consult a cardiologist."
}
```

---

## Contributing

Contributions, bug reports, and feature suggestions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Follow the existing code patterns in `Backend/` and `core/`.
4. Commit your changes and open a pull request.

For bugs and feature requests, please open an [issue](../../issues).

---

## License

This repository is provided for **learning and experimentation** and is not a medical
device. The trained model and this tool should never replace professional medical advice 
always consult a qualified cardiologist for any health concerns.



---

<p align="center">
  <sub>Built with 💓 By Mouzan Raza</sub>
</p>
