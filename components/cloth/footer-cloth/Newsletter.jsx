"use client";
import React, { useState } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (email.trim() === "") {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      console.log("Email submitted:", email);
      setError("");
      setEmail("");
    }
  };

  return (
    <div className="footer-news-letter mavo-md-mb-40">
      <h5 className="mavo-footer-title mavo-mb-15 title-white-color">
        Newsletter
      </h5>
      <div className="mav-form mavo-mb-50">
        <label htmlFor="email" className="sr-only">
          Email address for newsletter
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error && validateEmail(e.target.value)) {
              setError("");
            }
          }}
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
          className="mavo-input"
        />
        {error && (
          <p
            id="email-error"
            className=" mt-2 !text-red-300 !text-sm "
            role="alert"
          >
            {error}
          </p>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          aria-label="Submit newsletter email"
          className="mavo-submit-button"
        >
          <Image
            src="/images/icons/right-arrow.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
