import React from "react";
import Link from "next/link";
import Image from "next/image";

const categoryItems = [
  {
    id: 1,
    title: "Skin Care",
    link: "/beauty-product/product",
    subtitle: "Deep Moisture Fix",
    image: "/images/services/category-5-3.png",
    imgClass: "mavo-category-img",
    contentClass: "content-bg-color",
  },
  {
    id: 2,
    title: "Face Dropper",
    link: "/beauty-product/product",
    subtitle: "Eye Lip Dropper",
    image: "/images/services/category-5-2.png",
    imgClass: "mavo-category-img2",
    contentClass: "content-bg-color1",
  },
  {
    id: 3,
    title: "Female Cosmetics",
    link: "/beauty-product/product",
    subtitle: "Lamination & Lash Lift",
    image: "/images/services/category-5-1.png",
    imgClass: "mavo-category-img3",
    contentClass: "",
  },
];

const CategorySection = () => {
  return (
    <div className="mavo-category-5 mavo-pt-120 mavo-md-pt-80 mavo-pb-110 mavo-md-pb-35">
      <div className="container">
        <div className="row">
          {categoryItems.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div
                className={`mavo-category-content ${item.contentClass} mavo-md-mb-30`}
              >
                <div className="mavo-category-text">
                  <h4 className="mavo-mb-15">
                    <Link className="mavo-cate-title" href={item.link}>
                      {item.title}
                    </Link>
                  </h4>
                  <span className="cate-sub-title">{item.subtitle}</span>
                  <div className="mavo-category-shop-all">
                    <Link href={item.link} className="flex items-center">
                      <p className="!m-0">Shop all</p>
                      <img
                        src="/images/icons/right-dark-arrow.svg"
                        alt="arrow"
                      />
                    </Link>
                  </div>
                </div>
                <img
                  className={item.imgClass}
                  src={item.image}
                  alt="category"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
