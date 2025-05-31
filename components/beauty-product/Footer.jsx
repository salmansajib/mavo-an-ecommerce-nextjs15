"use client";
import React, { useState } from "react";
import Logo from "../Logo";

const Footer = () => {
  // State for email input
  const [email, setEmail] = useState("");

  // Separate arrays for each menu
  const contactMenu = [
    { name: "Jewelry", link: "#" },
    { name: "All Collections", link: "#" },
    { name: "Product Page", link: "#" },
  ];

  const followUsMenu = [
    { name: "Facebook", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "LinkedIn", link: "#" },
    { name: "Instagram", link: "#" },
    { name: "Youtube", link: "#" },
  ];

  const pagesMenu = [
    { name: "My account", link: "#" },
    { name: "Shop", link: "#" },
    { name: "FAQs", link: "#" },
    { name: "Terms", link: "#" },
    { name: "Returns", link: "#" },
    { name: "About us", link: "#" },
  ];

  const productsMenu = [
    { name: "Skin Care", link: "#" },
    { name: "Beauty", link: "#" },
    { name: "Hair Care", link: "#" },
    { name: "Make-up", link: "#" },
    { name: "Face Cream", link: "#" },
  ];

  // Combine menus for middle section rendering
  const middleSectionMenus = [
    { title: "Follow Us", items: followUsMenu },
    { title: "Pages", items: pagesMenu },
    { title: "Products", items: productsMenu },
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mavo-footer-5 mavo-pt-110 mavo-md-pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="footer-widget">
              <div className="footer-logo mavo-mb-100 mavo-md-mb-50 mavo-mt-10">
                <Logo className="w-[200px]" />
              </div>
              <div className="mavo-footer-title2 mavo-md-mb-40">
                <h5 className="footer-title-two title-white-color mavo-mb-25">
                  Contact
                </h5>
                <ul className="menu-list">
                  {contactMenu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-9">
            <div className="footer-title">
              <h3 className="title-white-color mavo-mb-45">
                We make your skin healthy soft & glossy
              </h3>
            </div>
            <div className="row">
              {middleSectionMenus.map((menu, index) => (
                <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                  <div className="mavo-footer-title2 mavo-md-mb-40">
                    <h5 className="footer-title-two title-white-color mavo-mb-25">
                      {menu.title}
                    </h5>
                    <ul className="menu-list">
                      {menu.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a href={item.link}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer-widget">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Sign In
              </h5>
              <p className="exclusive-offer title-white-color mavo-mb-50">
                Get exclusive access & more then 25% off.
              </p>
              <div className="mav-form">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" onClick={handleSubmit}>
                  Subscribe
                </button>
              </div>
              <div className="subscribe subscribe1">
                <label className="quiz-check">
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="title-white-color">
                  Subscribe to our trial onboarding emails.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area mavo-pt-25 mavo-pb-25">
        <div className="container">
          <div className="copy-right d-flex align-items-center justify-content-between">
            <p className="mb-0">
              &copy; {currentYear} Mavoo, Powered by <a href="#">Thecodude</a>
            </p>
            <div className="bank-account">
              <img src="/images/logos/bank-account-4.png" alt="account" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
