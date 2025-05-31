"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const slidesData = [
  {
    id: 1,
    products: [
      {
        id: 1,
        colClass: "col-lg-6",
        imgClass: "product-info-img-left",
        image: "/images/products/product-5.13.png",
        alt: "product",
        addCart: true,
        tag: { text: "New", class: "product-tag1" },
        category: "Face Cream",
        title: "Mavoo Facial Cream Jar V1",
        price: "$130.00",
      },
      {
        id: 2,
        colClass: "col-lg-3",
        imgClass: "product-info-img",
        image: "/images/products/product-5.14.jpg",
        alt: "product",
        addCart: false,
        tag: null,
        category: "Face Spary",
        title: "Women's Face Spray",
        price: "$75.00",
      },
      {
        id: 3,
        colClass: "col-lg-3",
        imgClass: "product-info-img",
        image: "/images/products/product-5.15.jpg",
        alt: "product",
        addCart: false,
        tag: { text: "-15%", class: "product-tag" },
        category: "Body Lotion",
        title: "Women's Body Lotion",
        price: "$99.99",
      },
    ],
  },
  // Additional slides can be added here with different product data
  // if you want different products in each slide
  {
    id: 2,
    products: [
      {
        id: 1,
        colClass: "col-lg-6",
        imgClass: "product-info-img-left",
        image: "/images/products/product-5.13.png",
        alt: "product",
        addCart: true,
        tag: { text: "New", class: "product-tag1" },
        category: "Face Cream",
        title: "Mavoo Facial Cream Jar V1",
        price: "$130.00",
      },
      {
        id: 2,
        colClass: "col-lg-3",
        imgClass: "product-info-img",
        image: "/images/products/product-5.14.jpg",
        alt: "product",
        addCart: false,
        tag: null,
        category: "Face Spary",
        title: "Women's Face Spray",
        price: "$75.00",
      },
      {
        id: 3,
        colClass: "col-lg-3",
        imgClass: "product-info-img",
        image: "/images/products/product-5.15.jpg",
        alt: "product",
        addCart: false,
        tag: { text: "-15%", class: "product-tag" },
        category: "Body Lotion",
        title: "Women's Body Lotion",
        price: "$99.99",
      },
    ],
  },
];

const ProductSectionFourth = () => {
  return (
    <div className="mavo-product-style-5 mavo-pt-110 mavo-md-pt-70 mavo-pb-110 mavo-md-pb-70">
      <div className="container">
        <div className="mavo-product-title mavo-mb-50">
          <h2 className="flex flex-wrap items-center justify-center gap-3">
            Just Launched
            <img src="/images/icons/product-shape-5.1.png" alt="product" />
          </h2>
          <Link className="mavo-explore-link" href="/beauty-product/product">
            Explore All New Releases
          </Link>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper productStyle5"
      >
        <div className="swiper-wrapper">
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div className="container">
                <div className="row">
                  {slide.products.map((product) => (
                    <div key={product.id} className={product.colClass}>
                      <div className="product-info">
                        <div className={product.imgClass}>
                          <img
                            className="product-img"
                            src={product.image}
                            alt={product.alt}
                          />
                          {product.addCart && (
                            <Link
                              className="add-cart"
                              href="/beauty-product/product"
                            >
                              <img
                                src="/images/icons/add-cart-light.svg"
                                alt="add-cart"
                              />
                            </Link>
                          )}
                          {product.tag && (
                            <div className={product.tag.class}>
                              <span className="active-price">
                                {product.tag.text}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mavo-product-content-box mavo-mt-10 d-flex align-items-center justify-content-between">
                          <div className="mavo-text-box">
                            <span className="mavo-sub-title">
                              {product.category}
                            </span>
                            <h6>
                              <Link
                                className="product-title-link"
                                href="/beauty-product/product"
                              >
                                {product.title}
                              </Link>
                            </h6>
                          </div>
                          <div className="mavo-product-price">
                            <span>{product.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-next">
          <img src="/images/icons/dark-next-arrow.png" alt="Arrow" />
        </div>
        <div className="swiper-button-prev">
          <img src="/images/icons/dark-prev-arrow.png" alt="Arrow" />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSectionFourth;
