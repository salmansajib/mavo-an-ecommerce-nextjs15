import React from "react";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    image: "/images/products/product-4.1.jpg",
    alt: "product",
    tag: "Gold Jewelry",
    link: "/jewelry/product",
    arrowIcon: "/images/icons/discover-arrow.png",
    shapeImage: "/images/icons/collection-shape-4.1.png",
    shapeText: "Since 1971",
    colClass: "col-lg-6",
    isLarge: true,
  },
  {
    id: 2,
    image: "/images/products/product-4.2.jpg",
    alt: "product",
    tag: "Diamond",
    link: "/jewelry/product",
    arrowIcon: "/images/icons/discover-arrow.png",
    colClass: "col-lg-12",
  },
  {
    id: 3,
    image: "/images/products/product-4.3.jpg",
    alt: "product",
    tag: "Accessories",
    link: "/jewelry/product",
    arrowIcon: "/images/icons/discover-arrow.png",
    colClass: "col-lg-12",
  },
];

const CollectionSection = () => {
  return (
    <div className="mavo-collection-4 mavo-pt-110 mavo-md-pt-75 mavo-pb-90 mavo-md-pb-50">
      <div className="container">
        <div className="mavo-heading-area text-center mavo-mb-70 mavo-md-mb-40">
          <h2 className="mavo-title text-uppercase">New Collection</h2>
        </div>
        <div className="row">
          {/* First large collection item */}
          <div className="col-lg-6">
            <div className="mavo-collection-single">
              <div className="mavo-collection-img">
                <Image
                  width={800}
                  height={800}
                  className="w-[633px] h-auto"
                  src={collections[0].image}
                  alt={collections[0].alt}
                />
                <div className="mavo-product-tag">
                  <span className="active-text text-uppercase">
                    {collections[0].tag}
                  </span>
                </div>
                <div className="mavo-product-read-more">
                  <Link href={collections[0].link}>
                    <Image
                      width={500}
                      height={500}
                      className="w-[75px] h-auto"
                      quality={100}
                      src={collections[0].arrowIcon}
                      alt="arrow"
                    />
                  </Link>
                </div>
                <div className="mavo-collection-shape">
                  <Image
                    width={100}
                    height={100}
                    className="w-[10px] h-auto"
                    quality={100}
                    src={collections[0].shapeImage}
                    alt="shape"
                  />
                  <p>{collections[0].shapeText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side collections (2 items) */}
          <div className="col-lg-6">
            <div className="row">
              {collections.slice(1).map((collection) => (
                <div key={collection.id} className={collection.colClass}>
                  <div className="mavo-collection-single">
                    <div className="mavo-collection-img">
                      <Image
                        width={800}
                        height={800}
                        className="w-[633px] h-auto"
                        src={collection.image}
                        alt={collection.alt}
                      />
                      <div className="mavo-product-tag">
                        <span className="active-text text-uppercase">
                          {collection.tag}
                        </span>
                      </div>
                      <div className="mavo-product-read-more">
                        <Link href={collection.link}>
                          <Image
                            width={500}
                            height={500}
                            className="w-[75px] h-auto"
                            quality={100}
                            src={collection.arrowIcon}
                            alt="arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
