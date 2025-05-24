"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";

const services = [
  { text: "Login", href: "#" },
  { text: "Register", href: "#" },
  { text: "FAQs", href: "#" },
  { text: "Shipping & Returns", href: "#" },
  { text: "About us", href: "#" },
];

const products = [
  { text: "Watch", href: "#" },
  { text: "Shoes", href: "#" },
  { text: "Sweater", href: "#" },
  { text: "Cloth", href: "#" },
  { text: "Digital Watch", href: "#" },
];

const socialMedia = [
  { text: "Facebook", href: "#" },
  { text: "Twitter", href: "#" },
  { text: "LinkedIn", href: "#" },
  { text: "Instagram", href: "#" },
  { text: "Youtube", href: "#" },
];

const contactInfo = [
  {
    text: "325 bolconi matara sty<br>road,NY 15697",
    href: "footer-contact-address",
  },
  { text: "+44.9512.369.220", href: "tel:+449512369220" },
  { text: "hello@mavoo.com", href: "mailto:hello@mavoo.com" },
];

const FooterSection = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle email subscription logic here (e.g., API call)
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="mavo-footer-3 mavo-pt-120 mavo-md-pt-70 mavo-pb-30">
      <div className="container page-container2">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-6 mavo-footer-left p-z-index">
            <div className="mavo-footer-title2 mavo-mt-55 mavo-md-mb-40 mavo-sm-mb-0">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Services
              </h5>
              <ul className="menu-list">
                {services.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mavo-footer-left p-z-index">
            <div className="mavo-footer-title2 mavo-mt-55 mavo-md-mb-40 mavo-sm-mb-20">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Our Products
              </h5>
              <ul className="menu-list">
                {products.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mavo-footer-middel">
            <div className="mavo-footer-logo mavo-mb-40 flex items-center justify-center">
              <Logo color="light" />
            </div>
            <h4 className="mavo-footer-singup">
              Get more than 30% off on your first purchase.
            </h4>
            <div className="mav-form">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button" onClick={handleSubscribe}>
                <Image
                  width={100}
                  height={100}
                  className="w-[25px] h-auto"
                  src="/images/icons/right-arrow.svg"
                  alt="arrow"
                />
              </button>
            </div>
            <div className="subscribe subscribe3">
              <label className="quiz-check">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <label>Subscribe to our trial onboarding emails.</label>
            </div>
            <div className="bank-account flex items-center justify-center">
              <Image
                width={500}
                height={500}
                quality={100}
                className="w-[300px] h-auto"
                src="/images/logos/bank-account.png"
                alt="account"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mavo-footer-left p-z-index">
            <div className="mavo-footer-title2 mavo-pl-80 mavo-mt-55 mavo-md-mb-40 mavo-sm-mb-0">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Follow us
              </h5>
              <ul className="menu-list">
                {socialMedia.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mavo-footer-left p-z-index">
            <div className="mavo-footer-title2 mavo-mt-55 mavo-md-mb-40 mavo-sm-mb-20">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Contact us
              </h5>
              <ul className="menu-list">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="copy-right-area text-center">
            <div className="container">
              <div className="copy-right">
                <p>
                  &copy; {currentYear} Mavoo, Powered by{" "}
                  <a href="#">Thecodude</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
