import { useQuery } from "@tanstack/react-query";

const DEFAULT_LIMIT = 6;

const fetchProducts = async (
  category,
  page,
  limit = DEFAULT_LIMIT,
  direction = "first",
  random = false,
  excludeFirst = 0,
  filters = {},
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    direction,
    random: random.toString(),
    excludeFirst: excludeFirst.toString(),
    ...filters, // filters = { filterCategory: "men", filterMaterial: "cotton", filterSize: "M", priceMin: 100 }
  });

  const url = `/api/products/${category}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};

export const useProducts = (
  category,
  page,
  limit = DEFAULT_LIMIT,
  direction = "first",
  random = false,
  excludeFirst = 0,
  filters = {},
) => {
  return useQuery({
    queryKey: [
      category,
      "products",
      page,
      limit,
      direction,
      random,
      excludeFirst,
      filters,
    ],
    queryFn: () =>
      fetchProducts(
        category,
        page,
        limit,
        direction,
        random,
        excludeFirst,
        filters,
      ),
    staleTime: 600000,
    refetchOnWindowFocus: false,
  });
};
