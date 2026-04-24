from pydantic import BaseModel
from typing import Optional, List

class Car(BaseModel):
    brand: str
    model: str
    year: int
    price: float
    mileage: int
    category: str
    status: str = "available"
    description: Optional[str] = None
    images: List[str] = []