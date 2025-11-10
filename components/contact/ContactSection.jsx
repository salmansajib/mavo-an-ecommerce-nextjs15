"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mavo-contact-map mavo-pt-120 mavo-md-pt-70 mavo-pb-100 mavo-md-pb-80 !pt-[120px]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="mavo-contact-content mavo-mb-55 mavo-pl-200">
              <div className="mavo-contact-text mavo-mb-55">
                <div className="mavo-contact-title">
                  <h3 className="contact-title">Get in Touch.</h3>
                </div>
                <p className="contact-desc">
                  Let,s start a conversation about mavoo eCommerce. If you can,t
                  find what you,re looking for, get in touch and we,ll get back
                  to you as soon as possible.
                </p>
              </div>
              <div className="mavo-contact-address mavo-mb-30">
                <div className="mavo-address-title">
                  <h5 className="address-title mavo-mb-20">Address</h5>
                  <ul>
                    <li>V / da Fontanelle, 37 / D 62010</li>
                    <li>Morrovalle (MC)</li>
                  </ul>
                </div>
              </div>
              <div className="mavo-contact-information mavo-mb-30">
                <div className="mavo-information-title">
                  <h5 className="information-title mavo-mb-20">Information</h5>
                  <ul>
                    <li>
                      <a href="tel:+380193789653"> Tel: +38 0193 789653</a>
                    </li>
                    <li>
                      <a href="mailto:info@mavoo.com">E-mail: info@mavoo.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mavo-contact-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pinterest-circular-logo-symbol"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook-app-symbol"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="sc-google-map">
              <div className="sc-gray-icon">
                <i className="icon-gap_2"></i>
              </div>
              <iframe
                height="580"
                src="https://maps.google.com/maps?width=100%25&amp;height=750&amp;hl=en&amp;q=New%20york+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="mavo-contact-form mavo-pt-100 mavo-md-pt-65">
              <div className="mavo-form-title mavo-mb-60">
                <h3 className="form-title">Have Questions? Contact us.</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label className="d-block mavo-pl-35">
                        Name <span> *</span>
                      </label>
                      <img src="/images/icons/user.png" alt="User" />
                      <input
                        type="text"
                        id="user"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label className="d-block mavo-pl-35">
                        E-mail <span> *</span>
                      </label>
                      <img src="/images/icons/mail.png" alt="Mail" />
                      <input
                        type="text"
                        id="mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label className="d-block mavo-pl-35">
                        Phone <span> *</span>
                      </label>
                      <img src="/images/icons/call.png" alt="Call" />
                      <input
                        type="text"
                        id="call"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label className="d-block mavo-pl-35">
                        Availability <span> *</span>
                      </label>
                      <img src="/images/icons/caleder.png" alt="caleder" />
                      <input
                        type="text"
                        id="caleder"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mavo-checkout-form mavo-mb-35">
                      <label className="d-block mavo-pl-35">
                        Meassage <span> *</span>
                      </label>
                      <img src="/images/icons/pen.png" alt="Pen" />
                      <input
                        type="text"
                        id="pen"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mavo-contact-check d-flex align-items-center justify-content-between">
                  <div className="contact-check-text mavo-mb-25">
                    <div className="sc-quiz-list">
                      <label className="quiz-check">
                        I have read the <a href="#">Privacy Policy</a> provided
                        by Riverside Srl
                        <input
                          type="radio"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="!flex items-center gap-2  bg-[#c9a96b] px-5 py-3"
                  >
                    <img src="/images/icons/send.png" alt="Send" />
                    <span className="font-josefin-sans text-white">
                      Get In Touch
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
