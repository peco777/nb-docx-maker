declare function exportBuffer(
  params: ParagraphItem[]
): Promise<Buffer> | Promise<Blob> | null;

export { exportBuffer };

type ParagraphType = "text" | "table" | "image" | "heading";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextParagraphItem {
  type: "text";
  value?: string;
  children?: string[];
}

export interface TableParagraphItem {
  type: "table";
  children: string[][];
}

export interface ImageParagraphItem {
  type: "image";
  value: string;
  width?: number;
  height?: number;
}

export interface HeadingParagraphItem {
  type: "heading";
  size: Heading;
  value: string;
}

export type ParagraphItem =
  | TextParagraphItem
  | TableParagraphItem
  | ImageParagraphItem
  | HeadingParagraphItem;
