import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="footer-news-letter mavo-md-mb-40">
      <h5 className="mavo-footer-title mavo-mb-15 title-white-color">
        News Letter
      </h5>
      <form className="mav-form mavo-mb-50">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <button type="submit">
          <Image
            src="/images/icons/right-arrow.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
