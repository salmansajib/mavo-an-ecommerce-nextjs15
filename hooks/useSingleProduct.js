import { useQuery } from "@tanstack/react-query";

const fetchSingleProduct = async (category, id) => {
  try {
    const url = `/api/products/${category}/${id}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}`);
    }
    return await res.json(); // { product }
  } catch (error) {
    console.error(error); // Replace with proper logging in production
    throw error;
  }
};

export const useSingleProduct = (category, id) => {
  return useQuery({
    queryKey: [category, "product", id],
    queryFn: () => fetchSingleProduct(category, id),
    staleTime: 300000, // 5 minutes
    cacheTime: 600000, // 10 minutes
    refetchOnWindowFocus: false,
    enabled: !!category && !!id, // Only fetch if category and id are provided
  });
};
