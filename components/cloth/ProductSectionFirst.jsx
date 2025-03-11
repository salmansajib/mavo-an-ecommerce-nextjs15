import Image from "next/image";
import Link from "next/link";
import { getFirstFourClothProducts } from "@/utils/fetchClothData";

const ProductSectionFirst = async () => {
  const firstFourProducts = await getFirstFourClothProducts();

  return (
    <div className="mavo-product-1 mavo-pb-120 mavo-md-pb-20">
      <div className="container-fluid">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-35">
          <h3 className="mavo-title" style={{ fontSize: "40px" }}>
            Popular This Season
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mavo-product-banner mavo-md-mb-50">
              <div className="mavo-product-img">
                <Image
                  src="/images/products/product-1.1.jpg"
                  alt="products"
                  width={1500}
                  height={1500}
                  quality={100}
                  priority={true}
                  style={{
                    width: "1000px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {firstFourProducts.map((product) => (
                <div className="col-lg-6 col-md-6 col-sm-6" key={product.id}>
                  <div className="mavo-product-single mavo-md-mb-55">
                    <div className="mavo-product-info">
                      <div className="mavo-product-info-img">
                        <Image
                          src={product.variants[0].images[0]}
                          alt="products"
                          width={500}
                          height={500}
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
                            <Link
                              href="/#"
                              style={{ textDecoration: "none", color: "#000" }}
                            >
                              <i className="flaticon-eye"></i>
                              <span>Quick view</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/#"
                              style={{ textDecoration: "none", color: "#000" }}
                            >
                              <i className="flaticon-star"></i>
                              <span> Compare</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/#"
                              style={{ textDecoration: "none", color: "#000" }}
                            >
                              <i className="flaticon-sort"></i>
                              <span> Wishlist</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mavo-product-cart">
                        <Link
                          href="/#"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                    <div className="mavo-product-meta mavo-mt-35 mavo-mb-40">
                      <div className="mavo-product-category">
                        <h6>
                          <Link
                            className="mavo-product-title-link"
                            href="/#"
                            style={{
                              textDecoration: "none",
                              fontSize: "20px",
                              color: "#000",
                            }}
                          >
                            {product.name}
                          </Link>
                        </h6>
                        <span
                          className="product-sub-title font-prata"
                          style={{ fontSize: "16px" }}
                        >
                          ${product.base_price.toFixed(2)}
                        </span>
                      </div>
                      <div className="mavo-product-rating">
                        <div className="rating-star">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="flaticon-star-1"></i>
                          ))}
                          <Link
                            href="/#"
                            className="rating-count font-prata"
                            style={{ textDecoration: "none" }}
                          >
                            {product.reviews} Reviews
                          </Link>
                        </div>
                        <div className="mavo-product-color-btn">
                          <ul>
                            {product.variants.map((variant, index) => (
                              <li key={index}>
                                <Link
                                  href="/#"
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
              {/* {products.length === 0 && <p>Loading products...</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionFirst;
