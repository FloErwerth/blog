import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
export const theme = require("react-syntax-highlighter/dist/esm/styles/prism");


import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";
import cshtml from "react-syntax-highlighter/dist/cjs/languages/prism/icon";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("sass", sass);
SyntaxHighlighter.registerLanguage("html", cshtml);

export default SyntaxHighlighter;