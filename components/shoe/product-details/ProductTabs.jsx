import { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const additionalInfo = Object.entries(product.additional_info).map(
    ([label, details]) => ({
      label: label
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      details,
    }),
  );

  const reviews = product.customer_reviews;

  return (
    <div className="mavo-tab-2 pb-[100px]">
      <div className="container">
        <div className="mavo-shoes-product-one d-flex align-items-start">
          {/* Tab Navigation */}
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className={`nav-link ${
                activeTab === "description" ? "active" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`nav-link ${
                activeTab === "additional" ? "active" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("additional")}
            >
              Additional information
            </button>
            <button
              className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
              type="button"
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (0)
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content" id="v-pills-tabContent">
            {/* Description Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "description" ? "show active" : ""
              }`}
              id="v-pills-home"
              role="tabpanel"
            >
              <p className="tabs-desc">{product.description}</p>
            </div>

            {/* Additional Information Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "additional" ? "show active" : ""
              }`}
              id="v-pills-profile"
              role="tabpanel"
            >
              <div className="information">
                {additionalInfo.map((info, index) => (
                  <div className="information-singl" key={index}>
                    <div className="information-label">{info.label}</div>
                    <div className="information-details">{info.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "reviews" ? "show active" : ""
              }`}
              id="v-pills-messages"
              role="tabpanel"
            >
              <div className="reviews">
                <div className="reviews-meta mavo-mb-30">
                  <div className="mavo-producet-rating mavo-mb-10">
                    <span className="reviews">4.9</span>
                    <i className="flaticon-star-1"></i>
                    <i className="flaticon-star-1"></i>
                    <i className="flaticon-star-1"></i>
                    <i className="flaticon-star-1"></i>
                    <i className="flaticon-star-1"></i>
                    <p>Based on 289 reviews</p>
                  </div>
                  <div className="write-review">
                    <a href="#">Write a review</a>
                  </div>
                </div>

                <div className="space-y-5">
                  {reviews.map((review) => (
                    <div
                      className={`reviews-author flex gap-2 items-center justify-between ${
                        review.id === 1 ? "mavo-mb-30" : ""
                      }`}
                      key={review.id}
                    >
                      <div
                        className={`author-img ${
                          review.id === 2 ? "author-img-one" : ""
                        } flex flex-col items-center`}
                      >
                        <img src={review.profile_image} alt="review" />
                        <div className="author-name mavo-mt-20">
                          <h5>{review.user}</h5>
                          <p>{review.status}</p>
                        </div>
                      </div>
                      <div className="author-info pl-[60px]">
                        <div className="mavo-producet-rating mavo-mb-10">
                          {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="flaticon-star-1"></i>
                          ))}
                        </div>
                        <span>{review.comment}</span>
                        <p>{review.additional_text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
