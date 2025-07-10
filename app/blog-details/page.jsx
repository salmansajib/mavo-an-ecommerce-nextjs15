import React from "react";
import Breadcrumb from "@/components/blog-post-details/Breadcrumb";
import Footer from "@/components/shoe/Footer";
import Header from "@/components/shoe/header/Header";
import BlogPost from "@/components/blog-post-details/BlogPost";

export default function BlogDetailsHome() {
  return (
    <div className="pt-[120px]">
      <Header />
      <Breadcrumb />
      <BlogPost />
      <Footer />
    </div>
  );
}
