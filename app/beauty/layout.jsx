import Footer from "@/components/beauty-product/Footer";
import Header from "@/components/beauty-product/header/Header";

export default function BeautyProductLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
