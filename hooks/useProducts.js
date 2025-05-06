import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (category) => {
  try {
    const res = await fetch(`/api/products/${category}`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch ${category} products: ${res.status} ${res.statusText}`,
      );
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching ${category} products:`, error);
    throw error;
  }
};

export const useProducts = (category) => {
  return useQuery({
    queryKey: [category, "products"], // Unique key per category
    queryFn: () => fetchProducts(category),
    staleTime: 600000, // Cache for 10 minutes
    refetchOnWindowFocus: false, // Prevent refetch on tab switch
  });
};
