import React from "react";
const shopInfoItems = [
  {
    id: 1,
    icon: "/images/icons/delivery-van.svg",
    alt: "Delivery van",
    title: "Fast delivery",
    description: "Lorem ipsum dolor sit aemet ore consectetur produento",
    iconClass: "car",
  },
  {
    id: 2,
    icon: "/images/icons/online-cart.svg",
    alt: "Online Cart",
    title: "Online store",
    description: "Omem ipsum dolor sit aemet ore consectetur produento",
    iconClass: "",
  },
  {
    id: 3,
    icon: "/images/icons/warrent.svg",
    alt: "Warrenty",
    title: "Free warrenty",
    description: "Berem ipsum dolor sit aemet ore consectetur produento",
    iconClass: "",
  },
  {
    id: 4,
    icon: "/images/icons/service.svg",
    alt: "Services",
    title: "Support",
    description: "Ullrem ipsum dolor sit aemet ore consectetur produento",
    iconClass: "",
  },
];

const ShopInfo = () => {
  return (
    <div className="mavo-shop-info-1 mavo-pt-100 mavo-md-pt-80 mavo-pb-80 mavo-md-pb-30">
      <div className="container">
        <div className="row">
          {shopInfoItems.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div className="mavo-info mavo-md-mb-45">
                <div className={`mavo-info-icon ${item.iconClass}`}>
                  <img src={item.icon} alt={item.alt} />
                </div>
                <div className="mavo-info-title mavo-mb-20">
                  <h4>{item.title}</h4>
                </div>
                <div className="mavo-info-desc">
                  <p>{item.description}</p>
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
