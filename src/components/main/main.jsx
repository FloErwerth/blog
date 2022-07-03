import React, { useEffect } from "react";
import BlogCard from "../blog-card/blog-card";
const Main = () => {
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
      <BlogCard
        author="Florian Erwerth"
        title="Easy hover underline effect with pseudo elements"
        text="Hovering over an element that is interactable should always give feedback. Discover an easy way to use pseudo elements to create an awesome underline effect."
        time="4"
        date="30.06.2022"
        to="/easy-underline"
      ></BlogCard>
      <BlogCard
        author="Florian Erwerth"
        title="Using cookies to store simple data"
        text="I had to learn using cookies. Now I want you tell what I have learned about the usage of cookies."
        time="7"
        date="01.07.2022"
        to="/using-cookies"
      ></BlogCard>
    </>
  );
};

export default Main;
