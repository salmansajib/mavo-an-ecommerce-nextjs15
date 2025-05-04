"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`flaticon-star-1 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        ></i>,
      );
    }
    return stars;
  };

  return (
    <div className="mavo-tab-1 my-40">
      <div className="container">
        <ul className="nav nav-tabs mavo-mb-40" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              id="home-tab"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected={activeTab === "home"}
              onClick={() => handleTabClick("home")}
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
              id="profile-tab"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
              onClick={() => handleTabClick("profile")}
            >
              Additional information
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
              id="contact-tab"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected={activeTab === "contact"}
              onClick={() => handleTabClick("contact")}
            >
              Reviews ({product?.customer_reviews?.length || 0})
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {/* description */}
          <div
            className={`tab-pane fade ${
              activeTab === "home" ? "show active" : ""
            }`}
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="tabContent">
              <p className="tabs-desc mavo-mt-45">
                {product?.description || "No description available"}
              </p>
            </div>
          </div>
          {/* additional info */}
          <div
            className={`tab-pane fade ${
              activeTab === "profile" ? "show active" : ""
            }`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="tabContent additional-information">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mavo-cloth-image mavo-md-mb-50">
                    <Image
                      src={
                        product?.variants?.[0]?.images?.[0] ||
                        "/images/services/tab-product-1.jpg"
                      }
                      alt="product"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-lg-8 additional">
                  <h4 className="mavo-mb-20">Information</h4>
                  {product?.additional_info?.details?.map((detail, index) => (
                    <p key={index} className="list">
                      {detail}
                    </p>
                  ))}

                  <h4 className="additional-info-title mavo-mb-15">
                    Washing Instructions
                  </h4>
                  <div className="additional-info">
                    {product?.additional_info?.washing_instructions?.map(
                      (instruction, index) => (
                        <div key={index} className="additional-meta">
                          <div className="additional-meta-img mavo-mb-20">
                            <Image
                              src={
                                instruction.icon || "/images/icons/tab-1.png"
                              }
                              alt="washing instruction"
                              width={50}
                              height={50}
                            />
                          </div>
                          <p className="additional-meta-desc">
                            {instruction.type}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* reviews */}
          <div
            className={`tab-pane fade ${
              activeTab === "contact" ? "show active" : ""
            }`}
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="tabContent">
              <div className="tab-review">
                <div className="total-review">
                  <div className="write-review">
                    <a href="#">
                      Reviews ({product?.customer_reviews?.length || 0})
                    </a>
                  </div>
                  <div className="write-review">
                    <a href="#">Write a Review</a>
                  </div>
                </div>

                {product?.customer_reviews?.map((review) => (
                  <div key={review.id} className="customer-reviews">
                    <div className="customer-img">
                      <Image
                        src={
                          review.profile_image ||
                          "/images/services/rivew-customar-1.jpg"
                        }
                        alt="customer"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="customer-info">
                      <div className="customer-meta">
                        <div className="author">
                          <div className="mavo-producet-rating">
                            {renderStars(review.rating)}
                          </div>
                          <div className="customer-name">
                            <h5>
                              <a className="mavo-product-title-link" href="#">
                                {review.user}
                              </a>
                            </h5>
                          </div>
                          <div className="review-date mavo-mb-15">
                            <span>{review.date}</span>
                          </div>
                        </div>
                        <div className="question-box space-y-1">
                          <div className="mavo-helpful">Was this helpful?</div>
                          <div className="flex items-center">
                            <a className="like" href="#">
                              <Image
                                src="/images/icons/like.png"
                                alt="like"
                                width={20}
                                height={20}
                              />
                              {review.helpful_votes}
                            </a>
                            <a className="dis-like" href="#">
                              <Image
                                src="/images/icons/dis-like.png"
                                alt="dislike"
                                width={20}
                                height={20}
                              />
                              {review.not_helpful_votes}
                            </a>
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
}
