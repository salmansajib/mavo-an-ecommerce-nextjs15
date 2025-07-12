import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    imageSrc: "/images/products/product-4.19.jpg",
    alt: "product",
    category: "News",
    date: "35 , Feb",
    title: "6 Companies have jumped on the NFT boom",
    link: "/blog-details",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 2,
    imageSrc: "/images/products/product-4.20.jpg",
    alt: "product",
    category: "News",
    date: "35 , Feb",
    title: "Aut scelerisque impedit oues potenti aliqua conse",
    link: "/blog-details",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 3,
    imageSrc: "/images/products/product-4.21.jpg",
    alt: "product",
    category: "News",
    date: "35 , Feb",
    title: "Voluptates consecter mollitia dictumst augue",
    link: "/blog-details",
    arrowIcon: "/images/icons/right-dark-arrow.svg",
  },
];

const NewsSection = () => {
  return (
    <div className="mavo-news-4 mavo-pt-110 mavo-md-pt-65 mavo-pb-60">
      <div className="container">
        <h2 className="mavo-news-title">Our News & Articles</h2>
        <div className="row">
          {newsData.map((news) => (
            <div className="col-lg-4 col-md-6" key={news.id}>
              <div className="mavo-news-img">
                <Image
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  src={news.imageSrc}
                  alt={news.alt}
                />
              </div>
              <div className="mavo-news-wrapper">
                <div className="mavo-news-info">
                  <div className="mavo-news-date">
                    <ul>
                      <li className="new-dot">
                        <Link href="#"> {news.category}</Link>
                      </li>
                      <li>{news.date}</li>
                    </ul>
                  </div>
                  <h5>
                    <Link className="news-title-link" href={news.link}>
                      {news.title}
                    </Link>
                  </h5>
                  <div className="mavo-nes-read-more">
                    <Link href={news.link} className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        className="w-[40px] h-auto"
                        src={news.arrowIcon}
                        alt="arrow"
                      />
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
