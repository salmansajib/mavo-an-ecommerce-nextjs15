import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";

const CartItems = ({
  cartItems,
  getItemAttributeDisplaySizeMaterial,
  getItemAttributeDisplayColorLength,
  handleQuantityChange,
  openDeleteModal,
}) => {
  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="mavo-cart-item mavo-pb-45 mavo-mb-45 d-flex align-items-center justify-content-between"
        >
          <div className="mavo-cart-text-box d-flex align-items-center">
            <div className="mavo-cart-image mavo-mr-30">
              <Image src={item.image} alt="Cart" width={100} height={100} />
            </div>
            <div className="mavo-cart-text flex flex-col items-start">
              <Link
                href={`/${item.type}/${item.id}`}
                className="text-2xl font-medium mb-2 hover:!text-[#C9A96B]"
              >
                {item.name}
              </Link>
              <span className="cart-price">${item.unitPrice.toFixed(2)}</span>
              <div className="mavo-mt-10 font-josefin-sans">
                {getItemAttributeDisplaySizeMaterial(item)}
              </div>
              <div className="cart-color mavo-mt-10">
                {getItemAttributeDisplayColorLength(item)}
              </div>
            </div>
          </div>
          <div className="mavo-cown-number-area d-flex align-items-center">
            <div className="mavo-cown-box mavo-pr-80 d-flex align-items-center">
              <div className="quantity">
                <input
                  className="sc_quantity_number"
                  type="text"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="minus bg-gray-100 flex items-center justify-center"
                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                >
                  <Icon name="Minus" size={16} />
                </button>
                <button
                  className="plus bg-gray-100 flex items-center justify-center"
                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
              <div
                className="mavo-delete-icon"
                onClick={() => openDeleteModal(item)}
                style={{ cursor: "pointer" }}
              >
                <img src="/images/icons/delete.png" alt="Delete" />
              </div>
            </div>
            <div className="mavo-price-list">
              <div className="price-list">
                <span className="mavo-price">${item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
