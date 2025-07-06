import BlogPosts from "@/components/shoe/blog/BlogPosts";
import Breadcrumb from "@/components/shoe/blog/Breadcrumb";
import React from "react";

const ShoeBlogHome = () => {
  return (
    <div className="pt-[120px]">
      <Breadcrumb />
      <BlogPosts />
    </div>
  );
};

export default ShoeBlogHome;
