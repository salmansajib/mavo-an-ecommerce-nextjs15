import React from "react";
import Link from "next/link";
import FilterSection from "./FilterSectionJewelry";
import ItemCard from "../ItemCard";

const ProductList = ({ products }) => {
  return (
    <div className="mavo-collection-style-2 mavo-collection-page mavo-pt-120 mavo-md-pt-80 mavo-pb-80 mavo-md-pb-40 !max-w-[1300px] mx-auto">
      <div className="container page-container2">
        <div className="row">
          <div className="col-lg-12">
            <div className="row align-items-center justify-content-start">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                  <ItemCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
