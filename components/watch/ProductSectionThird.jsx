import React from "react";
import Link from "next/link";

const watches = [
  {
    id: 1,
    image: "/images/products/product-3.10.jpg",
    name: "Rolex Yacht-Master 16628 'Black'",
    colors: ["orange", "black", "yellow"],
  },
  {
    id: 2,
    image: "/images/products/product-3.11.jpg",
    name: "Rolex Yacht-Master 16628 'Black'",
    colors: ["orange", "black", "yellow"],
  },
  {
    id: 3,
    image: "/images/products/product-3.12.jpg",
    name: "Rolex Yacht-Master 16628 'Black'",
    colors: ["orange", "black", "yellow"],
  },
];

const ProductSectionThird = () => {
  return (
    <div className="mavo-product-style-3 mavo-pt-110 mavo-md-pt-70 mavo-pb-120 mavo-md-pb-50">
      <div className="container home-three-container">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-40">
          <h2 className="mavo-title">
            Our Luxury <span className="mavo-active-color">Watches</span>
          </h2>
        </div>

        <div className="row gx-5">
          {watches.map((watch) => (
            <div className="col-lg-4 col-md-6" key={watch.id}>
              <div className="mavo-product-info mavo-md-mb-40">
                <div className="mavo-product-img">
                  <img src={watch.image} alt="product" />
                  <div className="mavo-product-add">
                    <Link href="/watch/product">
                      <img src="/images/icons/add-cart.svg" alt="add cart" />
                    </Link>
                  </div>
                </div>
                <div className="mavo-product-meta">
                  <p>{watch.name}</p>
                  {watch.colors.map((color) => (
                    <span key={color} className={color}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSectionThird;
