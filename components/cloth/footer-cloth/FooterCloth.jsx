import React from "react";
import FooterLinkList from "./FooterLinkList";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";

const customerCareLinks = [
  { text: "Login", href: "#" },
  { text: "Register", href: "#" },
  { text: "FAQs", href: "#" },
  { text: "Shipping and Returns", href: "#" },
  { text: "About us", href: "#" },
];

const productLinks = [
  { text: "Coats", href: "#" },
  { text: "Shoes", href: "#" },
  { text: "Sweater", href: "#" },
  { text: "Fleece Jacket", href: "#" },
  { text: "Bag", href: "#" },
];

const socialIcons = [
  { href: "#", className: "flaticon-twitter" },
  { href: "#", className: "flaticon-instagram" },
  { href: "#", className: "flaticon-pinterest-circular-logo-symbol" },
  { href: "#", className: "flaticon-facebook-app-symbol" },
];

const FooterCloth = () => {
  return (
    <footer className="mavo-footer mavo-pt-100 mavo-md-pt-75 mavo-pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <FooterLinkList title="Customer Care" links={customerCareLinks} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <FooterLinkList title="Our Products" links={productLinks} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <ContactInfo />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Newsletter />
            <SocialLinks socialIcons={socialIcons} />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default FooterCloth;
