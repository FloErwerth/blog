import React from "react";
import BlogCard from "../blog-card/blog-card";
function Main() {
  return (
    <>
      <BlogCard
        author="Florian Erwerth"
        title="Create a React.js website without using create-react-app"
        text="Learn how to create a project using react without create-react-app and learn why you should do it, too"
        time="10"
        date="04.06.2022"
        to="/create-react-app"
      ></BlogCard>
      <BlogCard
        author="Florian Erwerth"
        title="How I created the dark mode toggle"
        text="The darkmode is a huge plus for many visitors of web pages. Learn how I managed to implement the darkmode."
        time="7"
        date="30.06.2022"
        to="/how-I-managed-darkmode"
      ></BlogCard>
    </>
  );
}

export default Main;
