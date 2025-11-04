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

  const filterCategory =
    url.searchParams.get("filterCategory") ||
    url.searchParams.get("category") ||
    "";
  const filterMaterial =
    url.searchParams.get("filterMaterial") ||
    url.searchParams.get("material") ||
    "";
  const filterSize =
    url.searchParams.get("filterSize") || url.searchParams.get("size") || "";

  // Handle both parameter name variations for price - with proper defaults
  const priceMinParam =
    url.searchParams.get("priceMin") || url.searchParams.get("minPrice");
  const priceMaxParam =
    url.searchParams.get("priceMax") || url.searchParams.get("maxPrice");

  const priceMin = priceMinParam ? parseFloat(priceMinParam) : null;
  const priceMax = priceMaxParam ? parseFloat(priceMaxParam) : null;

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

    // Updated filter logic
    const filteredProducts = allProducts.filter((product) => {
      // matchCategory: Use top-level category (clothes), type (watches/beauty fallback), or extend to additional_info if needed
      const matchCategory = filterCategory
        ? product.category === filterCategory ||
          product.type === filterCategory ||
          product.additional_info?.Gender?.toLowerCase().includes(
            filterCategory.toLowerCase(),
          ) ||
          product.additional_info?.Type?.toLowerCase() ===
            filterCategory.toLowerCase()
        : true;

      // matchMaterial: Use top-level material (clothes), nested materials.material (watches), additional_info.Material (beauty/shoes), or variant.material (jewelry string)
      const matchMaterial = filterMaterial
        ? product.material === filterMaterial ||
          product.additional_info?.Material === filterMaterial ||
          product.variants?.some((variant) =>
            variant.materials?.some(
              (material) => material.material === filterMaterial,
            ),
          ) ||
          product.variants?.some(
            (variant) => variant.material === filterMaterial,
          )
        : true;

      // matchSize: Use nested sizes.size (clothes/shoes), top-level sizes.size (beauty), or variant.lengths.length (jewelry); gracefully false if missing (watches)
      const matchSize = filterSize
        ? product.sizes?.some(
            (size) =>
              size.size.toString().toLowerCase() === filterSize.toLowerCase(),
          ) ||
          product.variants?.some((variant) =>
            variant.sizes?.some(
              (size) =>
                size.size.toString().toLowerCase() === filterSize.toLowerCase(),
            ),
          ) ||
          product.variants?.some((variant) =>
            variant.lengths?.some(
              (len) =>
                len.length.toString().toLowerCase() ===
                filterSize.toLowerCase(),
            ),
          )
        : true;

      // Variant prices: Collect from nested sizes.price (clothes/shoes) / materials.price (watches) / lengths.price (jewelry), or top-level sizes.price (beauty), fallback to base_price
      const variantPrices = [
        ...(product.sizes?.map((size) => size.price) || []),
        ...(product.variants?.flatMap((variant) => [
          ...(variant.sizes?.map((size) => size.price) || []),
          ...(variant.materials?.map((material) => material.price) || []),
          ...(variant.lengths?.map((len) => len.price) || []),
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

      // Price matches: Only apply filter if both priceMin and priceMax are provided
      const hasPriceFilter =
        priceMin !== null &&
        priceMax !== null &&
        !isNaN(priceMin) &&
        !isNaN(priceMax);

      let matchPrice = true;
      if (hasPriceFilter) {
        // A product matches if ANY of its variant prices fall within the range
        matchPrice = maxVariantPrice >= priceMin && minVariantPrice <= priceMax;
      }

      return matchCategory && matchMaterial && matchSize && matchPrice;
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
    console.error("Filter error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
