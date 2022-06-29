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
        title="Experiences from my career"
        text="I want to talk about my apprenticeship, the colleagues and decisions I regret"
        time="5"
        date="21.06.2022"
        to="/experiences"
      ></BlogCard>
    </>
  );
}

export default Main;
