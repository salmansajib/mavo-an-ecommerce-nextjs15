import React from "react";
import Cart from "@/components/Cart";
import ShopInfoCloth from "@/components/cloth/ShopInfoCloth";
import FooterCloth from "@/components/cloth/footer-cloth/FooterCloth";
import BreadcrumbContact from "@/components/contact/BreadcrumbContact";

function page() {
  return (
    <>
      <BreadcrumbContact
        items={[
          { label: "Home", href: "/" },
          { label: "shop", href: "/cloth/product" },
          { label: "cart" },
        ]}
      />
      <Cart />
      <ShopInfoCloth />
      <FooterCloth />
    </>
  );
}

export default page;
