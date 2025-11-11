import React from "react";
import Image from "next/image";
import Link from "next/link";

const Copyright = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="copy-right-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-area d-flex align-items-center">
              <div className="copy-right mavo-md-mb-15">
                <div className="text">
                  &copy; {currentYear} Mavoo, Powered by{" "}
                  <a
                    href="https://thecodude.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thecodude
                  </a>
                </div>
              </div>
              <div className="right-text">
                <ul>
                  <li>
                    <Link href="/terms">Terms</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
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
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
