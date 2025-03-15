import React from "react";
import Link from "next/link";

const NotFoundComponent = () => {
  return (
    <div className="mavo-error-page-start mavo-pt-155 mavo-md-pt-45 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-error-content-box text-center">
              <h1 className="mavo-error-number mavo-mb-30">404</h1>
              <div className="mavo-error-text mavo-mb-20">Oops.....</div>
              <p className="error-desc mavo-mb-30">
                Something went wrong. Page not found!
              </p>
              <div className="mavo-primary-button">
                <Link className="mavo-primary-btn" href="/">
                  Home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
