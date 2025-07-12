import React from "react";
import Image from "next/image";

// Collection data array
const collections = [
  {
    id: 1,
    image: "/images/about/about-3/collection/collection-1.jpg",
    title: "Mavoo Bag Collection 2022 for Men - Women",
    link: "/bag/product",
  },
  {
    id: 2,
    image: "/images/about/about-3/collection/collection-2.jpg",
    title: "Handmade Leather Bags for Women",
    link: "/bag/product",
  },
  {
    id: 3,
    image: "/images/about/about-3/collection/collection-3.jpg",
    title: "Autumn - Winter Collection in 2022",
    link: "/bag/product",
  },
];

const AboutBagCollection = () => {
  return (
    <div className="about-bag-collection mavo-pt-120 mavo-md-pt-80">
      <div className="container">
        <div className="row align-items-center mavo-mb-50 mavo-md-mb-25">
          <div className="col-lg-6">
            <div className="collection-title mavo-mb-35">
              <h2 className="title text-uppercase">Our Vision</h2>
              <h2 className="sub-title">we offer</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mavo-collection-desc text-end">
              <p>
                Non orci eiusmod natoque mus quis aliquid provident platea leo
                notoer barno reprehenderit quis ad natoque nisl facere voluptas
                ornare ad cumque a eos.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {collections.map((collection) => (
            <div className="col-lg-4 col-md-6" key={collection.id}>
              <div className="collection-info mavo-md-mb-50 text-center">
                <div className="collection-info-img">
                  <Image
                    width={900}
                    height={900}
                    className="w-full h-auto object-cover"
                    src={collection.image}
                    alt="collection image"
                  />
                </div>
                <div className="collection-info-title mavo-mt-20">
                  <h4>
                    <a className="collection-title-link" href={collection.link}>
                      {collection.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBagCollection;
