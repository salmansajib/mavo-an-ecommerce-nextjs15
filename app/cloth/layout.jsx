import ClothFooter from "@/components/cloth/ClothFooter";

export default function ClothLayout({ children }) {
  return (
    <main>
      {children}
      <ClothFooter />
    </main>
  );
}
