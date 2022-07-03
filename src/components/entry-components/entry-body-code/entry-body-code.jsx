import React from "react";
import "./entry-body-code.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  css,
  javascript,
} from "react-syntax-highlighter/dist/esm/languages/prism";
import {
  solarizedDark,
  solarizedLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

function EntryBodyCode(props) {
  SyntaxHighlighter.registerLanguage("css", css);
  SyntaxHighlighter.registerLanguage("javascript", javascript);
  return (
    <div className="entry-body-code">
      <SyntaxHighlighter
        customStyle={{ borderRadius: "5px", width: "100%", height: "100%" }}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={false}
        language={props.lanugage}
        style={solarizedDark}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
}

export default EntryBodyCode;
