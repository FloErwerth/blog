import React from "react";
import "./burger-menu.scss";

function BurgerMenu(props) {
  return (
    <div className="burger-menu" onClick={props.handleBurgerMenu}>
      <svg width="40" height="30">
        <line
          style={{
            fill: props.dark ? "#c8c8ff" : "rgb(15, 19, 15)",
            stroke: props.dark ? "#c8c8ff" : "rgb(15, 19, 15)",
            strokeWidth: "3px",
            strokeLinecap: "round",
            transform: props.collapsed
              ? "rotate(0deg)"
              : "translateX(10px) translateY(-4.5px) rotate(45deg)",
            transition: "0.5s",
          }}
          x1={5}
          x2={30}
          y1={10}
          y2={10}
        />
        <line
          style={{
            fill: props.dark ? "#c8c8ff" : "rgb(15, 19, 15)",
            stroke: props.dark ? "#c8c8ff" : "rgb(15, 19, 15)",
            strokeWidth: "3px",
            strokeLinecap: "round",
            transform: props.collapsed
              ? "rotate(0deg)"
              : "translateX(-11px) translateY(13px) rotate(-45deg)",
            transition: "0.5s",
          }}
          x1={5}
          x2={30}
          y1={20}
          y2={20}
        />
      </svg>
    </div>
  );
}

export default BurgerMenu;
