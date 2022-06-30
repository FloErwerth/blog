import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import light from "./pictures/light.jpg";
import dark from "./pictures/dark.jpg";
import EntryListElement from "../../entry-components/entry-list/entry-list-element";

function HowIManagedDarkmode() {
  const css = useRef(null);
  const toggleswitch = useRef(null);
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
        <EntryBody.ListElement reference={toggle}>
          Implementing the toggle functionality
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={css}>
          Using the dark attribute to toggle styles
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={toggleswitch}>
          Creating a toggle switch for react
        </EntryBody.ListElement>
      </EntryBody.List>
      <EntryBody.Subtitle reference={toggle}>
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
        {`function toggleDarkMode() {
        const body = document.getElementById("root");
        body.toggleAttribute("dark");
        }`}
      </EntryBody.Code>
      <EntryBody.Text>
        That is basically everything we need to enable dark mode. Every time we
        click the button, we toggle the attribute "dark" on the body. Used with
        CSS this will cause a change of the style of every element that is
        watching this attribute.
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
      <EntryBody.Image src={dark} alt="Picture of a result in the dark mode" />
      <EntryBody.Image
        src={light}
        alt="Picture of a result in the light mode"
      />
      <EntryBody.Text>
        Clicking the "Toggle dark mode" button leads to a change of the
        background color and a change of the text color of the title and the
        text. Exactly what we want.
      </EntryBody.Text>
      <EntryBody.Text>
        The cool thing is that we can use transitions and animations to spice
        the transition between the modes up.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={toggleswitch}>
        Creating a toggle switch for react
      </EntryBody.Subtitle>
      <EntryBody.Text>
        By creating a toggle switch we can indicate the user in a neat way that
        there is an option to toggle the theme on the webpage.{" "}
      </EntryBody.Text>
      <EntryBody.Text>
        I have added two switches, depending on the device the user is using to
        visit my page:
        <ul>
          <li>sun and moon</li>
          <li>swipe</li>
        </ul>
      </EntryBody.Text>
      <EntryBody.Text>
        The sun and the moon are svgs, which are both are located inside of a
        single element with a relative position. By clicking the button a state
        is changing and the position is changing according to that.
      </EntryBody.Text>
      <EntryBody.Text>
        To start things of we create an react component called ThemeSwitcher and
        give it a state <EntryBody.Highlight>dark</EntryBody.Highlight>
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`import React, { useState } from "react";
const ThemeSwitcher = (props) => {
  const [dark, setDark] = useState(false);
  return (
    ...
  );
}`}</EntryBody.Code>
      <EntryBody.Text>
        We then import the svgs for the sun and the moon, wrap it inside a div,
        which is the container, and another div, which will be responsible for
        the movement of the svgs, and give both divs a className like so:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`import React, { useState } from "react";
const ThemeSwitcher = (props) => {
  const [dark, setDark] = useState(false);
  return (
    <div
      className="theme-switcher"
      onClick={() => {
        setDark((dark) => !dark);
      }}
    >
      <div
        className="theme-switcher-mover"
        style={{
          top: dark ? "-45px" : "0px",
        }}
      >
        <img src={Moon} className="theme-switcher" />
        <img src={Sun} className="theme-switcher" />
      </div>
    </div>
  );
}`}</EntryBody.Code>
      <EntryBody.Text>
        The SCSS file for the theme switcher container is shown below:
      </EntryBody.Text>
      <EntryBody.Code language="sass">{`.theme-switcher {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;
    background-color: black;
    user-select: none;
    &:hover {
        cursor: pointer;
    }
  }`}</EntryBody.Code>
      <EntryBody.Text>
        We define dimensions, a border radius and specify, that the overflow is
        hidden. Otherwise both svgs would be visible all the time. We also say,
        that there is a transition to make sure that there will be a smooth
        animation between the different states of the toggle.
      </EntryBody.Text>
      <EntryBody.Text>
        The theme switcher mover, which moves the svgs on state change, has the
        following SCSS:
      </EntryBody.Text>
      <EntryBody.Code language="sass">{`.theme-switcher-mover {
    position: relative;
    transition: 0.5s;
        & > img:focus-visible {
            outline: none;
        }
  }`}</EntryBody.Code>
      <EntryBody.Text>
        The mover has no top defined, because it is defined inline in the react
        component to make sure, the component is styled depending on the current
        state of the toggle.
      </EntryBody.Text>
    </EntryBody>
  );
}

export default HowIManagedDarkmode;
