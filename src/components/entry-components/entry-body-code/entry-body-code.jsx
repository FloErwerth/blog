import React from "react";
import "./entry-body-code.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
function EntryBodyCode(props) {
  return (
    <div className="entry-body-code">
      <SyntaxHighlighter
        customStyle={{ borderRadius: "5px", width: "100%", height: "100%" }}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
        language={props.language}
        style={tomorrowNightBright}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
}

export default EntryBodyCode;
