import FooterSection from "@/components/watch/FooterSection";

export default function WatchLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
