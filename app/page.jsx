import BannerCloth from "@/components/cloth/BannerCloth";
import CollectionCloth from "@/components/cloth/CollectionCloth";
import FooterCloth from "@/components/cloth/FooterCloth";
import TestimonialCloth from "@/components/cloth/TestimonialCloth";
import CollectionSectionCloth from "@/components/cloth/CollectionSectionCloth";
import ProductSectionFirstCloth from "@/components/cloth/ProductSectionFirstCloth";
import ProductSectionSecondCloth from "@/components/cloth/ProductSectionSecondCloth";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";
import HeaderCloth from "@/components/cloth/header-cloth/HeaderCloth";

export default function Home() {
  return (
    <>
      <HeaderCloth />
      <BannerCloth />
      <CollectionCloth />
      <ProductSectionFirstCloth />
      <CollectionSectionCloth />
      <ProductSectionSecondCloth />
      <TestimonialCloth />
      <ShopInfoCloth />
      <FooterCloth />
    </>
  );
}
