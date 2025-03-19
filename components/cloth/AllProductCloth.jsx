"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";
import FilterSectionCloth from "@/components/cloth/FilterSectionCloth";
import LoaderSpinner from "../LoaderSpinner";

const AllProductCloth = () => {
  const { data: products, isLoading, error } = useProducts();
  const [page, setPage] = useState(1);
  const limit = 6; // Products per page

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderSpinner />
      </div>
    );
  if (error) return <p>{error.message}</p>;
  if (!products || products.length === 0) return <p>No products available.</p>;

  const totalPages = Math.ceil(products.length / limit);
  const startIndex = (page - 1) * limit;
  const paginatedProducts = products.slice(startIndex, startIndex + limit);
  const scrollToTop = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div
      id="sc-popular-courses"
      className="mavo-product-1 mavo-cloth-product mavo-pt-115 mavo-md-pt-75 mavo-pb-115 mavo-md-pb-75"
    >
      <div className="container">
        {/* Filtering Section */}
        <FilterSectionCloth />

        {/* Product Section */}
        <div className="row">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 col-sm-6 mavo-mb-45 mavo-md-mb-15"
            >
              <div className="mavo-product-single mavo-md-mb-55">
                <div className="mavo-product-info">
                  <div className="mavo-product-info-img">
                    <Image
                      src={product.variants[0].images[0]} // Display first image of the first variant
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
                        <Link href={`/product/${product.id}`}>
                          <i className="flaticon-eye"></i>
                          <span> Quick view</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/product/${product.id}`}>
                          <i className="flaticon-star"></i>
                          <span> Compare</span>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/product/${product.id}`}>
                          <i className="flaticon-sort"></i>
                          <span> Wishlist</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mavo-product-cart">
                    <Link href="/checkout">Buy Now</Link>
                  </div>
                </div>
                <div className="mavo-product-meta mavo-mt-35 mavo-mb-40">
                  <div className="mavo-product-category">
                    <h6>
                      <Link
                        className="mavo-product-title-link"
                        href={`/product/${product.id}`}
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
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mavo-watch-navigation mavo-mt-20 text-center">
          <ul>
            {/* Previous Button */}
            {page > 1 && (
              <li>
                <button
                  onClick={() => {
                    setPage(page - 1);
                    scrollToTop();
                  }}
                  className="hover:text-[#cb222c]"
                >
                  Prev
                </button>
              </li>
            )}

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setPage(index + 1);
                    scrollToTop();
                  }}
                  className={`${
                    page === index + 1 ? "active" : ""
                  } hover:text-[#cb222c] focus:text-[#cb222c]`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            {page < totalPages && (
              <li className="mavo-arrow-navigation">
                <button
                  onClick={() => {
                    setPage(page + 1);
                    scrollToTop();
                  }}
                  className="hover:text-[#cb222c]"
                >
                  Next <i className="flaticon-down"></i>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllProductCloth;
