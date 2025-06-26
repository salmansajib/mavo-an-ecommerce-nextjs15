import React from "react";
import Link from "next/link";

const categoryData = [
  {
    id: 1,
    image: "/images/products/product-6.1.png",
    alt: "category",
    subTitle: "For Women",
    title: "Mavoo Alpine Ruck 2.0",
    price: "$999.39",
    link: "/bag/product",
    arrowIcon: "/images/icons/6-next-arrow.png",
    arrowAlt: "arrow",
  },
  {
    id: 2,
    image: "/images/products/product-6.2.png",
    alt: "category",
    subTitle: "For Men",
    title: "Mavoo Rollup Pack 1",
    price: "$875.39",
    link: "/bag/product",
    arrowIcon: "/images/icons/6-next-arrow.png",
    arrowAlt: "arrow",
  },
];

const CategorySection = () => {
  return (
    <div className="mavo-category-6 mavo-pt-70 mavo-md-pt-25 mavo-pb-120 mavo-md-pb-80 bg-gray-50">
      <div className="container">
        <div className="mavo-title-style-6">
          <h2 className="hidden">Categories</h2>
          <h2 className="visible">Categories</h2>
        </div>
        <div className="row">
          {categoryData.map((category) => (
            <div className="col-lg-6" key={category.id}>
              <div className="mavo-category-wrapper">
                <img
                  className="mavo-category-img"
                  src={category.image}
                  alt={category.alt}
                />
                <div className="mavo-category-content">
                  <span className="category-sub-title">
                    {category.subTitle}
                  </span>
                  <h4 className="mavo-mb-10">
                    <Link
                      className="mavo-category-title-link"
                      href={category.link}
                    >
                      {category.title}
                    </Link>
                  </h4>
                  <div className="mavo-cate-price">{category.price}</div>
                  <div className="mavo-category-shop-all mavo-mt-35">
                    <Link
                      href={category.link}
                      className="flex items-center gap-2"
                    >
                      <span>Shop now</span>
                      <img src={category.arrowIcon} alt={category.arrowAlt} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
