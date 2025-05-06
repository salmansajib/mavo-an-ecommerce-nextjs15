import { useQuery } from "@tanstack/react-query";

const DEFAULT_LIMIT = 6;

const fetchProducts = async (
  category,
  page,
  limit = DEFAULT_LIMIT,
  direction = "first",
  random = false,
  excludeFirst = 0,
) => {
  try {
    const url = `/api/products/${category}?page=${page}&limit=${limit}&direction=${direction}&random=${random}&excludeFirst=${excludeFirst}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${category} products`);
    }
    return await res.json(); // { products, total }
  } catch (error) {
    console.error(error); // Replace with proper logging in production
    throw error;
  }
};

export const useProducts = (
  category,
  page,
  limit = DEFAULT_LIMIT,
  direction = "first",
  random = false,
  excludeFirst = 0,
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
    ],
    queryFn: () =>
      fetchProducts(category, page, limit, direction, random, excludeFirst),
    staleTime: 600000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};
