import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import "./easy-underline.scss";
function EasyUnderline() {
  const top = useRef(null);
  return (
    <EntryBody reference={top}>
      <EntryHeader
        shortDescription="React Developer @ Check24"
        title="Easy underline hover effect with pseudo elements"
        date="30.06.2022"
        author="Florian Erwerth"
        time="5"
      />
      <EntryBody.Text>
        An interactable element should always have some sort of feedback for the
        user, that it is in fact hoverable. A neat and easy way to do so is to
        use pseudo elements to create and underline or background effect.
      </EntryBody.Text>
      <EntryBody.Text>We create a simple, hoverable element:</EntryBody.Text>
      <EntryBody.Code language="jsx">{`<div class="element">Interactable Element</div>`}</EntryBody.Code>
      <EntryBody.Text>
        In css we define the element the following way:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`.element {
  font-size: 20px;
  padding: 1rem;
  background-color: lightgray;
  width: fit-content;
}`}</EntryBody.Code>
      <EntryBody.Text>Which leads to this element:</EntryBody.Text>
      <div
        style={{
          fontSize: "20px",
          padding: "1rem",
          backgroundColor: "lightgray",
          color: "black",
          width: "fit-content",
          margin: "20px",
          marginInline: "auto",
        }}
      >
        Interactable Element
      </div>
      <EntryBody.Text>
        Of course hovering this element does nothing at the moment. Lets add
        some hover behavior:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`.element:hover {
   cursor: pointer;
}`}</EntryBody.Code>
      <div
        style={{
          fontSize: "20px",
          padding: "1rem",
          backgroundColor: "lightgray",
          color: "black",
          width: "fit-content",
          margin: "20px",
          marginInline: "auto",
        }}
        className="element"
      >
        Interactable Element
      </div>
      <EntryBody.Text>
        But now comes the intersting part. We create a simple hover animation,
        that gives a stronger feedback to the user. We use the pseudo element{" "}
        <EntryBody.Highlight>::after</EntryBody.Highlight> for that. A pseudo
        element is a html element, that is injected by CSS to create additional
        content on the webpage related to a certain element.
      </EntryBody.Text>
      <EntryBody.Text>
        As we have defined a width of{" "}
        <EntryBody.Highlight>fit-content</EntryBody.Highlight> and a{" "}
        <EntryBody.Highlight>padding: 1rem</EntryBody.Highlight> we have to use
        suitable values to make sure the pseudo element has the same with and
        the perfect position under the element. In our CSS file we add the
        following code to create the pseudo element without the hover effect:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`.element::after {
  content: "";
  display: block;
  width: calc(100% + 2rem);
  height: 3px;
  position: relative;
  top: 1rem;
  left: -1rem;
  background-color: blue;
}`}</EntryBody.Code>
      <EntryBody.Text>
        The <EntryBody.Highlight>content</EntryBody.Highlight> property just
        tells HTML what content the pseudo element has. We can insert text if we
        want, but in our case we do not want that. We have to add an empty
        string in order to make sure the element appears. This is also the case
        for <EntryBody.Highlight>display: block</EntryBody.Highlight>
      </EntryBody.Text>
      <EntryBody.Text>
        We define, that the element takes up 100% of the width + padding (2rem).
        We position the element relative to its parent and move it to the bottom
        1rem with the top attribute. We also have to move it to the left by
        -1rem. This is the result:
      </EntryBody.Text>
      <div
        style={{
          fontSize: "20px",
          padding: "1rem",
          backgroundColor: "lightgray",
          color: "black",
          width: "fit-content",
          margin: "20px",
          marginInline: "auto",
        }}
        className="element"
      >
        Interactable Element
      </div>
      <EntryBody.Text>
        We have created an underline effect for our element which is always at
        the correct position. We change our element to the following:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`.element {
  font-size: 20px;
  padding: 1rem;
  background-color: lightgray;
  width: 0;
  transition: 0.5s;
}
.element:hover::after {
    width: calc(100% + 2rem);
}`}</EntryBody.Code>
      <EntryBody.Text>And add the following CSS:</EntryBody.Text>
      <EntryBody.Code language="css">{`
.element:hover::after {
    width: calc(100% + 2rem);
}`}</EntryBody.Code>
      <EntryBody.Text>This leads to the final result:</EntryBody.Text>
      <div
        style={{
          fontSize: "20px",
          padding: "1rem",
          backgroundColor: "lightgray",
          color: "black",
          width: "fit-content",
          margin: "20px",
          marginInline: "auto",
        }}
        className="element-hoverable"
      >
        Interactable Element
      </div>
    </EntryBody>
  );
}

export default EasyUnderline;
