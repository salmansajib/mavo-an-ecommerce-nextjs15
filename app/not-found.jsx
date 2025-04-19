import BreadcrumbContact from "@/components/contact/BreadcrumbContact";
import NotFoundComponent from "@/components/not-found/NotFoundComponent";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <BreadcrumbContact
        items={[
          { label: "Home", href: "/" },
          { label: "Page", href: "/some-page" },
          { label: "404" },
        ]}
      />
      <NotFoundComponent />
    </div>
  );
}
