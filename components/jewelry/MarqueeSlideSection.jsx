"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSlideSection = () => {
  return (
    <div className="mavo-marquee-4 mavo-pt-85 mavo-md-pt-40 mavo-pb-65">
      {/* top */}

      <Marquee
        direction="left"
        speed={40}
        gradient={false}
        style={{ width: "100%" }}
      >
        <ul className="flex items-center flex-nowrap">
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase text-[#e0c084]">
              handmade
            </span>
            <Image
              width={300}
              height={300}
              className="w-[70px] md:w-[100px] lg:w-[120px] h-auto"
              src="/images/products/product-4.8.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase">
              withlove
            </span>
            <Image
              width={300}
              height={300}
              className="w-[90px] md:w-[120px] lg:w-[155px] h-auto"
              src="/images/products/product-4.9.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase text-[#e0c084]">
              handmade
            </span>
            <Image
              width={300}
              height={300}
              className="w-[70px] md:w-[100px] lg:w-[120px] h-auto"
              src="/images/products/product-4.8.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase">
              withlove
            </span>
            <Image
              width={300}
              height={300}
              className="w-[90px] md:w-[120px] lg:w-[155px] h-auto"
              src="/images/products/product-4.9.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase">
              withlove
            </span>
            <Image
              width={300}
              height={300}
              className="w-[70px] md:w-[100px] lg:w-[120px] h-auto"
              src="/images/products/product-4.8.png"
              alt="product"
            />
          </li>
        </ul>
      </Marquee>

      {/* bottom */}
      <Marquee
        direction="right"
        speed={40}
        gradient={false}
        style={{ width: "100%" }}
      >
        <ul className="flex items-center flex-nowrap">
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase text-[#e0c084]">
              handmade
            </span>
            <Image
              width={300}
              height={300}
              className="w-[70px] md:w-[100px] lg:w-[120px] h-auto"
              src="/images/products/product-4.8.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase">
              withlove
            </span>
            <Image
              width={300}
              height={300}
              className="w-[90px] md:w-[120px] lg:w-[155px] h-auto"
              src="/images/products/product-4.9.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase text-[#e0c084]">
              handmade
            </span>
            <Image
              width={300}
              height={300}
              className="w-[70px] md:w-[100px] lg:w-[120px] h-auto"
              src="/images/products/product-4.8.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase">
              withlove
            </span>
            <Image
              width={300}
              height={300}
              className="w-[90px] md:w-[120px] lg:w-[155px] h-auto"
              src="/images/products/product-4.9.png"
              alt="product"
            />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[4rem] md:text-[7rem] lg:text-[10rem] uppercase">
              withlove
            </span>
            <Image
              width={300}
              height={300}
              className="w-[70px] md:w-[100px] lg:w-[120px] h-auto"
              src="/images/products/product-4.8.png"
              alt="product"
            />
          </li>
        </ul>
      </Marquee>
    </div>
  );
};

export default MarqueeSlideSection;
