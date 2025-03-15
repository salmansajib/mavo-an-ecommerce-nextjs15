import React from "react";
import Link from "next/link";

const filterData = [
  {
    name: "Category",
    subFilters: ["Men", "Women", "Kids", "Accessories"],
  },
  {
    name: "Collection",
    subFilters: ["Spring 2023", "Summer 2023", "Fall 2023", "Winter 2023"],
  },
  {
    name: "Material",
    subFilters: ["Cotton", "Polyester", "Silk", "Wool"],
  },
  {
    name: "Price",
    subFilters: ["Under $25", "$25 - $50", "$50 - $100", "Over $100"],
  },
];

const FilterSection = () => {
  return (
    <div className="row mavo-mb-70">
      <div className="col-lg-8">
        <div className="cloth-product-menu mavo-mb-25">
          <ul className="mavo-product-menu">
            {filterData.map((filter) => (
              <li key={filter.name} className="border-right">
                <Link href="/#">
                  {`${filter.name} : All `}
                  <i className="flaticon-down"></i>
                </Link>
                <ul className="sub-menu">
                  {filter.subFilters.map((subFilter, i) => (
                    <li key={i}>
                      <Link href="/#">{subFilter}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mavo-product-default-content d-flex justify-content-end">
          <div className="mavo-show-text">Showing 1–3 of 50 results</div>
          <div className="mavo_dropdown">
            <ul className="dropdown-list">
              <li>
                <Link
                  href="/#"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Sort <i className="flaticon-down"></i>
                </Link>
                <ul className="sub-menu">
                  {filterData.map((filter, i) => (
                    <li key={i}>
                      <Link
                        href="/#"
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        {filter.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
