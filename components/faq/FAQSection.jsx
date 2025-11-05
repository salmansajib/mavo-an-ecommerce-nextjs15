"use client";

import React from "react";
import { useState } from "react";
import { faqs } from "@/data/faqsData";
import FAQList from "./FAQList";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(faqs)[0]);

  const categories = Object.keys(faqs);

  const formatCategoryName = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const activeFaqs = faqs[activeCategory];

  return (
    <div className="max-w-[1350px] mx-auto py-[100px] px-4 font-josefin-sans">
      <div className="py-[100px]">
        <h1 className="!text-5xl md:!text-7xl font-bold mb-8 text-left flex flex-col !leading-[1.1]">
          <span>Frequently</span>
          <span>Asked</span>
          <span>Questions</span>
        </h1>
        <p className="!text-gray-700 py-4 max-w-[50ch]">
          Got a question? Find our FAQs here. If your question hasn't been
          answered here, drop us a line or use our contact form.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-row flex-wrap lg:!flex-col gap-2 mb-8">
          {categories.map((categoryKey) => {
            const categoryName = formatCategoryName(categoryKey);
            const isActive = activeCategory === categoryKey;
            return (
              <button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`w-[250px] h-[70px] py-4 px-3 transition-colors bg-gray-100 text-left ${
                  isActive
                    ? "font-semibold border-l-3 border-[#C9A96B]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {categoryName}
              </button>
            );
          })}
        </div>
        {/* Active Category with FAQ List */}
        <section className="faqs flex-1">
          <h2 className="!text-3xl font-bold mb-6">
            {formatCategoryName(activeCategory)}
          </h2>
          <FAQList faqs={activeFaqs} />
        </section>
      </div>
    </div>
  );
}
