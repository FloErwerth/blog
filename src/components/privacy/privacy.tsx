import React from "react";
import {getSvg} from "../../media/svgs";
import "./privacy.scss";

const privacy = () => {
  return (
    <div className="privacy-container">
      <img
        style={{ width: "100px" }}
        src={getSvg("adsense")}
        alt="google adsense logo"
      ></img>
      <p>
        This website is using personalized ads (Google AdSense). Google and
        other third party vendors using cookies to serve ads to users visiting
        this or other websites.
      </p>
      <button>Learn more</button>
      <p>
        Google's use of advertising cookies enables it and its partners to serve
        ads to the users of this website based on their visit to this site
        and/or other sites on the Internet.
      </p>
      <p>
        To opt out of personalized ads you can visit{" "}
        <a href="https://aboutads.info">www.aboutads.info</a>
      </p>
      <p>
        For further information please visit{" "}
        <a href="https://policies.google.com/privacy?hl=en-US">
          https://policies.google.com
        </a>
      </p>
    </div>
  );
};

export default privacy;
