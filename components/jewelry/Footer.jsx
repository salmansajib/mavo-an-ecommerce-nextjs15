"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Data arrays for menu lists
const shopAllLinks = [
  { id: 1, text: "Jewelry", href: "#" },
  { id: 2, text: "All Collections", href: "#" },
  { id: 3, text: "Product Page", href: "#" },
];

const usefulLinks = [
  { id: 1, text: "Main Page", href: "#" },
  { id: 2, text: "Our Story", href: "#" },
  { id: 3, text: "FAQs", href: "#" },
  { id: 4, text: "Shipping & Cart", href: "#" },
  { id: 5, text: "Returns", href: "#" },
];

const followUsLinks = [
  { id: 1, text: "Facebook", href: "#" },
  { id: 2, text: "Twitter", href: "#" },
  { id: 3, text: "LinkedIn", href: "#" },
  { id: 4, text: "Instagram", href: "#" },
  { id: 5, text: "Youtube", href: "#" },
];

const pagesLinks = [
  { id: 1, text: "Home", href: "#" },
  { id: 2, text: "Blog", href: "#" },
  { id: 3, text: "Shop", href: "#" },
  { id: 4, text: "Products", href: "#" },
];

const Footer = () => {
  // State for email input
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mavo-footer-4 mavo-pt-115 mavo-md-pt-75">
      <div className="container home-four-container mavo-pb-100 mavo-md-pb-20">
        <div className="row">
          <div className="mavo-footer-list-content-area d-flex">
            {/* Shop All */}
            <div className="mavo-footer-title3 mavo-footer-title-one mavo-pr-100">
              <h5 className="footer-title-two mavo-mb-25">Shop All</h5>
              <ul className="menu-list">
                {shopAllLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="mavo-footer-title3">
              <h5 className="footer-title-two mavo-mb-25">Useful Links</h5>
              <ul className="menu-list">
                {usefulLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="mavo-footer-title3">
              <h5 className="footer-title-two mavo-mb-25">Follow us</h5>
              <ul className="menu-list">
                {followUsLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div className="mavo-footer-title3">
              <h5 className="footer-title-two mavo-mb-25">Pages</h5>
              <ul className="menu-list">
                {pagesLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sign In Form */}
            <div className="footer-form-box mavo-footer-title3">
              <h5 className="footer-title-two mavo-mb-25">Sign In</h5>
              <form className="mav-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mavo-email-input"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area text-center mavo-pt-30 mavo-pb-20">
        <div className="container home-four-container">
          <div className="copy-right">
            <p className="mb-3 lg:mb-0">
              &copy; {currentYear} Mavoo, Powered by{" "}
              <Link href="#">Thecodude</Link>
            </p>
            <div className="bank-account flex flex-wrap gap-3 items-center justify-center">
              <span className="text-uppercase">We accept</span>
              <Image
                width={800}
                height={800}
                className="w-[450px] h-auto"
                src="/images/logos/bank-account-4.png"
                alt="account"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
