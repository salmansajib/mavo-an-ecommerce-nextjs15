import React from "react";
import Link from "next/link";

const BreadcrumbContact = ({ items }) => {
  return (
    <div className="breadcrumds-contact-page">
      <div className="container mavo-page-container">
        <div className="mavo-contact-content">
          <ul className="flex items-center space-x-[15px]">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <li className="flex items-center">
                  {item.href ? (
                    <Link href={item.href} className="hover:text-primary">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-500">{item.label}</span>
                  )}
                </li>
                {index < items.length - 1 && (
                  <li className="text-gray-800 text-2xl">•</li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbContact;
