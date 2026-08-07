<p align="center">
  <svg width="72" height="72" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#ffffff" stroke="#d7e1ec" stroke-width="1.5"/>
    <path d="M24 36.5C19 32 11 27 11 19.5 11 15 14.5 11.5 18.5 11.5 21 11.5 23 13 24 15 25 13 27 11.5 29.5 11.5 33.5 11.5 37 15 37 19.5 37 27 29 32 24 36.5Z" fill="#f43f5e"/>
    <path d="M13 23.5H20L22 20.5L26 26.5L28 23.5H35" fill="none" stroke="#0f8b9e" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</p>

# Heart Disease Prediction

<p align="center">
  An end-to-end <b>K-Nearest Neighbors</b> pipeline that predicts heart disease risk from
  11 clinical features trained on the Heart Failure Prediction Dataset, served by a
  <b>FastAPI</b> backend, and presented through a real-time web dashboard.
</p>

<p align="center">
  <svg width="98" height="20" viewBox="0 0 98 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Python 3.11+">
    <rect width="50" height="20" fill="#1f2d3d"/>
    <rect x="50" width="48" height="20" fill="#3776AB"/>
    <text x="25" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="42" lengthAdjust="spacingAndGlyphs">PYTHON</text>
    <text x="74" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="40" lengthAdjust="spacingAndGlyphs">3.11+</text>
  </svg>
  <svg width="76" height="20" viewBox="0 0 76 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Model KNN">
    <rect width="40" height="20" fill="#1f2d3d"/>
    <rect x="40" width="36" height="20" fill="#f59e0b"/>
    <text x="20" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="32" lengthAdjust="spacingAndGlyphs">MODEL</text>
    <text x="58" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="28" lengthAdjust="spacingAndGlyphs">KNN</text>
  </svg>
  <svg width="110" height="20" viewBox="0 0 110 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Accuracy 88.6%">
    <rect width="62" height="20" fill="#1f2d3d"/>
    <rect x="62" width="48" height="20" fill="#10b981"/>
    <text x="31" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="54" lengthAdjust="spacingAndGlyphs">ACCURACY</text>
    <text x="86" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="40" lengthAdjust="spacingAndGlyphs">88.6%</text>
  </svg>
  <svg width="108" height="20" viewBox="0 0 108 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="F1-Score 89.9%">
    <rect width="60" height="20" fill="#1f2d3d"/>
    <rect x="60" width="48" height="20" fill="#0f8b9e"/>
    <text x="30" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="52" lengthAdjust="spacingAndGlyphs">F1-SCORE</text>
    <text x="84" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="40" lengthAdjust="spacingAndGlyphs">89.9%</text>
  </svg>
  <svg width="96" height="20" viewBox="0 0 96 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Status Active">
    <rect width="48" height="20" fill="#1f2d3d"/>
    <rect x="48" width="48" height="20" fill="#16a34a"/>
    <text x="24" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="40" lengthAdjust="spacingAndGlyphs">STATUS</text>
    <text x="72" y="14" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#ffffff" textLength="40" lengthAdjust="spacingAndGlyphs">ACTIVE</text>
  </svg>
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
every stage  from exploratory data analysis and model comparison, to serving the trained
model behind a production-style **FastAPI** service and a polished browser interface.

The **K-Nearest Neighbors (KNN)** classifier was selected as the best-performing model
after head-to-head evaluation against Logistic Regression, Naive Bayes, Decision Tree,
and SVM on the 918-record Heart Failure Prediction Dataset.

---

## Features

