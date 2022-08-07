import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";
import cshtml from "react-syntax-highlighter/dist/cjs/languages/prism/icon";

export const theme = a11yDark;

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("sass", sass);
SyntaxHighlighter.registerLanguage("html", cshtml);

export default SyntaxHighlighter;