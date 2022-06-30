import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import light from "./pictures/light.jpg";
import dark from "./pictures/dark.jpg";

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
        handling the attribute on the body. The method that this click is firing
        is the following:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">
        {`const toggleDarkMode = () => {
        const body = document.getElementById("root");
        body.toggleAttribute("dark");}`}
      </EntryBody.Code>
      <EntryBody.Text>
        That is basically everything we need to enable dark mode.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={css}>
        Using the dark attribute to toggle styles
      </EntryBody.Subtitle>
      <EntryBody.Text>
        Now in CSS we can define styles on every element which is affected by
        the dark mode, if the dark attribute is on the body element. To do so we
        can use the following synthax:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`body[dark] {
        //here are the elements that are affected by the dark attribute
      }`}</EntryBody.Code>
      <EntryBody.Text>
        So if we want to change the background color of the whole webpage we can
        simply say:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`body[dark] {
        background-color: black;
      }`}</EntryBody.Code>
      <EntryBody.Text>
        If we then want to change the color of text elements we can type:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`body[dark] > p {
        color: yellow;
      }`}</EntryBody.Code>
      <EntryBody.Text>
        To use this more effectivly I recommend using CSS preprocessors like
        SCSS to handle the element selection on a better way. With SCSS we can
        simplify the selection to the following:
      </EntryBody.Text>
      <EntryBody.Code language="sass">{`body[dark] {
          background-color: black;
            p {
              color: yellow;
            }
        }`}</EntryBody.Code>
      <EntryBody.Text>This leads to the following result:</EntryBody.Text>
      <div style={{ display: "flex" }}>
        <EntryBody.Image src={dark} />
        <EntryBody.Image src={light} />
      </div>
      <EntryBody.Text>
        Clicking the "Toggle dark mode" button leads to a change of the
        background color and a change of the text color of the title and the
        text. Exactly what we want.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={events}>
        Creating a toggle switch
      </EntryBody.Subtitle>
    </EntryBody>
  );
}

export default HowIManagedDarkmode;
