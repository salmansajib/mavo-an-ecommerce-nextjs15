import React from "react";
import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <div className="mavo-colltoaction-2">
      <div className="container">
        <div className="mavo-colltoaction-single">
          <div className="mavo-colltoaction-desc">
            <p>Explore Our Best Deals</p>
          </div>
          <div className="mavo-heading-area mavo-mb-60">
            <h3 className="mavo-title title-white-color">Leather Accesories</h3>
          </div>
          <div className="mavo-colltoaction-btn">
            <Link href="/cart">Discover it Now</Link>
          </div>
          <div className="mavo-colltoaction-offer">
            <Image
              width={500}
              height={500}
              className="w-[140px] h-auto"
              quality={100}
              src="/images/colltoaction/offer.png"
              alt="Offer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
