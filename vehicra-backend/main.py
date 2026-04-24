from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.car_routes import router as car_router

app = FastAPI(title="Vehicra API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(car_router)

@app.get("/")
def root():
    return {"message": "Vehicra API running"}