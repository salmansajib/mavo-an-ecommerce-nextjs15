import React from "react";

const infoData = [
  {
    id: 1,
    iconSrc: "/images/icons/delivery-van.svg",
    iconAlt: "Delivery van",
    title: "Fast delivery",
    description: "Consectetur est interdum norote nesciunt fuga ceturmet",
    plClass: "mavo-pl-30",
  },
  {
    id: 2,
    iconSrc: "/images/icons/online-cart.svg",
    iconAlt: "Online Cart",
    title: "Online store",
    description: "Feugiat nobis montes or billar oui diamlorem accusamus",
    plClass: "mavo-pl-25",
  },
  {
    id: 3,
    iconSrc: "/images/icons/warrent.svg",
    iconAlt: "Warrenty",
    title: "Free warrenty",
    description: "Facilis nibh magns quisque of our metus blanditiis",
    plClass: "mavo-pl-20",
  },
  {
    id: 4,
    iconSrc: "/images/icons/service.svg",
    iconAlt: "Services",
    title: "Support",
    description: "Lorem ipsum dolor sit aemet ous consectetur produ",
    plClass: "mavo-pl-20",
  },
];

const ShopInfo = () => {
  return (
    <div className="mavo-shop-info-1 mavo-shop-section1 bg-color-2 mavo-pt-120 mavo-md-pt-80 mavo-pb-95 mavo-md-pb-25">
      <div className="container home-four-container">
        <div className="row">
          {infoData.map((info) => (
            <div className="col-lg-3 col-md-6" key={info.id}>
              <div className="mavo-info-box mavo-md-mb-35 d-flex">
                <div className="mavo-info-icon car">
                  <img src={info.iconSrc} alt={info.iconAlt} />
                </div>
                <div className={`mavo-shop-content ${info.plClass}`}>
                  <h5 className="mavo-shop-title mavo-mb-15">{info.title}</h5>
                  <p className="shop-desc">{info.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
