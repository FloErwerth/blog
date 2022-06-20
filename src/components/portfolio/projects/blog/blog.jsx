import Box from "../../box/box";
import PictureBox from "../../pictureBox/pictureBox";
import Picture from "../../picture/picture";
import "./blog.scss";
import overview from "./pictures/blog1.png";
import blog2 from "./pictures/blog2.png";
import blog3 from "./pictures/blog3.png";
import React from "react";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-shift"></div>
      The personal blog was Florians first attempt to create different
      components using React. He was learning the core concepts as well as
      advanced concepts. Using this knowledge he was able to implement colorful
      and smooth animations, responsive design and advanced algorithms.
      <div style={{ marginTop: "30px" }}></div>
      <Box
        text="florianerwerth.blog"
        boxType="Link"
        href="https://florianerwerth.blog"
      />
      <Box text="HTML - Scss - JavaScript - React - Three.js" boxType="Stack" />
      <PictureBox>
        <Picture
          src={overview}
          description="A featured article showing the chatroom of the blog."
          alt="Picture"
        ></Picture>
        <Picture
          src={blog2}
          description="The Landing page of the blog."
          alt="Picture"
        ></Picture>
        <Picture
          src={blog3}
          description="Tool to showcase the creation of labyrinths."
          alt="Picture"
        ></Picture>
      </PictureBox>
    </div>
  );
}

export default Blog;
