import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  // Reviews data stored as an array of objects
  const reviews = product.customer_reviews;

  return (
    <div className="mavo-tab-1 mavo-tab-jewellery mavo-pt-120 mavo-md-pt-80 mavo-pb-120 mavo-md-pb-80">
      <div className="container">
        <ul className="nav nav-tabs mavo-mb-40" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link nav-link-one ${
                activeTab === "description" ? "active" : ""
              }`}
              id="home-tab"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link nav-link-one ${
                activeTab === "reviews" ? "active" : ""
              }`}
              id="contact-tab"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({reviews.length})
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "description" ? "show active" : ""
            }`}
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="tabContent">
              <p className="tabs-desc mavo-mt-45">{product.description}</p>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "reviews" ? "show active" : ""
            }`}
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="tabContent">
              <div className="tab-review">
                <div className="total-review">
                  <div className="write-review">
                    <Link href="#">Reviews ({reviews.length})</Link>
                  </div>
                  <div className="write-review">
                    <Link href="#">Write a Reviews</Link>
                  </div>
                </div>
                {reviews.map((review) => (
                  <div
                    className="customer-reviews customer-reviews-one"
                    key={review.id}
                  >
                    <div className="customer-img">
                      <img src={review.profile_image} alt="customer" />
                    </div>
                    <div className="customer-info">
                      <div className="customer-meta">
                        <div className="author">
                          <div className="mavo-producet-rating">
                            {[...Array(review.rating)].map((_, i) => (
                              <i key={i} className="flaticon-star-1"></i>
                            ))}
                          </div>
                          <div className="customer-name">
                            <h5>
                              <Link
                                className="mavo-product-title-link"
                                href="#"
                              >
                                {review.user}
                              </Link>
                            </h5>
                          </div>
                          <div className="review-date mavo-mb-15">
                            <span>{review.date}</span>
                          </div>
                        </div>
                        <div className="question-box flex items-center">
                          <div className="mavo-helpful">Was this helpful?</div>
                          <div className="flex items-center">
                            <Link
                              className="like flex items-center gap-1"
                              href="#"
                            >
                              <img src="/images/icons/like.png" alt="like" />
                              {review.helpful_votes}
                            </Link>
                            <Link
                              className="dis-like flex items-center gap-1"
                              href="#"
                            >
                              <img
                                src="/images/icons/dis-like.png"
                                alt="like"
                              />
                              {review.not_helpful_votes}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
