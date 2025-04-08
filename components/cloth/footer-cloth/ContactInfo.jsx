import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
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
              style={{ textDecoration: "none" }}
            >
              call@mavoo.com
            </Link>
          </li>
          <li>
            P:{" "}
            <Link href="tel:+441923965123" style={{ textDecoration: "none" }}>
              +44 192 3965 123
            </Link>
          </li>
          <li>A: 325 bolconi moto</li>
          <li>A: road NY 12369</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
