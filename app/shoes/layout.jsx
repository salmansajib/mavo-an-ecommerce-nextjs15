import Footer from "@/components/shoe/Footer";
import Header from "@/components/shoe/header/Header";

export default function ShoesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
