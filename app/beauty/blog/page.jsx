import Banner from "@/components/beauty/blog/Banner";
import BlogPosts from "@/components/beauty/blog/BlogPosts";
import GallerySection from "@/components/beauty/GallerySection";
import React from "react";

export default function BeautyBlogHome() {
  return (
    <div>
      <Banner />
      <BlogPosts />
      <GallerySection />
    </div>
  );
}
