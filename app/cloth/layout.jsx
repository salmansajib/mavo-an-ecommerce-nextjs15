import FooterCloth from "@/components/cloth/FooterCloth";
import HeaderCloth from "@/components/cloth/HeaderCloth";

export default function ClothLayout({ children }) {
  return (
    <main>
      <HeaderCloth />
      {children}
      <FooterCloth />
    </main>
  );
}
