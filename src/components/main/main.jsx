import React, { useState, useEffect, useRef } from "react";
import BlogCard from "../blog-card/blog-card";
import FilterButton from "../filter-button/filter-button";
import "./main.scss";
const Main = () => {
  const linkRef = useRef(null);
  const baseEntries = [
    <BlogCard
      author="Florian Erwerth"
      title="Create a React.js website without using create-react-app"
      text="Learn how to create a project using react without create-react-app and learn why you should do it, too"
      time="10"
      date="04.06.2022"
      to="/create-react-app"
      categories={["Webpack", "JavaScript"]}
    ></BlogCard>,
    <BlogCard
      author="Florian Erwerth"
      title="How I created the dark mode toggle"
      text="The darkmode is a huge plus for many visitors of web pages. Learn how I managed to implement the darkmode."
      time="7"
      date="30.06.2022"
      to="/how-I-managed-darkmode"
      categories={["CSS", "JavaScript", "React"]}
    ></BlogCard>,
    <BlogCard
      author="Florian Erwerth"
      title="Easy hover underline effect with pseudo elements"
      text="Hovering over an element that is interactable should always give feedback. Discover an easy way to use pseudo elements to create an awesome underline effect."
      time="5"
      date="30.06.2022"
      to="/easy-underline"
      categories={["CSS"]}
    ></BlogCard>,
    <BlogCard
      author="Florian Erwerth"
      title="Using cookies to store simple data"
      text="I had to learn using cookies. Now I want you tell what I have learned about the usage of cookies."
      time="7"
      date="01.07.2022"
      to="/using-cookies"
      categories={["JavaScript"]}
    ></BlogCard>,
    <BlogCard
      author="Florian Erwerth"
      title="Filter blog entries with React"
      text="Learn how to implement a filter function with React.js and JavaScript and give your visitors a better time visiting your webpage or blog."
      time="6"
      date="04.07.2022"
      to="/filter-function"
      categories={["React", "JavaScript"]}
    ></BlogCard>,
    <BlogCard
      author="Florian Erwerth"
      title="Create custom events with JavaScript"
      text="Creating custom events can be very useful in various scenarios. Learn how to set up on your own and listen to them aswell."
      time="9"
      date="06.07.2022"
      to="/custom-events"
      categories={["JavaScript", "Events"]}
    ></BlogCard>,
  ];

  const hasKeyword = (entry) => {
    if (currentFilter.length === 0) return true;
    const categories = entry.props.categories;
    for (var j = 0; j < currentFilter.length; j++) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].toLowerCase() == currentFilter[j]) {
          return true;
        }
      }
    }

    return false;
  };

  const setNewFilter = (filterName) => {
    var filters = currentFilter;
    const filterData = hasFilter(filterName);
    if (filterData.value) {
      filters.splice(filterData.index, 1);
    } else {
      filters.push(filterName);
    }
    setCurrentFilter([...filters]);
  };

  const hasFilter = (filterName) => {
    for (var i = 0; i < currentFilter.length; i++) {
      if (currentFilter[i] === filterName) return { value: true, index: i };
    }
    return { value: false, index: undefined };
  };

  const [currentEntries, setCurrentEntries] = useState(baseEntries);
  const [currentFilter, setCurrentFilter] = useState([]);

  return (
    <div className="main">
      <div className="main-filter">
        <FilterButton
          filter={(newFilter) => setNewFilter(newFilter)}
          filterName="React"
        />
        <FilterButton
          filter={(newFilter) => setNewFilter(newFilter)}
          filterName="JavaScript"
        />
        <FilterButton
          filter={(newFilter) => setNewFilter(newFilter)}
          filterName="CSS"
        />
        <FilterButton
          filter={(newFilter) => setNewFilter(newFilter)}
          filterName="Webpack"
        />
        <FilterButton
          filter={(newFilter) => setNewFilter(newFilter)}
          filterName="Events"
        />
      </div>
      {currentEntries.filter((entry) => hasKeyword(entry))}
    </div>
  );
};

export default Main;
