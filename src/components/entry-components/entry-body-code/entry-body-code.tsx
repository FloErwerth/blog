import * as  React from "react";
import "./entry-body-code.scss";
import SyntaxHighlighter from "./languages";
import {theme} from "./languages";

export interface EntryBodyCodeProps {
  language: string;
  children: string,
}

function EntryBodyCode(props: EntryBodyCodeProps) {
  return (
    <div className="entry-body-code">
      <SyntaxHighlighter
        customStyle={{ borderRadius: "5px", height: "100%" }}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={false}
        language={props.language}
        style={theme}
        children={props.children}
      />
    </div>
  );
}

export default EntryBodyCode;
