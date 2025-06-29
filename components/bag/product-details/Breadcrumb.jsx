import React from "react";

const Breadcrumb = () => {
  return (
    <div className="mavo-breadcrumb-page mavo-pt-155 mavo-pb-135 mavo-md-pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-breadcrumb-content-area text-center">
              <div className="mavo-creadcrumb-title">
                <h1 className="creadcrumb-title text-uppercase title-white-color">
                  Shop Detail
                </h1>
              </div>
              <div className="mavo-breadcrumb-list">
                {/* <ul>
                  <li>
                    <a className="active-dot" href="#">
                      Home
                    </a>
                    <a className="active-dot" href="#">
                      Shop
                    </a>
                    <a href="#"> Backpack Mini - Navy</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
