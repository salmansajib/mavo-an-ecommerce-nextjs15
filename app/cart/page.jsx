import React from "react";
import Cart from "@/components/cart/Cart";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";
import BreadcrumbContact from "@/components/contact/BreadcrumbContact";
import Header from "@/components/shoe/header/Header";
import Footer from "@/components/shoe/Footer";

function page() {
  return (
    <div className="pt-[150px]">
      <Header />
      <BreadcrumbContact
        items={[
          { label: "Home", href: "/" },
          { label: "shop", href: "/cloth/product" },
          { label: "cart" },
        ]}
      />
      <Cart />
      <ShopInfoCloth />
      <Footer />
    </div>
  );
}

export default page;
