import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    image: "/images/posts/posts-6.1.jpg",
    day: "9",
    month: "Sep",
    category: "Backpack, Shoe",
    title: "Fusce nisl vestibulum duior aliquip inceptos velit",
    link: "/blog-details",
  },
  {
    id: 2,
    image: "/images/posts/posts-6.2.jpg",
    day: "10",
    month: "Sep",
    category: "Backpack, Shoe",
    title: "Etiam hac explicabo veniam metu magnis egestas interdum",
    link: "/blog-details",
  },
  {
    id: 3,
    image: "/images/posts/posts-6.3.jpg",
    day: "12",
    month: "Sep",
    category: "Backpack, Fashion",
    title: "Repellat risus luctus incidunt enim euismod litora placeat",
    link: "/blog-details",
  },
];

const BlogSection = () => {
  return (
    <div className="mavo-blog-6 mavo-pb-115 mavo-md-pb-0">
      <div className="container">
        <div className="mavo-title-style-6">
          <h2 className="hiddenn">Latest News</h2>
          <div className="mavo-heading-area text-center mavo-md-mb-10">
            <h3 className="mavo-title">Our Blog</h3>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div
                className={`blog-wrapper ${
                  post.id !== 3 ? "mavo-md-mb-25" : ""
                }`}
              >
                <div className="blog-img">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    src={post.image}
                    alt="post"
                  />
                  <div className="blog-date">
                    <ul>
                      <li className="dark-color">{post.day}</li>
                      <li>{post.month}</li>
                    </ul>
                  </div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <div className="post-category">{post.category}</div>
                    <div className="blog-meta-title mavo-mb-20">
                      <h4>
                        <Link className="blog-title-link" href={post.link}>
                          {post.title}
                        </Link>
                      </h4>
                    </div>
                    <div className="blog-read-more ">
                      <Link
                        href={post.link}
                        className="flex gap-2 items-center"
                      >
                        <img
                          src="/images/icons/right-dark-arrow.svg"
                          alt="arrow"
                        />
                        Read more
                      </Link>
                    </div>
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

export default BlogSection;
