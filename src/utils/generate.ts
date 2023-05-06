import {
  Paragraph,
  Table,
  TableRow,
  TableCell,
  ImageRun,
  TextRun,
  HeadingLevel,
} from "docx";

import type {
  TextParagraphItem,
  TableParagraphItem,
  ImageParagraphItem,
  HeadingParagraphItem,
  ParagraphItem,
} from "@type/index";

import { base64DecToArr } from "@util/base64";

function parseText(item: TextParagraphItem) {
  if (item.children?.length) {
    const children = item.children.map((item) => new TextRun(item));
    return new Paragraph({
      children,
    });
  } else if (item.value) {
    return new Paragraph(item.value);
  }
  return null;
}

function parseTable(item: TableParagraphItem) {
  if (!item.children?.length || !item.children[0]?.length) {
    return null;
  }
  const rows = [];
  for (let row of item.children) {
    const children = [];
    for (let cell of row) {
      children.push(
        new TableCell({
          children: [new Paragraph(cell)],
        })
      );
    }
    rows.push(new TableRow({ children }));
  }
  return new Table({ rows });
}

function parseImage(item: ImageParagraphItem) {
  if (!item.value) return null;

  return new Paragraph({
    children: [
      new ImageRun({
        data: base64DecToArr(item.value),
        transformation: {
          width: item.width || 200,
          height: item.height || 100,
        },
      }),
    ],
  });
}

function parseHeading(item: HeadingParagraphItem) {
  if (!item.value) {
    return null;
  }
  let heading;
  switch (item.size) {
    case "h1":
      heading = HeadingLevel.HEADING_1;
      break;
    case "h2":
      heading = HeadingLevel.HEADING_2;
      break;
    case "h3":
      heading = HeadingLevel.HEADING_3;
      break;
    case "h4":
      heading = HeadingLevel.HEADING_4;
      break;
    case "h5":
      heading = HeadingLevel.HEADING_5;
      break;
    case "h6":
      heading = HeadingLevel.HEADING_6;
      break;
  }
  return new Paragraph({
    text: item.value,
    heading,
  });
}

function parseJsonToOption(arr: ParagraphItem[]) {
  if (!arr || !arr.length) return null;

  const paragraphList = [];
  for (let item of arr) {
    let p = null;
    switch (item.type) {
      case "text":
        p = parseText(item);
        break;
      case "table":
        p = parseTable(item);
        break;
      case "image":
        p = parseImage(item);
        break;
      case "heading":
        p = parseHeading(item);
        break;
    }
    if (p) {
      paragraphList.push(p);
    }
  }

  return {
    sections: [{ children: paragraphList }],
  };
}

export { parseJsonToOption };
