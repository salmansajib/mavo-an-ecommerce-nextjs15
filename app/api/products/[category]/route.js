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

  // Input validation (unchanged)
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

    // Updated filter logic: Handles beauty (top-level sizes, additional_info.Material), watches (variants.materials), and clothes (variants.sizes, top-level material/category)
    const filteredProducts = allProducts.filter((product) => {
      // matchCategory: Use top-level category (clothes), type (watches/beauty fallback), or extend to additional_info if needed (e.g., Gender or Type for beauty)
      const matchCategory = filterCategory
        ? product.category === filterCategory ||
          product.type === filterCategory ||
          product.additional_info?.Gender?.toLowerCase().includes(
            filterCategory.toLowerCase(),
          ) || // Optional: For beauty Gender like "Men, Women"
          product.additional_info?.Type?.toLowerCase() ===
            filterCategory.toLowerCase() // Optional: For beauty Type like "Classic"
        : true;

      // matchMaterial: Use top-level material (clothes), nested materials.material (watches), or additional_info.Material (beauty)
      const matchMaterial = filterMaterial
        ? product.material === filterMaterial ||
          product.additional_info?.Material === filterMaterial ||
          product.variants?.some((variant) =>
            variant.materials?.some(
              (material) => material.material === filterMaterial,
            ),
          )
        : true;

      // matchSize: Use nested sizes.size (clothes), or top-level sizes.size (beauty); gracefully false if missing (watches)
      const matchSize = filterSize
        ? product.sizes?.some(
            (size) => size.size.toLowerCase() === filterSize.toLowerCase(),
          ) ||
          product.variants?.some((variant) =>
            variant.sizes?.some(
              (size) => size.size.toLowerCase() === filterSize.toLowerCase(),
            ),
          )
        : true;

      // Variant prices: Collect from nested sizes.price (clothes) / materials.price (watches), or top-level sizes.price (beauty), fallback to base_price
      const variantPrices = [
        ...(product.sizes?.map((size) => size.price) || []), // Beauty top-level sizes
        ...(product.variants?.flatMap((variant) => [
          ...(variant.sizes?.map((size) => size.price) || []), // Clothes nested sizes
          ...(variant.materials?.map((material) => material.price) || []), // Watches nested materials
        ]) || []),
      ];
      const minVariantPrice =
        variantPrices.length > 0
          ? Math.min(...variantPrices)
          : product.base_price;
      const maxVariantPrice =
        variantPrices.length > 0
          ? Math.max(...variantPrices)
          : product.base_price;

      // Price matches: Handle NaN gracefully
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
