import React from "react";
import Link from "next/link";

const SocialLinks = ({ socialIcons }) => {
  return (
    <>
      <h5 className="footer-title-two title-white-color mavo-mb-25">
        Our Products
      </h5>
      <ul className="footer-social">
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <Link href={icon.href}>
              <i className={icon.className}></i>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialLinks;
