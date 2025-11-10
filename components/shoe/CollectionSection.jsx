import React from "react";
import Link from "next/link";
import Image from "next/image";

const collectionItems = [
  {
    id: 1,
    image: "/images/about/collection2.1.jpg",
    alt: "Collection",
    itemsCount: "7 Items",
    title: "The Heels",
    link: "/shoes/product",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 2,
    image: "/images/about/collection2.2.jpg",
    alt: "Collection",
    itemsCount: "17 Items",
    title: "The Sneakers",
    link: "/shoes/product",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 3,
    image: "/images/about/collection2.3.jpg",
    alt: "Collection",
    itemsCount: "11 Items",
    title: "The Boots",
    link: "/shoes/product",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 4,
    image: "/images/about/collection2.4.jpg",
    alt: "Collection",
    itemsCount: "9 Items",
    title: "The Loafers",
    link: "/shoes/product",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
];

const CollectionSection = () => {
  return (
    <div className="mavo-collection-2 mavo-pt-70 mavo-pb-95 mavo-md-pb-15">
      <div className="container">
        <div className="row">
          {collectionItems.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
              <div className="mavo-collection-single mavo-md-mb-45">
                <div className="mavo-collection-img">
                  <Image
                    width={500}
                    height={500}
                    src={item.image}
                    alt={item.alt}
                    quality={100}
                    className="w-full h-auto"
                  />
                  <div className="mavo-collection-iesm-number">
                    <span>{item.itemsCount}</span>
                  </div>
                </div>
                <Link href={item.link} className="mavo-collection-read-more">
                  <h5 className="collection-title">{item.title}</h5>
                  <Image
                    width={100}
                    height={100}
                    src={item.arrowIcon}
                    alt="read-more"
                    className="w-[30px] h-[15px]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
