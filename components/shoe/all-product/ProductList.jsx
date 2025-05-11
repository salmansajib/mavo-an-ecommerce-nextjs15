import React from "react";
import Image from "next/image";
import Link from "next/link";

// Products data
const products = [
  {
    id: 1,
    image: "/images/products/product-image.jpg",
    title: "Air Jobdan Cmetllow",
    price: "$340.00",
    badge: "-20",
  },
  {
    id: 2,
    image: "/images/products/product-image1.jpg",
    title: "Manoa Leather Boots",
    price: "$250.00",
  },
  {
    id: 3,
    image: "/images/products/product-image2.jpg",
    title: "Big Kids' Air Jordan 1",
    price: "$650.00",
  },
  {
    id: 4,
    image: "/images/products/product-image3.jpg",
    title: "Artist Series 158",
    price: "$550.00",
  },
  {
    id: 5,
    image: "/images/products/product-image4.jpg",
    title: "Air Jobdan Cmetllow",
    price: "$340.00",
    badge: "New",
  },
  {
    id: 6,
    image: "/images/products/product-image5.jpg",
    title: "Manoa Leather Boots",
    price: "$250.00",
  },
  {
    id: 7,
    image: "/images/products/product-image6.jpg",
    title: "Big Kids' Air Jordan 1",
    price: "$650.00",
  },
  {
    id: 8,
    image: "/images/products/product-image7.jpg",
    title: "Artist Series 158",
    price: "$550.00",
  },
  {
    id: 9,
    image: "/images/products/product-image8.jpg",
    title: "Air Jobdan Cmetllow",
    price: "$340.00",
  },
  {
    id: 10,
    image: "/images/products/product-image9.jpg",
    title: "Manoa Leather Boots",
    price: "$250.00",
  },
  {
    id: 11,
    image: "/images/products/product-image10.jpg",
    title: "Big Kids' Air Jordan 1",
    price: "$650.00",
  },
  {
    id: 12,
    image: "/images/products/product-image11.jpg",
    title: "Artist Series 158",
    price: "$550.00",
  },
];

const ProductList = ({ products }) => {
  return (
    <div className="col-lg-8">
      <div className="row align-items-center justify-content-end">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
            <div className="swiper-slide">
              <div className="mavo-post-slider-info mavo-mb-35">
                <div className="mavo-post-slider-img">
                  <Image
                    width={500}
                    height={500}
                    className="w-[271px] h-auto"
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
                    <span className="post-price"> {product.tags}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
