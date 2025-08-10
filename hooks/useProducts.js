import { useQuery } from "@tanstack/react-query";

const DEFAULT_LIMIT = 6;

export const fetchProducts = async (
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
    ...filters,
  });

  const url = `/api/products/${category}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};

export const getProductQueryOptions = (
  category,
  page,
  limit = DEFAULT_LIMIT,
  direction = "first",
  random = false,
  excludeFirst = 0,
  filters = {},
) => ({
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
});

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
    ...getProductQueryOptions(
      category,
      page,
      limit,
      direction,
      random,
      excludeFirst,
      filters,
    ),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};
