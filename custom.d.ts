
declare module '*.svg' {
  import * as React from "react";
  const content: string;
  export const ReactComponent: React.FC<React.ElementType>;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