- <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#0f8b9e"/><path d="M8 8h8v8H8z" fill="#ffffff"/></svg> **End-to-end ML pipeline** — preprocessing, one-hot encoding, scaling, training, and evaluation
- <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#10b981"/><path d="M12 8v8M8 12h8" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg> **REST API** — FastAPI service with automatic Swagger docs at `/docs`
- <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" fill="#f59e0b"/></svg> **Instant risk scoring** — prediction, confidence, risk percentage, risk level, and plain-language advice
- <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#f43f5e"/><path d="M8 15l3-4 3 3 2-3" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> **Web dashboard** — CardioPredict frontend with animated risk gauge built in vanilla HTML/CSS/JS
- <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" fill="#6366f1"/><path d="M3 9h18M7 4v16" fill="none" stroke="#ffffff" stroke-width="1.6"/></svg> **Reproducible research** — Jupyter notebook covering EDA, cleaning, and model comparison
- <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><path d="M12 3v10M7 9l5 5 5-5" stroke="#0f766e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="16" width="16" height="4" rx="1.5" fill="#0f766e"/></svg> **Serialized artifacts** — trained model, scaler, and feature columns ready for deployment

---

## How It Works

| Step | SVG | Description |
| ---- | --- | ----------- |
| **1 · Input** | <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#0f8b9e"/><path d="M8 8h8v8H8z" fill="#ffffff"/></svg> | Submit the 11 clinical features through the web form or the REST API. |
| **2 · Transform** | <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 6h16M4 12h10M4 18h16" stroke="#f59e0b" stroke-width="2.4" stroke-linecap="round"/></svg> | Features are one-hot encoded and scaled with the same `StandardScaler` used at training time. |
| **3 · Predict** | <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#10b981"/><path d="M12 7.5v4.5l3 2" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | The KNN classifier returns the class, confidence, risk percentage, and risk level. |

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

- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><path fill="#3776AB" d="M9.6 2C6.9 2 6 3.6 6 5.3V8h5v1H6 4.7A2.7 2.7 0 0 0 2 11.7c0 1.9 1.4 2.6 3.2 2.7H6v-2.3C6 10 7.4 8.9 9.6 8.9h4.8C16.3 8.9 17 7.9 17 6.4V5.3C17 3 15 2 13.4 2h-3.8Zm-.6 1.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path fill="#FFD43B" d="M14.4 22c2.7 0 3.6-1.6 3.6-3.3V16h-5v-1h5 1.3a2.7 2.7 0 0 0 2.7-2.7c0-1.9-1.4-2.6-3.2-2.7H18v2.3c0 1.7-1.4 2.8-3.6 2.8H9.6C7.7 14.7 7 15.7 7 17.2v1.1C7 20.5 9 22 10.6 22h3.8Zm.6-1.6a1 1 0 1 1 0-2 1 1 0 0 1 0-2Z"/></svg> **Python** — core implementation
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#013243"/><g fill="#4DABCF"><rect x="7" y="7" width="3.4" height="3.4"/><rect x="13.6" y="7" width="3.4" height="3.4"/><rect x="7" y="13.6" width="3.4" height="3.4"/><rect x="13.6" y="13.6" width="3.4" height="3.4"/></g></svg> **NumPy** — numerical arrays & performance
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#150458"/><rect x="6" y="6" width="12" height="2.6" fill="#E70488"/><rect x="6" y="10" width="12" height="1.8" fill="#ffffff"/><rect x="6" y="13" width="12" height="1.8" fill="#ffffff"/><rect x="6" y="16" width="12" height="1.8" fill="#ffffff"/></svg> **Pandas** — tabular data processing
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#F7931E"/><path d="M5 16l4-6 6 4 4-8" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> **scikit-learn** — modeling & evaluation
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#009688"/><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" fill="#ffffff"/></svg> **FastAPI** — REST API framework
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#499848"/><path d="M10 9l4 3-4 3V9Z" fill="#ffffff"/></svg> **Uvicorn** — ASGI server
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#F3762A"/><path d="M12 5v8M8.5 9.5 12 13l3.5-3.5" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="6.5" y="15" width="11" height="2.6" rx="1.3" fill="#ffffff"/></svg> **Joblib** — model serialization
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#F37626"/><path d="M12 15.5V8.5M9.5 11 12 8.5l2.5 2.5" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> **Jupyter** — exploratory analysis
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#F7DF1E"/><path d="M9 7h2.4v7.6h2.8V7h2.4v10H9.6V7H9Zm4.6 0 2 2 1.8-2h2l-3.6 4L17.4 17h-2l-1.8-2.2L11.8 17h-2l3.4-3.8L12.6 7h1Z" fill="#323330" transform="translate(-1,0) scale(0.85)"/></svg> **JavaScript** — interactive dashboard
- <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#E34F26"/><path d="M6.2 4.5h11.6l-.9 11.3L12 17.8l-4.9-2-.3-3h2.3l.1 1.5 2.8 1.1 2.8-1.1.3-3.4H6.6L6.2 4.5Z" fill="#ffffff"/></svg> **HTML / CSS** — markup & design system

