import React from "react";
import Image from "next/image";
import Link from "next/link";

const CollectionSection = () => {
  return (
    <div className="mavo-colltoaction-3 pt-[40px]">
      <div className="container home-three-container">
        <div className="row colltoaction-bg">
          {/* Empty Column for Background */}
          <div className="col-lg-6"></div>

          {/* Content Column */}
          <div className="col-lg-6">
            <div className="mavo-colltoaction-info text-center flex flex-col items-center">
              <Image
                width={500}
                height={500}
                className="w-[230px] h-auto"
                src="/images/colltoaction/watch.png"
                alt="watch"
              />
              <span className="colltoaction-sub-title">
                Nicole Kidman's Choice
              </span>
              <h3 className="colltoaction-title title-white-color text-uppercase mavo-mb-60">
                Thecodude - 7AO
              </h3>
              <Link href="/watch/product">Shoping Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
