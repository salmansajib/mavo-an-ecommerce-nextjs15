import React from "react";
import Image from "next/image";
import Link from "next/link";

const collectionData = [
  {
    id: 1,
    title: "Our Best Collection for Your self",
    type: "info", // Special type for the first item
  },
  {
    id: 2,
    image: "/images/about/Collection1.1.jpg",
    link: "#",
    title: "Men's Cloth",
  },
  {
    id: 3,
    image: "/images/about/Collection1.2.jpg",
    link: "#",
    title: "Winter Cloth",
  },
  {
    id: 4,
    image: "/images/about/Collection1.3.jpg",
    link: "#",
    title: "Accessories",
  },
  {
    id: 5,
    image: "/images/about/Collection1.4.jpg",
    link: "#",
    title: "Bags",
  },
  {
    id: 6,
    image: "/images/about/Collection1.5.jpg",
    link: "#",
    title: "Women's cloth",
  },
];

const ClothCollection = () => {
  return (
    <div
      id="mavoo-scroll"
      className="mavo-collection-1 mavo-pt-120 mavo-md-pt-80 mavo-pb-95 mavo-md-pb-15"
    >
      <div className="container">
        <div className="row">
          {collectionData.map((item) => (
            <div
              key={item.id}
              className={`col-lg-2 col-md-4 col-sm-6 ${
                item.id === 1 ? "" : "col-6"
              }`}
            >
              {item.type === "info" ? (
                <div className="mavo-collection-info mavo-md-mb-50">
                  <div className="mavo-collection-title">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="mavo-collection-single mavo-md-mb-50">
                  <div className="mavo-collection-img">
                    <Image
                      src={item.image}
                      alt="Collection"
                      width={300}
                      height={300}
                      style={{
                        width: "300px",
                        height: "auto",
                      }}
                    />
                    <Link
                      href={item.link}
                      className="mavo-collection-read-more"
                    >
                      <Image
                        src="/images/icons/right-arrow.svg"
                        alt="read-more"
                        width={350}
                        height={350}
                      />
                    </Link>
                  </div>
                  <h6 className="mavo-mt-25">
                    <Link
                      className="mavo-collect-title text-uppercase"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </h6>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothCollection;
