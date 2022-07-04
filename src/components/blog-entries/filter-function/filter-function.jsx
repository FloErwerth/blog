import React, { useRef } from "react";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryPreview from "./components/entry-preview/entry-preview";
import FilterButton from "../../filter-button/filter-button";
function FilterFunction() {
  const top = useRef(null);
  const components = useRef(null);
  const javascript = useRef(null);
  const composing = useRef(null);
  return (
    <EntryBody reference={top}>
      <EntryHeader
        shortDescription="React Developer @ Check24"
        title="Filter blog entries with React"
        date="04.07.2022"
        author="Florian Erwerth"
        description="Learn how to implement a filter function with React.js and JavaScript and give your visitors a better time visiting your webpage or blog."
        canonical="/easy-underline"
        time="6"
      />
      <EntryBody.Text>
        In this blog entry you will learn how to filter rendered elements with
        the useState hook using JavaScript. This is very useful, if your blog
        contains more and more entries. The user can be overwhelmed by the sheer
        content and we should help our user have a better time.
      </EntryBody.Text>
      <EntryBody.Text>
        I will create example components following this blog. The table of
        content is the following:
      </EntryBody.Text>
      <EntryBody.List>
        <EntryBody.ListElement reference={components}>
          Creating the components
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={javascript}>
          Implementing the JavaScript functions and composing the components
        </EntryBody.ListElement>
      </EntryBody.List>
      <EntryBody.Subtitle reference={components}>
        Creating the components
      </EntryBody.Subtitle>
      <EntryBody.Text>
        For our example blog we need some entry previews and buttons the user
        can click to filter the entries. We create an entry preview component, a
        filter-button component and a blog component, where we put it all
        together at a later point.
      </EntryBody.Text>
      <EntryBody.Text>
        Our blog entry preview will have a title and a small description of the
        content of the entry and will have categories like JavaScript or React.
        Our button will have a filter name, which is also the name of the
        button. So lets start with the entry preview:
      </EntryBody.Text>
      <EntryBody.Text>
        As the implementation of the components is not the main topic of this
        post I will share the code of the components and preview the components.
        The entry preview will have the following implementation:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`import React from "react";
import "./entry-preview.scss";
function EntryPreview(props) {
  return (
    <div className="entry-preview">
      <h1 className="entry-preview-title">{props.title}</h1>
      <div className="entry-preview-text">{props.text}</div>
      <div className="entry-preview-categories">
        {props.categories.map((category) => {
          return <div key={Math.random() * 1000} className="entry-preview-category">{category}</div>;
        })}
      </div>
    </div>
  );
}

export default EntryPreview;`}</EntryBody.Code>
      <EntryBody.Code language="sass">{`.entry-preview {
    display: grid;
    grid-template-rows: 30% 50% 22px 20px;
    transition: 0.5s;
    height: 200px;
    width: 400px;
    margin: auto;
    padding-top: 10px;
    padding-inline: 25px;
    background-color: lightblue;
    border-radius: 5px;
    &-title {
        color: white;
        font-size: 16px;
        transition: 0.5s;
    }
    &-text {
        color: rgb(50, 50, 50);
        font-size: 12px;
        transition: 0.5s;
    }
    &-categories {
        display: flex;
    }
    &-category {
        font-size: 10px;
        margin-right: 5px;
        padding: 5px;
        background-color: white;
    }
}`}</EntryBody.Code>
      <EntryBody.Text>And looks like this:</EntryBody.Text>
      <EntryPreview
        title="Awesome title"
        text="Great text that allows the user to get an idea what is inside of the blog post"
        categories={["JavaScript", "React"]}
      />
      <EntryBody.Text>
        As the shared code indicates the props are a title, a text and an array
        with the categories the blog post will cover.
      </EntryBody.Text>
      <EntryBody.Text>
        The filter button implementation will look like this:
      </EntryBody.Text>
      <div style={{ width: "fit-content", margin: "auto" }}>
        {" "}
        <FilterButton filter={() => {}} filterName="FilterName" />
      </div>
      <EntryBody.Text>And has the following implementation:</EntryBody.Text>
      <EntryBody.Code language="jsx">{`import React from "react";
import "./filter-button.scss";
function FilterButton(props) {
  return (
    <div
      id={props.filterName}
      className="filter-button"
      onClick={() => {
        props.filter(props.filterName.toLowerCase());
        document.getElementById(props.filterName).toggleAttribute("toggled");
      }}
    >
      {props.filterName}
    </div>
  );
}

export default FilterButton;`}</EntryBody.Code>
      <EntryBody.Code language="sass">{`.filter-button {
    font-size: 18px;
    outline: none;
    border: none;
    padding: 5px;
    margin-right: 4px;
    background-color: $color-light;
    color: white;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
    }

    &[toggled] {
        background-color: $highlight;
    }
}

body[dark="true"] {
    .filter-button {
        background-color: $color-dark;
    }
}
`}</EntryBody.Code>
      <EntryBody.Text>
        As we now have the components, we can move on to the implementation with
        javascript.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={javascript}>
        Implementing the JavaScript functions and composing the components
      </EntryBody.Subtitle>
      <EntryBody.Text>
        The idea behind the implementation is, that every blog post has some
        categories, that are JavaScript, CSS or React and the FilterButton with
        its filterName has the same name as a category. Leading to filter
        buttons like:
      </EntryBody.Text>
      <div
        style={{
          display: "flex",
          width: "fit-content",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <FilterButton filter={() => {}} filterName="JavaScript"></FilterButton>
        <FilterButton filter={() => {}} filterName="CSS"></FilterButton>
        <FilterButton filter={() => {}} filterName="React"></FilterButton>
      </div>
      <EntryBody.Text>
        Each of the buttons sending the filterName to the blog component, which
        holds the blog preview inside of a state. Inside of the blog component
        we then can define various functions, which will be responsible for
        displaying the correct previews.
      </EntryBody.Text>
      <EntryBody.Text>
        Inside of the blog component we define the necessary states and also
        define the blog previews. The states are the following:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`const [currentEntries, setCurrentEntries] = useState(blogPreviews);
const [currentFilter, setCurrentFilter] = useState([]);`}</EntryBody.Code>
      <EntryBody.Text>
        Where <EntryBody.Highlight>currentEntries</EntryBody.Highlight> are the
        currently shown entries are and these are set to array of blogPreviews
        we defined before.{" "}
        <EntryBody.Highlight>currentFilter</EntryBody.Highlight> is the filter,
        that is currently used. The filter is an array, because when using
        multiple filters the usage is simplified.
      </EntryBody.Text>
      <EntryBody.Text>
        In the blog component we can apply an array function, which is called
        filter. This function only returns the elements, that fit the conditions
        set up by us. So inside of the body our filter method looks like this:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{` return <div>{currentEntries.filter((entry) => hasKeyword(entry))}</div>;`}</EntryBody.Code>
      <EntryBody.Text>
        The <EntryBody.Highlight>hasKeyword(entry)</EntryBody.Highlight>{" "}
        function checks, if the current entry has a keyword, that fits the
        current filter. The hasKeyword method looks like this:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{` const hasKeyword = (entry) => {
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
  };`}</EntryBody.Code>
      <EntryBody.Text>
        It firstly checks, if the currentFilter is empty. If that is the case
        every entry preview should show up. Therefore we return true. If there
        is a filter we simply check each category, which we get from the props
        of the entry preview, and each filter for a match. If there is a match
        we return true.
      </EntryBody.Text>
      <EntryBody.Text>
        Now that we set up the filter in the render method, we only have to
        apply the filter in order to work. Like said previously we can add and
        also remove a filter by clicking the corresponding filter button by
        sending the defined filterName to the corresponding function in the blog
        component. This function looks like so:
      </EntryBody.Text>
      <EntryBody.Code language={"jsx"}>{`const setNewFilter = (filterName) => {
    var filters = currentFilter;
    const filterData = hasFilter(filterName);
    if (filterData.value) {
      filters.splice(filterData.index, 1);
    } else {
      filters.push(filterName);
    }
    setCurrentFilter([...filters]);
  };`}</EntryBody.Code>
      <EntryBody.Text>
        The function gets the filter name and creates a new set of filters from
        the currentFilter. We then get so called filterData from a method that
        is called hasFilter. This method checks, if we already have the current
        filterName activated or not.
      </EntryBody.Text>
      <EntryBody.Text>
        We get back filterData, which is a object that contains the boolean
        value of the check and also the index of the found filter, that is
        already inside of our currentFilters array.
      </EntryBody.Text>
      <EntryBody.Text>
        If we have a positive check, the filter is already applied. Since we
        have a toggle we remove the filter from the array with the{" "}
        <EntryBody.Highlight>splice</EntryBody.Highlight> method.
      </EntryBody.Text>
      <EntryBody.Text>
        If the check was negative we add the filterName to our array. After that
        we set the new filterarray to function as new filters. This change of
        state triggers a rerender and also a new cicle through the hasKeyword
        function mentioned above. Now there is a filter and we only can see
        those elements, that have the corresponding keyword that suits the
        filter.
      </EntryBody.Text>
    </EntryBody>
  );
}

export default FilterFunction;
