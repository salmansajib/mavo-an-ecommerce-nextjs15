import React from "react";
import Link from "next/link";
import Image from "next/image";

const ItemCard = ({ product }) => {
  return (
    <div className="mavo-product-single mavo-md-mb-55">
      <div className="mavo-product-info">
        <div className="mavo-product-info-img">
          <Image
            src={product.variants[0].images[0]}
            alt="products"
            width={500}
            height={500}
            quality={100}
            className="w-[500px] h-auto"
          />
        </div>
        {product.tags && (
          <div className={`mavo-product-tag ${product.tags.toLowerCase()}`}>
            <span>{product.tags}</span>
          </div>
        )}
        <div className="mavo-product-social">
          <ul>
            <li>
              <Link href={`/cloth/${product.id}`}>
                <i className="flaticon-eye"></i>
                <span>Quick view</span>
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
  );
};

export default ItemCard;
