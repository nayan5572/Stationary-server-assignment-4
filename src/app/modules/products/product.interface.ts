// Stationery Product Interface
export interface TProduct {
  name: string;
  brand: string;
  price: number;
  category:
    | "Writing"
    | "Office Supplies"
    | "Art Supplies"
    | "Educational"
    | "Technology";
  description: string;
  quantity: number;
  stock?: boolean; // Optional boolean for availability
  inStock: number; // Numeric stock level
  photo: string;
}
