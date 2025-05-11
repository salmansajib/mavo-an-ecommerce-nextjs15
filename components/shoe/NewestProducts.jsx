"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";
import LoaderSpinner from "../LoaderSpinner";

const FEATURED_PRODUCTS_LIMIT = 5;

const NewestProducts = () => {
  // Fetch first 5 products (page=1, limit=5)
  const { data, isLoading, error } = useProducts(
    "shoes",
    1,
    FEATURED_PRODUCTS_LIMIT,
    "first",
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <LoaderSpinner />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <p className="text-red-500 text-center">
        Failed to load products. Please try again.
      </p>
    );
  }

  // No products state
  if (!data || !data.products || data.products.length === 0) {
    return <p className="text-center text-xl">No products available.</p>;
  }

  const products = data.products;

  return (
    <div className="mavo-post-slider-2 mavo-pt-60 mavo-pb-30">
      <div className="container-fluid mavo-post">
        <div className="row">
          {/* banner */}
          <div className="col-lg-3 p-0">
            <div className="mavo-post-slider-banner-img">
              <Image
                width={500}
                height={500}
                className="w-[480px] h-auto"
                src="/images/products/product-new-shoe-1.jpg"
                alt="Banner"
              />
              <Link
                className="mavo-post-slider-read-more"
                href="/shoes/product"
              >
                Discover More
              </Link>
            </div>
          </div>
          {/* products section */}
          <div className="col-lg-9">
            <div className="mavo-post-slider-single">
              {/* title */}
              <div className="mavo-post-slider-title">
                <div className="mavo-text">
                  <span className="mavo-sub-title">Fall Winter 2022</span>
                </div>
                <div className="mavo-heading-area mavo-mb-60 mavo-md-mb-40">
                  <h3 className="mavo-title">Our Newest Products</h3>
                </div>
              </div>
              {/* new products */}
              <Swiper
                modules={[Navigation, Autoplay]}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  // When window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // When window width is >= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  // When window width is >= 1024px
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                className="swiper postSlider"
              >
                <div className="swiper-wrapper">
                  {products.map((product) => (
                    <SwiperSlide className="swiper-slide" key={product.id}>
                      <div className="mavo-post-slider-info">
                        <div className="mavo-post-slider-img">
                          <Image
                            width={500}
                            height={500}
                            quality={100}
                            className="w-[310px] h-auto"
                            src={product.variants[0].images[0]}
                            alt={product.name}
                          />
                          <div className="mavo-product-social">
                            <ul>
                              <li>
                                <Link href={`/shoes/${product.id}`}>
                                  <i className="flaticon-eye"></i>
                                </Link>{" "}
                                <span> Quick view</span>
                              </li>
                              <li>
                                <Link href={`/shoes/${product.id}`}>
                                  <i className="flaticon-star"></i>
                                </Link>{" "}
                                <span> Compare</span>
                              </li>
                              <li>
                                <Link href={`/shoes/${product.id}`}>
                                  <i className="flaticon-sort"></i>
                                </Link>{" "}
                                <span> Wishlist</span>
                              </li>
                            </ul>
                          </div>
                          <div className="mavo-post-slider-add-cart">
                            <Link href={`/shoes/${product.id}`}>Buy Now</Link>
                          </div>
                        </div>
                        <div className="mavo-post-slider-meta">
                          <div className="mavo-post-slider-meta-title mavo-mt-25 mavo-mb-15">
                            <h5>
                              <Link
                                className="post-title-link"
                                href={`/shoes/${product.id}`}
                              >
                                {product.name}
                              </Link>
                            </h5>
                          </div>
                          <div className="mavo-post-slider-peoduct-price">
                            <span className="mavo-post-price">
                              ${product.base_price}
                            </span>
                            <i className="flaticon-star-1"></i>
                            <i className="flaticon-star-1"></i>
                            <i className="flaticon-star-1"></i>
                            <i className="flaticon-star-1"></i>
                            <i className="flaticon-star-1"></i>
                          </div>
                        </div>
                        {product.tags && (
                          <div className="price-active">
                            <span className="post-price">{product.tags}</span>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                {/* controll buttons */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestProducts;
