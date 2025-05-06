import { getProductsByCategory } from "@/lib/fetchProductData";

export async function GET(request, { params }) {
  const { category } = await params;
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "6", 10);
  const direction = url.searchParams.get("direction") || "first";
  const random = url.searchParams.get("random") === "true";
  const excludeFirst = parseInt(
    url.searchParams.get("excludeFirst") || "0",
    10,
  );

  // Input validation
  if (
    !category ||
    page < 1 ||
    limit < 1 ||
    isNaN(page) ||
    isNaN(limit) ||
    !["first", "last"].includes(direction) ||
    excludeFirst < 0 ||
    isNaN(excludeFirst)
  ) {
    return Response.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const allProducts = await getProductsByCategory(category);
    const total = allProducts.length;
    let paginatedProducts;

    if (random) {
      // Exclude first N products and select random
      const availableProducts = allProducts.slice(excludeFirst);
      if (availableProducts.length < limit) {
        paginatedProducts = availableProducts.sort(() => Math.random() - 0.5);
      } else {
        const shuffled = availableProducts.sort(() => Math.random() - 0.5);
        paginatedProducts = shuffled.slice(0, limit);
      }
    } else if (direction === "first") {
      const start = (page - 1) * limit;
      paginatedProducts = allProducts.slice(start, start + limit);
    } else {
      // direction === "last"
      const start = Math.max(total - page * limit, 0);
      paginatedProducts = allProducts.slice(start, start + limit).reverse();
    }

    return Response.json({ products: paginatedProducts, total });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
