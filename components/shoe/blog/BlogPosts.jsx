"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import posts from "@/data/shoeBlogPosts.json";
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
    <div className="mavo-post-2 mavo-pt-120 mavo-md-pt-80 mavo-pb-110 mavo-md-pb-70">
      <div className="container">
        <div className="row">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="mavo-post-single mavo-mb-30 mavo-md-mb-60">
                <div className="mavo-mb-20 mavo-post-img">
                  <Image
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover"
                    src={post.image}
                    alt="post image"
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
                    <a className="mavo-post-title" href={post.link}>
                      {post.title}
                    </a>
                  </h5>
                  <div className="mavo-post-tead-more">
                    <a href={post.link}>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <nav className="mt-12 md:mt-6 font-josefin-sans">
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
