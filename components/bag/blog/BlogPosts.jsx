"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import posts from "@/data/bagBlogPosts.json";
import Icon from "@/components/Icon";

const POSTS_PER_PAGE = 9;

const BlogPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Get the posts for the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mavo-blog-6 mavo-pt-90 mavo-md-pt-50 mavo-pb-100 mavo-md-pb-20">
      <div className="container">
        <div className="row">
          {currentPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="blog-wrapper mavo-md-mb-25">
                <div className="blog-img">
                  <Image
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover"
                    src={post.image}
                    alt="post image"
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
                        <a className="blog-title-link" href={post.link}>
                          {post.title}
                        </a>
                      </h4>
                    </div>
                    <div className="blog-read-more">
                      <a href={post.link} className="flex items-center gap-2">
                        <img
                          src="/images/icons/right-dark-arrow.svg"
                          alt="arrow"
                        />
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <nav className="!mt-12 md:mt-6 font-josefin-sans">
          <ul className="flex items-center justify-center space-x-2">
            <li>
              <button
                className="flex items-center justify-center size-12 !rounded-full bg-gray-200 text-black hover:bg-[#c9a96b] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
            </li>
            {pageNumbers.map((page) => (
              <li key={page}>
                <button
                  className={`size-12 !rounded-full text-black font-medium !text-2xl ${
                    currentPage === page
                      ? "bg-[#c9a96b]"
                      : "bg-gray-200 hover:bg-[#c9a96b]"
                  }`}
                  onClick={() => handlePageChange(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                className="flex items-center justify-center size-12 !rounded-full bg-gray-200 text-black hover:bg-[#c9a96b] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogPosts;
