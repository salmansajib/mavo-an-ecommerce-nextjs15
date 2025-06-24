"use client";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // You can add your form submission logic here
    setEmail(""); // Reset the form after submission
  };

  return (
    <div className="mavo-newsletter-5 mavo-pb-120 mavo-md-pb-80 mt-5">
      <div className="container">
        <div className="mavo-title-style-6 text-center">
          <h2 className="hiddenn">newsleter</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="mavo-heading-area mavo-mb-40 mavo-md-mb-30">
              <h3 className="mavo-title">Community</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="mavo-newsletter-info">
              <p className="mavo-md-mb-30">
                Signup for the latest community updates and newsletters. As well
                as a new website update!
              </p>
              <form className="mav-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email addresss"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                  <img src="/images/icons/right-arrow.svg" alt="arrow" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
