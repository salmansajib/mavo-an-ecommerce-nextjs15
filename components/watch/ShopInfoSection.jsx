import React from "react";

const shopInfoData = [
  {
    iconSrc: "/images/icons/delivery-van.svg",
    iconAlt: "Dalivery van",
    iconClass: "car",
    title: "Fast delivery",
    description: "Lorem ipsum dolor sit aemet ore consectetur produento",
  },
  {
    iconSrc: "/images/icons/online-cart.svg",
    iconAlt: "Online Cart",
    title: "Online store",
    description: "Omem ipsum dolor sit aemet ore consectetur produento",
  },
  {
    iconSrc: "/images/icons/warrent.svg",
    iconAlt: "Warrenty",
    title: "Free warrenty",
    description: "Berem ipsum dolor sit aemet ore consectetur produento",
  },
  {
    iconSrc: "/images/icons/service.svg",
    iconAlt: "Services",
    title: "Support",
    description: "Ullrem ipsum dolor sit aemet ore consectetur produento",
  },
];

const ShopInfoSection = () => {
  return (
    <div className="mavo-shop-info-1 mavo-pt-100 mavo-md-pt-80 mavo-pb-30 mavo-md-pb-10">
      <div className="container home-three-container">
        <div className="row">
          {shopInfoData.map((info, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="mavo-info">
                <div className={`mavo-info-icon ${info.iconClass || ""}`}>
                  <img src={info.iconSrc} alt={info.iconAlt} />
                </div>
                <div className="mavo-info-title">
                  <h4>{info.title}</h4>
                </div>
                <div className="mavo-info-desc">
                  <p>{info.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopInfoSection;
