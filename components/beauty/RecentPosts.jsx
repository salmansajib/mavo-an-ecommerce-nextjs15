import Image from "next/image";
import React from "react";

const posts = [
  {
    id: 1,
    image: "/images/posts/post-5.1.jpg",
    month: "SEP",
    day: "10",
    category: "Beauty ,Trends",
    title: "Fusce nisl vestibulum duior aliquip inceptos velit",
    link: "/blog-details",
  },
  {
    id: 2,
    image: "/images/posts/post-5.2.jpg",
    month: "SEP",
    day: "15",
    category: "Beauty ,Trends",
    title: "Malesuada reiciend mattis accus antium ovanrto",
    link: "/blog-details",
  },
  {
    id: 3,
    image: "/images/posts/post-5.3.jpg",
    month: "SEP",
    day: "25",
    category: "Beauty ,Trends",
    title: "Irure similique occaecat oi similique id eius stnor",
    link: "/blog-details",
  },
];

const RecentPosts = () => {
  return (
    <div className="mavo-post-5 mavo-pt-110 mavo-md-pt-65 mavo-pb-60 mavo-md-pb-10">
      <div className="container">
        <div className="mavo-heading-area text-center mavo-mb-75 mavo-md-mb-45 flex flex-col gap-2 items-center">
          <h2 className="mavo-title mavo-mb-0">Recent Posts</h2>
          <img src="/images/icons/product-shape-5.1.png" alt="product" />
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="post-wrapper mavo-md-mb-70">
                <div className="post-img">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    src={post.image}
                    alt="post"
                  />
                </div>
                <div className="post-info">
                  <div className="post-date">
                    <p className="month">{post.month}</p>
                    <p>{post.day}</p>
                  </div>
                  <div className="post-meta">
                    <div className="post-category">{post.category}</div>
                    <div className="post-meta-title">
                      <h5 className="mavo-mt-20 mavo-mb-20">
                        <a className="mavo-post-meta-link" href={post.link}>
                          {post.title}
                        </a>
                      </h5>
                    </div>
                    <div className="post-read-more">
                      <a href={post.link}>Read more</a>
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

export default RecentPosts;
