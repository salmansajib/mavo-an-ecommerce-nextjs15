import React from "react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    image: "/images/posts/posts-2.1.jpg",
    alt: "Posts",
    date: "Sep 26, 2022",
    category: "Fashion, Trends",
    title: "What's the main challenge for bleached heels?",
    link: "shoes-blog.html",
    readMoreIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 2,
    image: "/images/posts/posts-2.2.jpg",
    alt: "Posts",
    date: "Sep 26, 2022",
    category: "Fashion, Trends",
    title: "Pop sugar how to clean your sneakers according?",
    link: "shoes-blog.html",
    readMoreIcon: "/images/icons/right-dark-arrow.svg",
  },
  {
    id: 3,
    image: "/images/posts/posts-2.3.jpg",
    alt: "Posts",
    date: "Sep 26, 2022",
    category: "Fashion, Trends",
    title: "The heels we're living in right now your own side.",
    link: "shoes-blog.html",
    readMoreIcon: "/images/icons/right-dark-arrow.svg",
  },
];

const RecentPosts = () => {
  return (
    <div className="mavo-post-2 mavo-pt-110 mavo-md-pt-70 mavo-pb-95 mavo-md-pb-15">
      <div className="container">
        <div className="mavo-heading-area mavo-mb-70 mavo-md-mb-40 text-center">
          <h3 className="mavo-title">Our Recent Posts</h3>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="mavo-post-single mavo-mb-30 mavo-md-mb-60">
                <div className="mavo-post-img">
                  <Image
                    width={500}
                    height={500}
                    className="w-[420px] h-auto"
                    src={post.image}
                    alt={post.alt}
                  />
                  <div className="mavo-post-date">
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mavo-post-info">
                  <div className="mavo-post-category text-uppercase">
                    {post.category}
                  </div>
                  <h5 className="mavo-mb-20">
                    <Link className="mavo-post-title" href={post.link}>
                      {post.title}
                    </Link>
                  </h5>
                  <div className="mavo-post-tead-more">
                    <Link
                      href={post.link}
                      className="flex items-center gap-[10px]"
                    >
                      Read More
                      <Image
                        width={50}
                        height={50}
                        className="w-[30px] h-auto"
                        src={post.readMoreIcon}
                        alt="Read More"
                      />
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

export default RecentPosts;