---

## Project Structure

```
Heart_Dieases_Prediction/
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

- <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:6px" aria-hidden="true"><path fill="#3776AB" d="M9.6 2C6.9 2 6 3.6 6 5.3V8h5v1H6 4.7A2.7 2.7 0 0 0 2 11.7c0 1.9 1.4 2.6 3.2 2.7H6v-2.3C6 10 7.4 8.9 9.6 8.9h4.8C16.3 8.9 17 7.9 17 6.4V5.3C17 3 15 2 13.4 2h-3.8Z"/><path fill="#FFD43B" d="M14.4 22c2.7 0 3.6-1.6 3.6-3.3V16h-5v-1h5 1.3a2.7 2.7 0 0 0 2.7-2.7c0-1.9-1.4-2.6-3.2-2.7H18v2.3c0 1.7-1.4 2.8-3.6 2.8H9.6C7.7 14.7 7 15.7 7 17.2v1.1C7 20.5 9 22 10.6 22h3.8Z"/></svg> **Python 3.11+**
- <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:6px" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" fill="#0f8b9e"/><path d="M12 12l5-3M12 12v8" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg> A modern web browser (Chrome, Edge, Firefox, Safari)

### Installation

1. Clone the repository:

```powershell
https://github.com/Dev-with-Mouzan/Heart_Dieases_Prediction.git

cd Heart_Dieases_Prediction
```

2. Create and activate a virtual environment:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1   # Windows PowerShell
```

3. Install dependencies:

```powershell
pip install -r requirements.txt
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
| <svg width="40" height="14" viewBox="0 0 40 14" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle" aria-hidden="true"><rect width="40" height="14" rx="3" fill="#10b981"/><text x="20" y="10" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="8" font-weight="700" fill="#ffffff" textLength="34" lengthAdjust="spacingAndGlyphs">GET</text></svg> | `/api/health` | Service health check |
| <svg width="42" height="14" viewBox="0 0 42 14" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle" aria-hidden="true"><rect width="42" height="14" rx="3" fill="#f59e0b"/><text x="21" y="10" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="8" font-weight="700" fill="#ffffff" textLength="36" lengthAdjust="spacingAndGlyphs">POST</text></svg> | `/api/predict` | Predict heart disease risk |
| <svg width="40" height="14" viewBox="0 0 40 14" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle" aria-hidden="true"><rect width="40" height="14" rx="3" fill="#10b981"/><text x="20" y="10" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="8" font-weight="700" fill="#ffffff" textLength="34" lengthAdjust="spacingAndGlyphs">GET</text></svg> | `/` | Service metadata & links |

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
device. The trained model and this tool should never replace professional medical advice —
always consult a qualified cardiologist for any health concerns.


---

<p align="center">
  <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#ffffff" stroke="#d7e1ec" stroke-width="1.5"/>
    <path d="M24 36.5C19 32 11 27 11 19.5 11 15 14.5 11.5 18.5 11.5 21 11.5 23 13 24 15 25 13 27 11.5 29.5 11.5 33.5 11.5 37 15 37 19.5 37 27 29 32 24 36.5Z" fill="#f43f5e"/>
    <path d="M13 23.5H20L22 20.5L26 26.5L28 23.5H35" fill="none" stroke="#0f8b9e" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <br />
  <sub>Built with FastAPI & scikit-learn · KNN trained on the Heart Failure Prediction Dataset</sub>
</p>
