from fastapi import APIRouter, HTTPException
from bson import ObjectId
from database import db
from models.car_model import Car

router = APIRouter(prefix="/cars", tags=["Cars"])

def serialize_car(car):
    return {
        "id": str(car["_id"]),
        "brand": car["brand"],
        "model": car["model"],
        "year": car["year"],
        "price": car["price"],
        "mileage": car["mileage"],
        "category": car["category"],
        "status": car["status"],
        "description": car.get("description"),
        "images": car.get("images", [])
    }

@router.post("/")
async def create_car(car: Car):
    result = await db.cars.insert_one(car.model_dump())
    new_car = await db.cars.find_one({"_id": result.inserted_id})
    return serialize_car(new_car)

@router.get("/")
async def get_cars():
    cars = await db.cars.find().to_list(100)
    return [serialize_car(car) for car in cars]

@router.get("/{car_id}")
async def get_car(car_id: str):
    car = await db.cars.find_one({"_id": ObjectId(car_id)})
    if not car:
        raise HTTPException(status_code=404, detail="Car not found")
    return serialize_car(car)

@router.put("/{car_id}")
async def update_car(car_id: str, car: Car):
    result = await db.cars.update_one(
        {"_id": ObjectId(car_id)},
        {"$set": car.model_dump()}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Car not found")
    updated_car = await db.cars.find_one({"_id": ObjectId(car_id)})
    return serialize_car(updated_car)

@router.delete("/{car_id}")
async def delete_car(car_id: str):
    result = await db.cars.delete_one({"_id": ObjectId(car_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Car not found")
    return {"message": "Car deleted successfully"}