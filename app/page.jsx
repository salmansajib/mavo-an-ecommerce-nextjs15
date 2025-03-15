import ClothBanner from "@/components/cloth/BannerCloth";
import ClothCollertion from "@/components/cloth/CollectionCloth";
import ClothFooter from "@/components/cloth/FooterCloth";
import ClothTestimonial from "@/components/cloth/TestimonialCloth";
import CollectionSection from "@/components/cloth/CollectionSectionCloth";
import ProductSectionFirst from "@/components/cloth/ProductSectionFirstCloth";
import ProductSectionSecond from "@/components/cloth/ProductSectionSecondCloth";
import ShopInfo from "@/components/cloth/ShopInfoCloth";
import Header from "@/components/cloth/HeaderCloth";

export default function Home() {
  return (
    <>
      <Header />
      <ClothBanner />
      <ClothCollertion />
      <ProductSectionFirst />
      <CollectionSection />
      <ProductSectionSecond />
      <ClothTestimonial />
      <ShopInfo />
      <ClothFooter />
    </>
  );
}
