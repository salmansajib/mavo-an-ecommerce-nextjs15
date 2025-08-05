// useSearchProducts.js
import { useQuery } from "@tanstack/react-query";

const DEFAULT_LIMIT = 10;

const fetchSearchProducts = async (search, page, limit = DEFAULT_LIMIT) => {
  try {
    const url = `/api/products/search?search=${encodeURIComponent(
      search,
    )}&page=${page}&limit=${limit}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }
    return await res.json(); // { products, total }
  } catch (error) {
    console.error(error); // Replace with proper logging in production
    throw error;
  }
};

export const useSearchProducts = (search, page, limit = DEFAULT_LIMIT) => {
  return useQuery({
    queryKey: ["search", search, page, limit],
    queryFn: () => fetchSearchProducts(search, page, limit),
    staleTime: 300000, // 5 minutes
    cacheTime: 600000, // 10 minutes
    refetchOnWindowFocus: false,
    enabled: !!search && page >= 1, // Only fetch if search query and valid page are provided
  });
};
