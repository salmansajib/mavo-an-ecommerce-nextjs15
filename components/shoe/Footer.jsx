import React from "react";
import Image from "next/image";
import Logo from "../Logo";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

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
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Shipping & Cart</a>
                </li>
                <li>
                  <a href="#">Returns</a>
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
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
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
              <form className="mavo-footer-form">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter your email"
                  required=""
                />
                <button type="submit">Subscribe</button>
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
