import { getAllClothProducts } from "@/lib/fetchClothData";

export async function GET() {
  const products = await getAllClothProducts();
  return Response.json(products);
}
