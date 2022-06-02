import React, { useEffect, useState } from "react";
import "./logo.scss";

function Logo(props) {
  const [text2, setText2] = useState("F");
  const [text1, setText1] = useState("E");
  const [isHovering, setIsHovering] = useState(false);

  const showText = () => {
    const newText2 = ["F", "l", "o", "r", "i", "a", "n"];
    const newText1 = ["E", "r", "w", "e", "r", "t", "h"];
    const velocity = (0.5 / 15) * 4;
    var string1 = text1;
    var string2 = text2;
    const addString1 = (index, text) => {
      setTimeout(() => {
        string1 += text;
        setText1(string1);
      }, isHovering * i * velocity * 50);
    };
    const addString2 = (index, text) => {
      setTimeout(() => {
        string2 += text;
        setText2(string2);
      }, isHovering * i * velocity * 50);
    };
    for (var i = 1; i < newText2.length; i++) {
      if (i < newText1.length) {
        addString1(i, newText1[i]);
      }
      addString2(i + newText1.length, newText2[i]);
    }
  };

  const hideText = () => {
    const velocity = (0.5 / 15) * 5;
    var string1 = text1;
    var string2 = text2;
    const removeCharacter1 = () => {
      setTimeout(() => {
        string1 = string1.slice(0, string1.length - 1);
        setText1(string1);
      }, !isHovering * i * velocity * 50);
    };
    const removeCharacter2 = () => {
      setTimeout(() => {
        string2 = string2.slice(0, string2.length - 1);
        setText2(string2);
      }, !isHovering * i * velocity * 50);
    };
    for (var i = 0; i < string2.length - 1; i++) {
      if (i < string1.length - 1) {
        removeCharacter1(i);
      }
      removeCharacter2(i);
    }
  };

  const changeText = () => {
    if (!isHovering) {
      hideText();
      return;
    }
    showText();
  };

  useEffect(() => {
    changeText();
    if (!isHovering) {
      setTimeout(() => {
        if (text1.length > 1) {
          setText1("E");
        }
        if (text2.length > 1) {
          setText2("F");
        }
      }, 50);
    }
  }, [isHovering]);

  return (
    <svg
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className={props.dark ? "logo" : "logo  dark"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 250"
    >
      <path
        d="M19.2,61L19.2,61c5.5,0,9.9,4.4,9.9,9.9v141.7c0,5.5-4.4,9.9-9.9,9.9h0c-5.5,0-9.9-4.4-9.9-9.9V70.9
	    C9.3,65.4,13.8,61,19.2,61z"
      />
      <path d="M19.2,61h36.9c5.5,0,9.9,4.4,9.9,9.9v0c0,5.5-4.4,9.9-9.9,9.9H19.2c-5.5,0-9.9-4.4-9.9-9.9v0C9.3,65.4,13.8,61,19.2,61z" />
      <path
        d="M19.2,202.6h36.9c5.5,0,9.9,4.4,9.9,9.9v0c0,5.5-4.4,9.9-9.9,9.9H19.2c-5.5,0-9.9-4.4-9.9-9.9v0
	C9.3,207.1,13.8,202.6,19.2,202.6z"
      />
      <path
        className="logo-bracket-right"
        d="M263.7,222.3L263.7,222.3c-5.5,0-9.9-4.4-9.9-9.9V70.7c0-5.5,4.4-9.9,9.9-9.9h0c5.5,0,9.9,4.4,9.9,9.9v141.7
	C273.6,217.8,269.2,222.3,263.7,222.3z"
      />
      <path
        className="logo-bracket-right"
        d="M263.7,222.3h-36.9c-5.5,0-9.9-4.4-9.9-9.9v0c0-5.5,4.4-9.9,9.9-9.9h36.9c5.5,0,9.9,4.4,9.9,9.9v0
	C273.6,217.8,269.2,222.3,263.7,222.3z"
      />
      <path
        className="logo-bracket-right"
        d="M263.7,80.6h-36.9c-5.5,0-9.9-4.4-9.9-9.9v0c0-5.5,4.4-9.9,9.9-9.9h36.9c5.5,0,9.9,4.4,9.9,9.9v0
	C273.6,76.2,269.2,80.6,263.7,80.6z"
      />
      <text className="cls-2 logo-text" transform="translate(102.15 168.61)">
        {text1 + text2}
      </text>
    </svg>
  );
}

export default Logo;
