import React from "react";
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="breadcrumds-contact-page">
      <div className="container mavo-page-container">
        <div className="mavo-contact-content">
          <ul>
            <li>
              <Link className="active-dot" href="/shoes">
                {" "}
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
