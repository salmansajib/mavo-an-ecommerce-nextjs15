"use client";

import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";

const ProductSectionSecondCloth = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>{error.message}</p>;
  if (!products) return <p>No products available.</p>;

  const lastFourProducts = products.length > 0 ? products.slice(-4) : [];

  return (
    <div className="mavo-product-1 mavo-pt-120 mavo-md-pt-80 mavo-pb-110 mavo-md-pb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {lastFourProducts.map((product) => (
                <div className="col-lg-6 col-md-6 col-sm-6" key={product.id}>
                  <div className="mavo-product-single mavo-md-mb-55">
                    <div className="mavo-product-info">
                      <div className="mavo-product-info-img">
                        <Image
                          src={product.variants[0].images[0]}
                          alt={product.name}
                          width={500}
                          height={500}
                          quality={100}
                          className="w-[500px] h-auto"
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
                            className="mavo-product-title-link hover:!text-[#c9a96b]"
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
                                  href={`/cloth/${product.id}`}
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
          </div>
          <div className="col-lg-6">
            <div className="mavo-product-banner">
              <div className="mavo-product-img">
                <Image
                  src="/images/products/product-1.6.jpg"
                  alt="products"
                  width={1000}
                  height={1000}
                  quality={100}
                  // priority={true}
                  className="w-[1000px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSecondCloth;
