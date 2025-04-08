import FooterCloth from "@/components/cloth/footer-cloth/FooterCloth";
import HeaderCloth from "@/components/cloth/header-cloth/HeaderCloth";

export default function ClothLayout({ children }) {
  return (
    <main>
      <HeaderCloth />
      {children}
      <FooterCloth />
    </main>
  );
}
