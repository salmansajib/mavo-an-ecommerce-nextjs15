"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();
  // State for email input
  const [email, setEmail] = useState("");
  // State for email validation error
  const [error, setError] = useState("");

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    console.log("Submitted email:", email);
    // Reset email input after successful submission
    setEmail("");
  };

  return (
    <footer className="mavo-footer-2 mavo-pt-120 mavo-md-pt-75 mavo-pb-10">
      <div className="container">
        <div className="row">
          {/* Shop Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="mavo-footer-title2 mavo-md-mb-65">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Shop
              </h5>
              <ul className="menu-list">
                <li>
                  <Link href="/cloth/about-us">Our Story</Link>
                </li>
                <li>
                  <Link href="/shoes/product">Shoes</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/faq">Shipping & Cart</Link>
                </li>
                <li>
                  <Link href="/faq">Returns</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Column */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="mavo-footer-title2 mavo-md-mb-65">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Social
              </h5>
              <ul className="menu-list">
                <li>
                  <Link href="/">Facebook</Link>
                </li>
                <li>
                  <Link href="/">Twitter</Link>
                </li>
                <li>
                  <Link href="/">LinkedIn</Link>
                </li>
                <li>
                  <Link href="/">Instagram</Link>
                </li>
                <li>
                  <Link href="/">Youtube</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="mavo-footer-title2 mavo-md-mb-65">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Contact
              </h5>
              <ul className="menu-list">
                <li>
                  <a href="mailto:hello@mavoo.com">hello@mavoo.com</a>
                </li>
                <li>
                  <a href="footer-contact-address">
                    77 Emle Street, Suite
                    <br />
                    Amesdeury NY 03656
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="col-lg-5">
            <div className="mavo-footer-form-area">
              <div className="mavo-footer-logo mavo-mb-35">
                <Logo color="light" />
              </div>
              <h3 className="form-footer-title title-white-color mavo-mb-50">
                Save paper.
                <br />
                Sign up for emails.
              </h3>
              <form
                className="font-josefin-sans bg-[#3a3a3a] h-[50px] flex items-center w-full max-w-[400px]"
                onSubmit={handleSubmit}
              >
                <input
                  className="flex-1 placeholder:!text-white/50 px-3 text-white"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                  type="submit"
                  className="!font-marcellus text-white !text-lg h-full bg-[#252525] px-3"
                >
                  Subscribe
                </button>
              </form>
              <div className="mavo-footer-active-shoe">
                <Image
                  width={300}
                  height={300}
                  className="w-[175px] h-auto"
                  src="/images/icons/shoes.svg"
                  alt="Shoes"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copy-right-area mavo-pt-135 mavo-md-pt-75 text-center">
          <div className="container">
            <div className="copy-right">
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
