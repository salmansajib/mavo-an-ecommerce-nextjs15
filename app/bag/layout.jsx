import Footer from "@/components/bag/Footer";
import Header from "@/components/bag/header/Header";

export default function BagLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
