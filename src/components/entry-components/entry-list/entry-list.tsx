import * as React from "react";
import {PropsWithChildren} from "react";

function EntryList(props: PropsWithChildren) {
  return <ul style={{ marginBottom: "60px" }}>{props.children}</ul>;
}

export default EntryList;
