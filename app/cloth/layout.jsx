import ClothFooter from "@/components/cloth/FooterCloth";

export default function ClothLayout({ children }) {
  return (
    <main>
      {children}
      <ClothFooter />
    </main>
  );
}
