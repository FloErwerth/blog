import * as React from "react";
import {ReactElement} from "react";

interface Props {
  children: ReactElement
}

function EntryList(props: Props) {
  return <ul style={{ marginBottom: "60px" }}>{props.children}</ul>;
}

export default EntryList;
