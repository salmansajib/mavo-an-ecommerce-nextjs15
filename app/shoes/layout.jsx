import Footer from "@/components/shoe/Footer";
import Header from "@/components/shoe/header/Header";

export default function ClothLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
