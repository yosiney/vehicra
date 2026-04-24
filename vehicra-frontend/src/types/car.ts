export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  type: string;
  condition: "new" | "used";
  status: "available" | "sold" | "reserved";
  legalStatus: string;
  financingAvailable: boolean;
  description: string;
  features: string[];
  images: string[];
}