import React from "react";
import "./entry-body-code.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  jsx,
  javascript,
  css,
  sass,
  cshtml,
} from "react-syntax-highlighter/dist/esm/languages/prism";
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("sass", sass);
SyntaxHighlighter.registerLanguage("html", cshtml);
function EntryBodyCode(props) {
  return (
    <div className="entry-body-code">
      <SyntaxHighlighter
        customStyle={{ borderRadius: "5px", height: "100%" }}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={false}
        language={props.language}
        style={a11yDark}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  );
}

export default EntryBodyCode;
