import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mavo-mb-45">
          <div className="mavo-product-info text-center">
            <div className="mavo-product-img">
              <Image
                width={800}
                height={800}
                className="w-[500px] h-auto"
                src={product.variants[0].materials[0].images[0]}
                alt="product"
              />
              {product.tags && (
                <div className="mavo-product-tag">
                  <span>{product.tags}</span>
                </div>
              )}
              <div className="mavo-product-social">
                <ul>
                  <li>
                    <Link href={`/watch/${product.id}`}>
                      <i className="flaticon-eye"></i>
                    </Link>
                    <span>Quick view</span>
                  </li>
                  <li>
                    <Link href={`/watch/${product.id}`}>
                      <i className="flaticon-star"></i>
                    </Link>
                    <span>Compare</span>
                  </li>
                  <li>
                    <Link href={`/watch/${product.id}`}>
                      <i className="flaticon-sort"></i>
                    </Link>
                    <span>Wishlist</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mavo-product-rating">
              <div className="rating-star">
                <ul>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="flaticon-star-1"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mavo-heading-area">
              <h6>
                <Link
                  className="product-title-link"
                  href={`/watch/${product.id}`}
                >
                  {product.name}
                </Link>
              </h6>
              <span className="mavo-product-price">${product.base_price}</span>
            </div>

            <div className="mavo-color-variation">
              <ul className="flex items-center justify-center -space-x-[8px]">
                {product.variants.map((variant, index) => (
                  <li key={index}>
                    <Link
                      href={`/watch/${product.id}`}
                      style={{
                        display: "block",
                        width: "25px",
                        height: "25px",
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
      ))}
    </div>
  );
};

export default ProductList;
