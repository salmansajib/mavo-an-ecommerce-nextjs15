import { getProductsByCategory } from "@/lib/fetchProductData";

export async function GET(request, { params }) {
  const { category } = await params; // Await params before destructuring
  try {
    const products = await getProductsByCategory(category);
    return Response.json(products);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
