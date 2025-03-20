import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  try {
    const res = await fetch("/api/products");
    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`,
      );
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error so react-query can handle it
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 600000, // Cache data for 10 minutes
    refetchOnWindowFocus: false, // Prevent refetching on tab switch
  });
};
