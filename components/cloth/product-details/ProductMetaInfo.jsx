import React from "react";

const ProductMetaInfo = () => {
  return (
    <div className="mavo-product-meta mavo-mb-30">
      <ul className="flex flex-col md:flex-row items-start gap-2">
        <li className="!flex items-center gap-2">
          <img src="/images/icons/share.png" alt="png" />
          <span>Share</span>
        </li>
        <li className="!flex items-center gap-2">
          <img src="/images/icons/quetions.png" alt="png" />
          <span>Ask a Question</span>
        </li>
        <li className="!flex items-center gap-2">
          <img src="/images/icons/view.png" alt="png" />
          <span>50 people are viewing this right now</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductMetaInfo;
