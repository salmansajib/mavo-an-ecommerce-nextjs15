"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SimilarProducts = ({ similarProducts }) => {
  return (
    <div className="mavo-product-1 mavo-md-pt-50 mavo-pb-75 mavo-md-pb-20">
      <div className="container-fluid">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-35">
          <h3 className="mavo-title">Similar Products</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
        >
          {similarProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="mavo-product-single mavo-md-mb-55">
                <div className="mavo-product-info">
                  <div className="mavo-product-info-img">
                    <Image
                      src={product.variants[0].images[0]}
                      alt={product.name}
                      width={500}
                      height={500}
                      quality={100}
                      style={{
                        width: "500px",
                        height: "auto",
                      }}
                    />
                  </div>
                  {product.tags && (
                    <div
                      className={`mavo-product-tag ${product.tags.toLowerCase()}`}
                    >
                      <span>{product.tags}</span>
                    </div>
                  )}
                  <div className="mavo-product-social">
                    <ul>
                      <li>
                        <Link href={`/cloth/${product.id}`}>
                          <i className="flaticon-eye"></i>
                          <span> Quick view</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/cloth/${product.id}`}>
                          <i className="flaticon-star"></i>
                          <span> Compare</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/cloth/${product.id}`}>
                          <i className="flaticon-sort"></i>
                          <span> Wishlist</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mavo-product-cart">
                    <Link href={`/cloth/${product.id}`}>Buy Now</Link>
                  </div>
                </div>
                <div className="mavo-product-meta mavo-mt-35 mavo-mb-40">
                  <div className="mavo-product-category">
                    <h6>
                      <Link
                        className="mavo-product-title-link"
                        href={`/cloth/${product.id}`}
                      >
                        {product.name}
                      </Link>
                    </h6>
                    <span className="product-sub-title font-prata">
                      ${product.base_price.toFixed(2)}
                    </span>
                  </div>
                  <div className="mavo-product-rating">
                    <div className="rating-star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="flaticon-star-1"></i>
                      ))}
                      <Link href="#" className="rating-count font-prata">
                        {product.reviews} Reviews
                      </Link>
                    </div>
                    <div className="mavo-product-color-btn">
                      <ul>
                        {product.variants.map((variant, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              style={{
                                display: "block",
                                width: "20px",
                                height: "20px",
                                backgroundColor: variant.color_code,
                                borderRadius: "50%",
                              }}
                            ></Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProducts;
