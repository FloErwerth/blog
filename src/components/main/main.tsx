import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {hasKeyword, setNewFilter} from "../../util/filterEntries";
import BlogCard from "../blog-card/blog-card";
import FilterButton from "../filter-button/filter-button";
import "./main.scss";
import {Endpoint} from "../../util/navigateTo";

let baseEntries = [
  <BlogCard
    author="Florian Erwerth"
    title="Create a React.js website without using create-react-app"
    text="Learn how to create a project using react without create-react-app and learn why you should do it, too"
    time="10"
    date="04.06.2022"
    to={Endpoint.CRA}
    categories={["Webpack", "JavaScript"]}
  ></BlogCard>,
  <BlogCard
    author="Florian Erwerth"
    title="How I created the dark mode toggle"
    text="The darkmode is a huge plus for many visitors of web pages. Learn how I managed to implement the darkmode."
    time="7"
    date="30.06.2022"
    to={Endpoint.Darkmode}
    categories={["CSS", "JavaScript", "React"]}
  ></BlogCard>,
  <BlogCard
    author="Florian Erwerth"
    title="Easy hover underline effect with pseudo elements"
    text="Hovering over an element that is interactable should always give feedback. Discover an easy way to use pseudo elements to create an awesome underline effect."
    time="5"
    date="30.06.2022"
    to={Endpoint.Underline}
    categories={["CSS"]}
  ></BlogCard>,
  <BlogCard
    author="Florian Erwerth"
    title="Using cookies to store simple data"
    text="I had to learn using cookies. Now I want you tell what I have learned about the usage of cookies."
    time="7"
    date="01.07.2022"
    to={Endpoint.Cookies}
    categories={["JavaScript"]}
  ></BlogCard>,
  <BlogCard
    author="Florian Erwerth"
    title="Filter blog entries with React"
    text="Learn how to implement a filter function with React.js and JavaScript and give your visitors a better time visiting your webpage or blog."
    time="6"
    date="04.07.2022"
    to={Endpoint.Filter}
    categories={["React", "JavaScript"]}
    filtered={false}
  ></BlogCard>,
  <BlogCard
    author="Florian Erwerth"
    title="Create custom events with JavaScript"
    text="Creating custom events can be very useful in various scenarios. Learn how to set up on your own and listen to them aswell."
    time="9"
    date="06.07.2022"
    to={Endpoint.CustomEvents}
    categories={["JavaScript", "Events"]}
  ></BlogCard>,
];

const Main = () => {

  const [currentFilter, setCurrentFilter] = useState([]);
  const [entries, setEntries] = useState(baseEntries);

  useEffect(() => {
    if (window.location.pathname.includes("#")) return;
    window.location.href = "/#" + window.location.pathname;
  }, []);

  const handleFilterChange = useCallback(() => {
    const currentEntries = entries;
    for (let i = 0; i < entries.length; i++) {
      if (!hasKeyword(entries[i], currentFilter)) {
        const props = currentEntries[i].props;
        currentEntries[i] =
          <BlogCard date={props.date} categories={props.categories} text={props.text} time={props.time}
                    title={props.title} to={props.to} filtered={true}/>
      } else {
        if (entries[i].props.filtered) {
          const props = currentEntries[i].props;
          currentEntries[i] =
            <BlogCard date={props.date} categories={props.categories} text={props.text} time={props.time}
                      title={props.title} to={props.to} filtered={false}/>
        }
      }
    }
    setEntries([...currentEntries])
  }, []);

  useEffect(() => {
    return () => {
      handleFilterChange();
    };
  }, [currentFilter]);


  return (
    <div className="main">
      <div className="main-filter">
        <FilterButton
          filter={(newFilter: string) => setNewFilter(newFilter, currentFilter, setCurrentFilter)}
          filterName="React"
        />
        <FilterButton
          filter={(newFilter: string) => setNewFilter(newFilter, currentFilter, setCurrentFilter)}
          filterName="JavaScript"
        />
        <FilterButton
          filter={(newFilter: string) => setNewFilter(newFilter, currentFilter, setCurrentFilter)}
          filterName="CSS"
        />
        <FilterButton
          filter={(newFilter: string) => setNewFilter(newFilter, currentFilter, setCurrentFilter)}
          filterName="Webpack"
        />
        <FilterButton
          filter={(newFilter: string) => setNewFilter(newFilter, currentFilter, setCurrentFilter)}
          filterName="Events"
        />
      </div>
      {entries}
    </div>
  );
};

export default Main;
