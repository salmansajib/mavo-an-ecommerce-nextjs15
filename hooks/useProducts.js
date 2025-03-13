import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 600000, // Cache data for 10 minutes
    refetchOnWindowFocus: false, // Prevent refetching on tab switch
  });
};
