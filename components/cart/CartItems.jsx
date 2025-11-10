import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";

export default function CartItems({
  cartItems,
  getItemAttributeDisplaySizeMaterial,
  getItemAttributeDisplayColorLength,
  handleQuantityChange,
  openDeleteModal,
}) {
  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="py-5 border-b border-black/10 font-josefin-sans flex flex-col items-center sm:flex-row gap-4"
        >
          <div>
            <Image
              src={item.image}
              alt="cart item image"
              width={500}
              height={500}
              className="w-full sm:w-[200px] h-auto"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <h1 className="!text-2xl !mb-0">
              <Link href={`/${item.type}/${item.id}`}>{item.name}</Link>
            </h1>
            <p className="!mb-0 text-black">${item.unitPrice.toFixed(2)}</p>
            <p className="!mb-0 text-black">
              {getItemAttributeDisplaySizeMaterial(item)}
            </p>
            <p className="!mb-0 text-black">
              {getItemAttributeDisplayColorLength(item)}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center justify-between w-[120px]">
                <button
                  className="minus bg-gray-100 p-2"
                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                >
                  <Icon name="Minus" size={16} />
                </button>
                <p className="!mb-0 !text-black">{item.quantity}</p>
                <button
                  className="plus bg-gray-100 p-2"
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
          </div>
        </div>
      ))}
    </>
  );
}
