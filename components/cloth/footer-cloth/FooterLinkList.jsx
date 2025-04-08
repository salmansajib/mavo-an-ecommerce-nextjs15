import React from "react";
import Link from "next/link";

const FooterLinkList = ({ title, links }) => {
  return (
    <div className="mavo-footer-title2 mavo-md-mb-40">
      <h5 className="footer-title-two title-white-color mavo-mb-25">{title}</h5>
      <ul className="menu-list">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} style={{ textDecoration: "none" }}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
