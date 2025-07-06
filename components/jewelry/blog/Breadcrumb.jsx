import React from "react";
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="bread-crumb jewellery-bread-crumb jewellery-bread-crumb2 mavo-pt-135 mavo-pb-80">
      <div className="container page-container2">
        <div className="mavo-contact-content">
          <ul>
            <li>
              <Link className="active-dot" href="/jewelry">
                Home
              </Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
