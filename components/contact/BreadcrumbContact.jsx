import React from "react";
import Link from "next/link";

const BreadcrumbContact = () => {
  return (
    <div className="breadcrumds-contact-page">
      <div className="container mavo-page-container">
        <div className="mavo-contact-content">
          <ul>
            <li>
              <Link className="active-dot" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="active-dot" href="/">
                Page
              </Link>
            </li>
            <li>404</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbContact;
