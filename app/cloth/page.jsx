import React from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { getProductQueryOptions } from "@/hooks/useProducts";
import BannerCloth from "@/components/cloth/BannerCloth";
import CollectionCloth from "@/components/cloth/CollectionCloth";
import TestimonialCloth from "@/components/cloth/TestimonialCloth";
import CollToActionSection from "@/components/cloth/CollToActionSection";
import ProductSectionFirstCloth from "@/components/cloth/ProductSectionFirstCloth";
import ProductSectionSecondCloth from "@/components/cloth/ProductSectionSecondCloth";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";

const ClothHome = async () => {
  const queryClient = getQueryClient();

  // Prefetch data for ProductSectionSecondCloth
  await queryClient.prefetchQuery(
    getProductQueryOptions("cloth", 1, 4, "last", false, 0, {}),
  );

  // Prefetch data for ProductSectionFirstCloth (assumed parameters, adjust as needed)
  await queryClient.prefetchQuery(
    getProductQueryOptions("cloth", 1, 4, "first", false, 0, {}),
  );

  return (
    <>
      <BannerCloth />
      <CollectionCloth />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductSectionFirstCloth />
      </HydrationBoundary>
      <CollToActionSection />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductSectionSecondCloth />
      </HydrationBoundary>
      <TestimonialCloth />
      <ShopInfoCloth />
    </>
  );
};

export default ClothHome;
