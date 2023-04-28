type ParagraphType = "text" | "table" | "image" | "heading";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextParagraphItem {
  type: "text";
  value?: string;
  children?: string[];
}

interface TableParagraphItem {
  type: "table";
  children: string[][];
}

interface ImageParagraphItem {
  type: "image";
  value: string;
  width?: number;
  height?: number;
}

interface HeadingParagraphItem {
  type: "heading";
  size: Heading;
  value: string;
}

type ParagraphItem =
  | TextParagraphItem
  | TableParagraphItem
  | ImageParagraphItem
  | HeadingParagraphItem;


