import React from "react";

const shopInfoData = [
  {
    icon: "/images/icons/delivery-van.svg",
    alt: "Delivery van",
    title: "Fast delivery",
    description: "Lorem ipsum dolor sit aemet ore consectetur produento",
  },
  {
    icon: "/images/icons/online-cart.svg",
    alt: "Online Cart",
    title: "Online store",
    description: "Omem ipsum dolor sit aemet ore consectetur produento",
  },
  {
    icon: "/images/icons/warrent.svg",
    alt: "Warrenty",
    title: "Free warrenty",
    description: "Berem ipsum dolor sit aemet ore consectetur produento",
  },
  {
    icon: "/images/icons/service.svg",
    alt: "Services",
    title: "Support",
    description: "Ullrem ipsum dolor sit aemet ore consectetur produento",
  },
];

const ShopInfo = () => {
  return (
    <div className="mavo-shop-info-1 mavo-pt-100 mavo-md-pt-80 mavo-pb-80 mavo-md-pb-30">
      <div className="container">
        <div className="row">
          {shopInfoData.map((info, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="mavo-info mavo-md-mb-45">
                <div className="mavo-info-icon">
                  <img src={info.icon} alt={info.alt} />
                </div>
                <div className="mavo-info-title mavo-mb-20">
                  <h4
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    {info.title}
                  </h4>
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

export default ShopInfo;
