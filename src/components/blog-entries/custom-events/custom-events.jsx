import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";

function CustomEvents() {
  const top = useRef(null);
  const benefits = useRef(null);
  const creating = useRef(null);
  const custom = useRef(null);
  return (
    <EntryBody reference={top}>
      <EntryHeader
        shortDescription="React Developer @ Check24"
        title="Create custom events with JavaScript"
        date="06.07.2022"
        author="Florian Erwerth"
        description="Creating custom events can be very useful in various scenarios. Learn how to set up on your own and listen to them aswell."
        canonical="/custom-events"
        time="9"
      />
      <EntryBody.Text>
        Custom events come in handy on various scenarios for different reasons.
        In this blog entry you will learn the benefits of custom events and how
        to use them. The following table of content awaits you:
      </EntryBody.Text>
      <EntryBody.List>
        <EntryBody.ListElement reference={benefits}>
          The benefits of custom events
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={creating}>
          Creating events and listen for them
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={custom}>
          Creating custom events to send data
        </EntryBody.ListElement>
      </EntryBody.List>
      <EntryBody.Subtitle reference={benefits}>
        The benefits of custom events
      </EntryBody.Subtitle>
      <EntryBody.Text>
        There are many events, that are available out of the package. Mouse
        events, pointer events, animation events and Time events are only a few
        of the nearly 50 events JavaScript is offering. But of course there are
        scenarios, where the standard events do not fit our needs. Here we can
        use custom events.
      </EntryBody.Text>
      <EntryBody.Text>
        On scenario of custom events are very useful when it comes to
        communicate between different sections of your project without having to
        pass data down or up the hierarchy.
      </EntryBody.Text>
      <EntryBody.Text>
        In React there are props, that are used to pass data from the mother
        component to the child component. That works well if we go down the
        hierarchy, but is more difficult the other way around. This is a typical
        scenario for using custom events.
      </EntryBody.Text>
      <EntryBody.Text>
        Another scenario is to send a trigger to different parts of the webpage.
        With this events you can send necessary data to the different components
        without having to get the different elements by id or class.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={creating}>
        Creating custom events and listen for them
      </EntryBody.Subtitle>
      <EntryBody.Text>
        Creating a custom event is as easy as it gets. You simply have to use
        the constructor of an event in order to create one:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`const customEvent = new Event("customEvent");`}</EntryBody.Code>
      <EntryBody.Text>
        This is the basic implementation and is already a fully functional
        event. To make use of this new event we have to add a listener to it.
        Any HTML5 element can listen for the custom event. Even the body, the
        document or the window:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`document.addEventListener("customEvent", (e) => {console.log(e)});`}</EntryBody.Code>
      <EntryBody.Text>
        We are adding an event listener to the document. An important aspect is,
        that we have to put in the correct name of our custom event as first
        argument of the listener. The second argument is a callbackFunction that
        is called, if the event has been fired.
      </EntryBody.Text>
      <EntryBody.Text>
        Now that we have implemented the event and subscribed to it the only
        thing that is left to do is to fire the event. For that we can use an
        HTML5 element and use the function{" "}
        <EntryBody.Highlight>dispatchEvent(event)</EntryBody.Highlight>. So we
        can write the following to test if our event is fired:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`document.dispatchEvent(customEvent);`}</EntryBody.Code>
      <EntryBody.Text>
        We are telling the document to fire our custom event. An important note
        is, that we have to pass in the event object itself in order to work.
        Lets have a look what we are getting back from the event:
      </EntryBody.Text>
      <EntryBody.Code language="js">
        {`Event {
    isTrusted: false
    bubbles: false
    cancelBubble: false
    cancelable: false
    composed: false
    currentTarget: null
    defaultPrevented: false
    eventPhase: 0
    path: (2) [document, Window]
    returnValue: true
    srcElement: document
    target: document
    timeStamp: 1389
    type: "customEvent"
    [[Prototype]]: Event
}`}
      </EntryBody.Code>
      <EntryBody.Text>
        We are getting back information about the event. This is because we set
        the listener up and passed in an "e" which we are printing out aswell.
        This e stands for the information and is always sent when dispatching an
        event.
      </EntryBody.Text>
      <EntryBody.Text>
        So what exactly does all of the information inside of the event body
        mean? One part of the body is general information such as a timestamp or
        which path the event took. The other part of the information is in fact
        configurable. Lets have a closer look at the most important configurable
        options.
      </EntryBody.Text>
      <EntryBody.Text>
        The <EntryBody.Highlight>bubbles</EntryBody.Highlight> attribute stands
        for the ability for the event to "bubble" up the hierarchy in the DOM.
        This means that not only the children of the element that is triggering
        can receive the event but also the parent elements can receive it. The
        standard value is false.
      </EntryBody.Text>
      <EntryBody.Text>
        The attribute <EntryBody.Highlight>cancelable</EntryBody.Highlight>{" "}
        means, that we can cancel the event before it triggers elements that are
        subscribed to it. For example: We have a link to an extern webpage. We
        do not want the redirect to happen so we cancel the event.
      </EntryBody.Text>
      <EntryBody.Text>
        We can manage that by getting the event itself inside of the link
        element by using the event object, that is send with every dispatch of
        an event. Then we can say{" "}
        <EntryBody.Highlight>e.preventDefault()</EntryBody.Highlight> to cancel
        the event. In code this looks like this:
      </EntryBody.Text>
      <EntryBody.Code language="js">{`//adding the link to the document and setting it up
const a = document.createElement("a");
a.href = "https://google.com";
a.innerHTML = "google";
a.target = "_blank";
document.getElementById("body").appendChild(a);`}</EntryBody.Code>
      <EntryBody.Text>
        We can then define a function, that is called on click of the element:
      </EntryBody.Text>
      <EntryBody.Code language="js">{`a.onclick = (e) => handleClick(e);`}</EntryBody.Code>
      <EntryBody.Text>
        This little line of code means that, if we click on the element we
        forward the event object to a function that is called{" "}
        <EntryBody.Highlight>handleClick</EntryBody.Highlight>. This function
        looks like this:
      </EntryBody.Text>
      <EntryBody.Code language="js">{`const handleClick = (e) => {
  console.log(e); 
}`}</EntryBody.Code>
      <EntryBody.Text>
        Which at the moment just prints out the event we are triggering with the
        click and after the print the link redirects the user to the external
        page. But if we add{" "}
        <EntryBody.Highlight>e.preventDefautlt()</EntryBody.Highlight> the user
        will not be redirected.
      </EntryBody.Text>
      <EntryBody.Code language="js">{`const handleClick = (e) => {
  e.preventDefault();
}`}</EntryBody.Code>
      <EntryBody.Text>
        Check this example at{" "}
        <EntryBody.Link href="https://codepen.io/floerwerth/pen/abYdwwp">
          codepen
        </EntryBody.Link>
        . Try removing the canceling of the event and take a look at google. The
        standard value of <EntryBody.Highlight>cancelable</EntryBody.Highlight>{" "}
        is false.
      </EntryBody.Text>
      <EntryBody.Text>
        The last configurable attribute is{" "}
        <EntryBody.Highlight>composed</EntryBody.Highlight>, which is a bit
        complicated. There are elements, that are taking place inside of a so
        called shadow DOM. This elements can, of course, have also events. Just
        like the normal events these events could bubble up the shadow DOM, if
        we want to. <EntryBody.Highlight>composed</EntryBody.Highlight> handles
        the ability to bubble up in the shadow DOM. The standard value is false.
      </EntryBody.Text>
      <EntryBody.Text>
        If we want to configure our event we have to pass in an object as second
        argument, that sets our desired parameters to true. This can look like
        that:
      </EntryBody.Text>
      <EntryBody.Code language="js">{`const customEvent = new Event("customEvent", 
    {
        cancelable: true, 
        bubbles: true, 
        composed: true,
    });
}`}</EntryBody.Code>
      <EntryBody.Text>
        So we are setting up our event to be able to do everything a event can
        possible do. The last thing I want to talk about and is one of the most
        important arguments for custom events is custom data.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={custom}>
        Creating custom events to send data
      </EntryBody.Subtitle>
      <EntryBody.Text>
        We can attach custom data to the event by adding a attribute called{" "}
        <EntryBody.Highlight>detail</EntryBody.Highlight> which then is also
        another body with key-value pairs. This can look like so:
      </EntryBody.Text>
      <EntryBody.Code language="js">{`const customEvent = new CustomEvent("customEvent",
    {  bubbles: true, 
       detail: 
        {name="Florian"},
    });
}`}</EntryBody.Code>
      <EntryBody.Text>
        Please note, that we do not use the Event constructor anymore. We are
        using <EntryBody.Highlight>CustomEvent</EntryBody.Highlight> to create
        an event, that is capable of holding custom data.
      </EntryBody.Text>
      <EntryBody.Text>
        So if we detach the event and looking for the detail inside of the
        event, we are getting back the detail body with our defined key-value
        pairs:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`const customEvent = new CustomEvent("customEvent", { detail: { name: "Florian" }});
document.addEventListener("customEvent", (e) => {console.log(e.detail)});
document.dispatchEvent(customEvent);`}</EntryBody.Code>
      <EntryBody.Text>
        Inside of the console we can see the key-value pairs:
      </EntryBody.Text>
      <EntryBody.Code language="jsx">{`{ 
    age: 29
    name: "Florian" 
}`}</EntryBody.Code>
      <EntryBody.Text>
        Using custom events is very easy but very powerful. Custom events can be
        used to be able to do things within your webpage, that would otherwise
        not be possible.
      </EntryBody.Text>
    </EntryBody>
  );
}

export default CustomEvents;
