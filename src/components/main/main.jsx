import React from "react";
import "./main.scss";
import SiteHeader from "../site-header/site-header";
import BlogCard from "../blog-card/blog-card";
function Main() {
  return (
    <div className="main">
      <SiteHeader title="Blog" />
      <div className="main-thumbnails">
        <BlogCard
          title="Create a React.js website without using create-react-app"
          text="Learn how to create a project using react without create-react-app and learn why you should do it, too"
          time="10"
          date="04.06.2022"
          to="/create-react-app"
        ></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
}

export default Main;
