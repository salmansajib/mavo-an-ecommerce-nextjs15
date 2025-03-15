import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterCloth = () => {
  return (
    <footer className="mavo-footer mavo-pt-100 mavo-md-pt-75 mavo-pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-footer-title2 mavo-md-mb-40">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Customer Care
              </h5>
              <ul className="menu-list">
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Shipping and Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-footer-title2 mavo-md-mb-40">
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Our Products
              </h5>
              <ul className="menu-list">
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Coats
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Sweater
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Fleece Jacket
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Bag
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-news-letter mavo-md-mb-40">
              <h5 className="mavo-footer-title mavo-mb-15 title-white-color">
                News Letter
              </h5>
              <form className="mav-form mavo-mb-50">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button type="submit">
                  <Image
                    src="/images/icons/right-arrow.svg"
                    alt="arrow"
                    width={20} // Set appropriate width
                    height={20} // Set appropriate height
                  />
                </button>
              </form>
              <h5 className="footer-title-two title-white-color mavo-mb-25">
                Our Products
              </h5>
              <ul className="footer-social">
                <li>
                  <Link href="#">
                    <i className="flaticon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="flaticon-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="flaticon-pinterest-circular-logo-symbol"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="flaticon-facebook-app-symbol"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-contact mavo-pl-90 mavo-md-pl-0 mavo-md-mb-40">
              <div className="mavo-footer-logo mavo-mb-45">
                <Image
                  src="/images/logos/light-logo.svg"
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
              <div className="mavo-footer-title2">
                <ul className="menu-list">
                  <li>
                    E:{" "}
                    <Link
                      href="mailto:call@mavoo.com"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      call@mavoo.com
                    </Link>
                  </li>
                  <li>
                    P:{" "}
                    <Link
                      href="tel:+441923965123"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      +44 192 3965 123
                    </Link>
                  </li>
                  <li>A: 325 bolconi moto</li>
                  <li>A: road NY 12369</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-area d-flex align-items-center">
                <div className="copy-right mavo-md-mb-15">
                  <div className="text">
                    © 2022 Mavoo, Powered by <Link href="/#">Thecodude</Link>
                  </div>
                </div>
                <div className="right-text">
                  <ul>
                    <li>
                      <Link href="/#">Terms</Link>
                    </li>
                    <li>
                      <Link href="/#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 flex items-center lg:justify-end justify-center">
              <div className="bank-account text-end">
                <Image
                  src="/images/logos/bank-account.png"
                  alt="account"
                  width={500}
                  height={500}
                  quality={100}
                  style={{
                    width: "450px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCloth;
