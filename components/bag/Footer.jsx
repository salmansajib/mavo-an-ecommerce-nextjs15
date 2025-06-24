import React from "react";
import Logo from "../Logo";

const footerLinks = [
  {
    id: 1,
    title: "Follow Us",
    links: [
      { text: "Facebook", href: "#" },
      { text: "Twitter", href: "#" },
      { text: "LinkedIn", href: "#" },
      { text: "Instagram", href: "#" },
      { text: "Youtube", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Collection",
    links: [
      { text: "Handbags", href: "#" },
      { text: "Shoulder bags", href: "#" },
      { text: "Bags carried acros", href: "#" },
      { text: "Shopping bags", href: "#" },
      { text: "All bags", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Atelier",
    links: [
      { text: "About", href: "#" },
      { text: "The use of bag", href: "#" },
      { text: "All stockists", href: "#" },
      { text: "Showroom", href: "#" },
      { text: "FAQs", href: "#" },
    ],
  },
  {
    id: 4,
    title: "Useful Links",
    links: [
      { text: "My account", href: "#" },
      { text: "Shipping", href: "#" },
      { text: "Dailvery and returns", href: "#" },
      { text: "Customer service", href: "#" },
      { text: "Careers", href: "#" },
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
              <a className="condition" href="#">
                Terms & Conditions
              </a>
              <a className="policy" href="#">
                Privacy Policy
              </a>
              <p>
                &copy; {currentYear} Mavoo, Powered by <a href="#">Thecodude</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
