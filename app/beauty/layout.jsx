import Footer from "@/components/beauty/Footer";
import Header from "@/components/beauty/header/Header";

export default function BeautyProductLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
