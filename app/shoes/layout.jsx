import Footer from "@/components/shoe/Footer";
import Header from "@/components/shoe/header/Header";
import ShopInfo from "@/components/shoe/ShopInfo";

export default function ShoesLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ShopInfo />
      <Footer />
    </>
  );
}
