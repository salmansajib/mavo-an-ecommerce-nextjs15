import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    title: "Follow Us",
    links: [
      { text: "Facebook", href: "/" },
      { text: "Twitter", href: "/" },
      { text: "LinkedIn", href: "/" },
      { text: "Instagram", href: "/" },
      { text: "Youtube", href: "/" },
    ],
  },
  {
    id: 2,
    title: "Collection",
    links: [
      { text: "Handbags", href: "/bag/product" },
      { text: "Shoulder bags", href: "/bag/product" },
      { text: "Bags carried acros", href: "/bag/product" },
      { text: "Shopping bags", href: "/bag/product" },
      { text: "All bags", href: "/bag/product" },
    ],
  },
  {
    id: 3,
    title: "Atelier",
    links: [
      { text: "About", href: "/bag/about-us" },
      { text: "The use of bag", href: "/bag/about-us" },
      { text: "All stockists", href: "/bag/product" },
      { text: "Showroom", href: "/bag" },
      { text: "FAQs", href: "/faq" },
    ],
  },
  {
    id: 4,
    title: "Useful Links",
    links: [
      { text: "My account", href: "/signup" },
      { text: "Shipping", href: "/faq" },
      { text: "Dailvery and returns", href: "/faq" },
      { text: "Customer service", href: "/faq" },
      { text: "Careers", href: "/" },
    ],
  },
  {
    id: 5,
    title: "Contact",
    links: [
      { text: "42 Yule Street, Arvada CO", href: "#" },
      { text: "oh.hi!@mavoo.com", href: "mailto:oh.hi!@mavoo.com" },
      { text: "+569 7823 123", href: "tel:+5697823123" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mavo-footer-6">
      <div className="container home-four-container">
        <div className="mavo-footer-content-area d-flex justify-content-between">
          {footerLinks.map((widget) => (
            <div className="footer-widget" key={widget.id}>
              <div className="mavo-footer-title2">
                <h5 className="footer-title-two title-white-color mavo-mb-25">
                  {widget.title}
                </h5>
                <ul className="menu-list">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copy-right-area">
        <div className="container home-four-container">
          <div className="mavo-copyright-content-area d-flex align-items-center justify-content-between">
            <div className="footer-logo">
              <Logo color="light" className="w-[150px]" />
            </div>
            <div className="copy-right">
              <Link className="condition" href="/terms">
                Terms & Conditions
              </Link>
              <Link className="policy" href="/privacy">
                Privacy Policy
              </Link>
              <p>
                &copy; {currentYear} Mavoo, Powered by{" "}
                <a
                  href="https://thecodude.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thecodude
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
