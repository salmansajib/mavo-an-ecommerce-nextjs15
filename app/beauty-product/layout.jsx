import Footer from "@/components/beauty-product/Footer";

export default function BeautyProductLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
