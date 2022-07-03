import React, { useRef } from "react";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryHeader from "../../entry-components/entry-header/entry-header";
function UsingCookies() {
  const top = useRef(null);
  const what = useRef(null);
  const abuse = useRef(null);
  const implementing = useRef(null);
  const technical = useRef(null);
  return (
    <EntryBody reference={top}>
      <EntryHeader
        description="I had to learn using cookies. Now I want you tell what I have learned about the usage of cookies."
        shortDescription="React Developer @ Check24"
        title="Using cookies to store simple data"
        date="01.07.2022"
        author="Florian Erwerth"
        canonical="/using-cookies"
        time="7"
      />
      <EntryBody.Text>
        You will learn the following things about cookies:
      </EntryBody.Text>
      <EntryBody.List>
        <EntryBody.ListElement reference={what}>
          What are cookies and how are they used?
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={abuse}>
          Abusing cookies
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={technical}>
          Technical information of the implementation of cookies
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={implementing}>
          Implementing cookies for the dark mode
        </EntryBody.ListElement>
      </EntryBody.List>
      <EntryBody.Text>
        Please note, that this entry only describes cookies used in javascript.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={what}>
        What are cookies and how are they used?
      </EntryBody.Subtitle>
      <EntryBody.Text>
        Every user of the internet knows cookies. Cookies are sometimes a bit of
        a pain, when visiting a new website, because the user has to consent,
        that cookies are stored.
      </EntryBody.Text>
      <EntryBody.Text>
        Many people think that cookies are a bad thing, but essentially they are
        only used to{" "}
        <EntryBody.Highlight>store simple data</EntryBody.Highlight> in form of
        key value pairs with optional parameters.
      </EntryBody.Text>
      <EntryBody.Text>
        For example cookies are used in online shops to store the goods in the
        shopping card. This allows the user to switch sites, inside of the shop
        or even outside of it, and still have the articles inside of the
        shopping card.
      </EntryBody.Text>
      <EntryBody.Text>
        Another example is to temporarily store important data in case of a
        connection issue to a server.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={abuse}>Abusing cookies</EntryBody.Subtitle>
      <EntryBody.Text>
        To identify a user and giving him the correct cookies (data) there is an
        option to give the cookie an unique identifier.
      </EntryBody.Text>
      <EntryBody.Text>
        This fact can be abused to create a user profile of a user on a webpage.
        This can lead to personalized advertisement or advertisement mails.
      </EntryBody.Text>
      <EntryBody.Text>
        A webpage can only store the data of a user, if the user is on the
        webpage. Sounds silly, but this hinders the creation of a usage profile
        of the user from the webpage.
      </EntryBody.Text>
      <EntryBody.Text>
        This leads to the usage of third party providers, that do exactly that.
        They gather cookies, provided from different webpages, create a user
        profile from it and inject the data inside of the cookies of a user.
        This is called{" "}
        <EntryBody.Highlight>Third Party Cookie</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        Because of that the providers of a webpage have to gather the consent of
        a user to use third party cookies. Keep that in mind when consenting to
        a cookie.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={technical}>
        Technical information of the implementation of cookies
      </EntryBody.Subtitle>
      <EntryBody.Text>
        The only reason I want to store cookies is the current state of the dark
        mode. I want to make sure, that every time the user visits my blog the
        correct state of the dark mode will be enabled.
      </EntryBody.Text>
      <EntryBody.Text>
        A cookie has the following four parts:
        <ul>
          <li>data - the data that is stored in with the cookie</li>
          <li>expires - the point of time the cookie is valid</li>
          <li>max-age - the maximum timespan the cookie is valid</li>
          <li>path - the part of the webpage the cookie is valid</li>
        </ul>
      </EntryBody.Text>
      <EntryBody.Text>
        Basically all these parts are optional for the cookie, but if no max-age
        or expiration is set, the cookie will be session only.
      </EntryBody.Text>
      <EntryBody.Text>
        There are other parameters, that can be used to signal the browser
        different facts about the cookie:
        <ul>
          <li>
            secure - the cookie will only be transmitted with a secure
            connection
          </li>
          <li>
            samesite - prevents the browser from sending the cookie with
            cross-site requests
          </li>
        </ul>
      </EntryBody.Text>
      <EntryBody.Subtitle reference={implementing}>
        Implementing the cookie for dark mode
      </EntryBody.Subtitle>
      <EntryBody.Text>
        An example of a cookie is the following:
        <EntryBody.Code language="javascript">
          {`const cookie = "name=Florian;expires=Fri, 31 Dec 9999 23:59:59 GMT;max-age=86400000;path=/using-cookies"`}
        </EntryBody.Code>
      </EntryBody.Text>
      <EntryBody.Text>
        That means that we store the name Florian, which expires on Fri, 31 Dec
        9999 at 23:59:59 GMT and has a maximum age of 1000 years. The cookie
        will be only valid inside of this section of the blog, specified by the
        path relative to the root.
      </EntryBody.Text>
      <EntryBody.Text>
        In our case we need to only set the data and the max-age, because we do
        not need a specific path and also no specific date, the cookie expires.
      </EntryBody.Text>
      <EntryBody.Text>
        We want to store the cookie, if the dark mode toggle was clicked. Since
        the dark mode is stored via a state in React, we define a useEffect
        method that fires a method to store the cookie, if the state has
        changed:
      </EntryBody.Text>
      <EntryBody.Code language="javscript">{`useEffect() => {
    storeCookie();
  }, [isDark]);`}</EntryBody.Code>
      <EntryBody.Text>The method looks like the following:</EntryBody.Text>
      <EntryBody.Code language="javscript">{`function storeCookie(isDark) {
    var cookie = "dark=" + isDark + ";";
    cookie += "expires=31-Dec-9999 00:00:00 GMT;";
    document.cookie = cookie;
  };`}</EntryBody.Code>
      <EntryBody.Text>
        We pass in the current state and creating the cookie. We set the data to
        the current dark mode state by adding up the string. Now we set the
        expiration date by also adding the string to the cookie. Now we store
        the cookie with{" "}
        <EntryBody.Highlight>document.cookie = cookie</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        The only thing we now need to do is to check if the dark mode is enabled
        or not. We can get the value by using:
      </EntryBody.Text>
      <EntryBody.Text>The method looks like the following:</EntryBody.Text>
      <EntryBody.Code language="javscript">{`function receiveCookie() {
        try {
            const isDark = document.cookie.split("=")[0] === "true";
            return isDark;
        }
        catch(e) {
            //cookie not set or not readable
            return false;
        }
      }`}</EntryBody.Code>
      <EntryBody.Text>
        When we are calling the{" "}
        <EntryBody.Highlight>document.cookie</EntryBody.Highlight> We are
        getting a key value pair, that is seperated by a =. We can split the
        string with the split method and using the second word, that was created
        with the split method. That is a string with a boolean value. We can
        convert the boolean by checking if the string is strongly equal to the
        string "true".
      </EntryBody.Text>
      <EntryBody.Text>
        Now that we have a value, we can set this value, if the page is loaded.
        As mentioned in the previous blog post{" "}
        <EntryBody.Link href="/#/how-I-managed-darkmode">
          How I created the dark mode toggle
        </EntryBody.Link>{" "}
        I have implemented a attribute driven dark mode. A CSS attribute changes
        its value, if the body has the attribute [dark] with it. This looks like
        this:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`body[dark] {
        //here are the elements that are affected by the dark attribute
      }`}</EntryBody.Code>
      <EntryBody.Text>
        Setting an attribute without a boolean value is only possible, if we
        toggle the attribute. Since we are receiving a boolean value, it is more
        convenient to set the attribute to this boolean value.
      </EntryBody.Text>
      <EntryBody.Text>
        To make this work we only have to change a little thing in the CSS:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`body[dark="true"] {
        //here are the elements that are affected by the dark attribute
      }`}</EntryBody.Code>
      <EntryBody.Text>
        That way we are now able to set the attribute, if we are launching the
        index.js file, which is the first file of the rendering process:
      </EntryBody.Text>
      <EntryBody.Code language="css">{`document.getElementById("body").setAttribute("dark", receiveCookie())`}</EntryBody.Code>
      <EntryBody.Text>
        Now if we launch the page, when previously had dark mode enabled, the
        dark mode is enabled again. Great!
      </EntryBody.Text>
    </EntryBody>
  );
}

export default UsingCookies;
