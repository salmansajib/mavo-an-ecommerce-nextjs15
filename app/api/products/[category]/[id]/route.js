import { getProductsByCategory } from "@/lib/fetchProductData";

export async function GET(request, { params }) {
  const { category, id } = await params;

  // Input validation
  if (!category || !id) {
    return Response.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const allProducts = await getProductsByCategory(category);
    const product = allProducts.find((p) => p.id.toString() === id);

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json({ product });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
