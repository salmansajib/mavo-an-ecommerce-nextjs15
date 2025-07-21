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

  const filterCategory = url.searchParams.get("filterCategory") || "";
  const filterMaterial = url.searchParams.get("filterMaterial") || "";
  const filterSize = url.searchParams.get("filterSize") || "";
  const priceMin = parseFloat(url.searchParams.get("priceMin"));
  const priceMax = parseFloat(url.searchParams.get("priceMax"));

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

    // Filter logic
    const filteredProducts = allProducts.filter((product) => {
      const matchCategory = filterCategory
        ? product.category === filterCategory
        : true;
      const matchMaterial = filterMaterial
        ? product.material === filterMaterial
        : true;
      const matchSize = filterSize
        ? product.variants.some((variant) =>
            variant.sizes.some(
              (size) => size.size.toLowerCase() === filterSize.toLowerCase(),
            ),
          )
        : true;

      const variantPrices = product.variants.flatMap((variant) =>
        variant.sizes.map((size) => size.price),
      );
      const minVariantPrice = Math.min(...variantPrices);
      const maxVariantPrice = Math.max(...variantPrices);

      const matchMinPrice = isNaN(priceMin)
        ? true
        : maxVariantPrice >= priceMin;
      const matchMaxPrice = isNaN(priceMax)
        ? true
        : minVariantPrice <= priceMax;

      return (
        matchCategory &&
        matchMaterial &&
        matchSize &&
        matchMinPrice &&
        matchMaxPrice
      );
    });

    const total = filteredProducts.length;
    let paginatedProducts;

    if (random) {
      const available = filteredProducts.slice(excludeFirst);
      const shuffled = available.sort(() => Math.random() - 0.5);
      paginatedProducts = shuffled.slice(0, limit);
    } else if (direction === "first") {
      const start = (page - 1) * limit;
      paginatedProducts = filteredProducts.slice(start, start + limit);
    } else {
      const start = Math.max(total - page * limit, 0);
      paginatedProducts = filteredProducts
        .slice(start, start + limit)
        .reverse();
    }

    return Response.json({ products: paginatedProducts, total });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
