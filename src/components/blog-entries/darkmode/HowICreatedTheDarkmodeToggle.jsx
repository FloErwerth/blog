import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryList from "../../entry-components/entry-list/entry-list";
function HowIManagedDarkmode() {
  const css = useRef(null);
  const events = useRef(null);
  const toggle = useRef(null);
  const top = useRef(null);
  return (
    <EntryBody reference={top}>
      <EntryHeader
        title="How I created the dark mode toggle"
        date="30.06.2022"
        author="Florian Erwerth"
        shortDescription="React Developer @ Check24"
        time="7"
      />
      <EntryBody.Text>
        The ability to enable dark mode becomes an essential feature for many
        applications aswell as browser sites. See the table of content below and
        learn how to implement it on your webpage.
      </EntryBody.Text>
      <EntryBody.List>
        <EntryBody.ListElement reference={events}>
          Implementing the toggle functionality
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={css}>
          Using the dark attribute to toggle styles
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={toggle}>
          Creating a toggle switch
        </EntryBody.ListElement>
      </EntryBody.List>
      <EntryBody.Subtitle reference={events}>
        Implementing the toggle functionality
      </EntryBody.Subtitle>
      <EntryBody.Text>
        At first we have to implement a way to tell every element, that dark
        mode has been enabled.
      </EntryBody.Text>
      <EntryBody.Text>
        I have created a little example on{" "}
        <EntryBody.Link href="https://codepen.io/">Codepen.io</EntryBody.Link>{" "}
        where I added a header and some simple text. In addition to that I added
        a button.
      </EntryBody.Text>
      <EntryBody.Text>
        This button acts as dark mode switch for now and is also responsible for
        handling the attribute on the body.
      </EntryBody.Text>
      <EntryBody.Text>
        On click the button is calling a function with the name{" "}
        <EntryBody.Highlight>toggleDarkMode</EntryBody.Highlight>. In this
        function we get the body element by using{" "}
        <EntryBody.Highlight>
          document.getElementById("root")
        </EntryBody.Highlight>
      </EntryBody.Text>
      <EntryBody.Subtitle reference={css}>
        Using the dark attribute to toggle styles
      </EntryBody.Subtitle>
      <EntryBody.Subtitle reference={events}>
        Creating a toggle switch
      </EntryBody.Subtitle>
    </EntryBody>
  );
}

export default HowIManagedDarkmode;
