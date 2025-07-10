import React from "react";
import BreadcrumbContact from "@/components/contact/BreadcrumbContact";
import NotFoundComponent from "@/components/not-found/NotFoundComponent";
import Header from "@/components/shoe/header/Header";
import Footer from "@/components/shoe/Footer";

export default function NotFound() {
  return (
    <div className="pt-[120px]">
      <Header />
      <BreadcrumbContact
        items={[
          { label: "Home", href: "/" },
          { label: "Page", href: "/some-page" },
          { label: "404" },
        ]}
      />
      <NotFoundComponent />
      <Footer />
    </div>
  );
}
