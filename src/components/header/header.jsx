import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import ThemeSwitcher from "./theme-switcher/theme-switcher";
import HeaderLink from "./link/header-link";
import BurgerMenu from "./burger-menu/burger-menu";
import SocialLogo from "../entry-components/entry-header/social-logo/social-logo";

function Header(props) {
  const [swipe, setSwipe] = useState(false);
  const [position, setPosition] = useState(0);
  const header = useRef(null);
  const [initialY, setInitialY] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  const themeChangedEvent = new Event("theme", {
    bubbles: true,
    composed: true,
  });

  useEffect(() => {
    window.onload = handleResize;
    window.onresize = handleResize;
    window.ondeviceorientation = handleResize;
  });

  useEffect(() => {
    if (!swipe && isSmall) {
      document
        .getElementById("header")
        .classList.add("header-transition-return");
      setTimeout(() => {
        document
          .getElementById("header")
          .classList.remove("header-transition-return");
      }, 1000);
      setPosition(-40);
    }
  }, [swipe, isSmall]);

  useEffect(() => {
    if (parseFloat(header.current.style.top) > 0) {
      handleClick();
      setSwipe(false);
    }
  }, [position]);

  const handleResize = () => {
    const isSmall = window.screen.width <= 1200;
    setIsSmall(isSmall);
    if (isSmall) {
      setPosition(-40);
    } else {
      setPosition(0);
    }
  };

  const handleClick = () => {
    document.getElementById("header").dispatchEvent(themeChangedEvent);
  };

  const handleDragStart = (e) => {
    setInitialY(
      e.targetTouches[0].clientY - document.getElementById("header").offsetTop
    );
    setSwipe(true);
  };

  const handleDrag = (e) => {
    if (swipe) {
      setPosition(e.targetTouches[0].clientY - initialY);
    }
  };

  const handleDragEnd = () => {
    setSwipe(false);
  };

  return (
    <div
      ref={header}
      id="header"
      className="header"
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDrag}
      style={{ top: position + "px" }}
    >
      <ThemeSwitcher onClick={handleClick} />
      <div className={"header-swipe-text"}>Swipe to toggle darkmode</div>
      <div className="header-links">
        <SocialLogo
          logo="instagram"
          width="30"
          height="30"
          link="https://www.instagram.com/floerwerth/"
        />
        <SocialLogo
          logo="twitter"
          width="30"
          height="30"
          link="https://mobile.twitter.com/florirwrt"
        />
        <SocialLogo
          logo="github"
          width="30"
          height="30"
          useFilter
          link="https://github.com/FloErwerth"
        />
      </div>
    </div>
  );
}

export default Header;
