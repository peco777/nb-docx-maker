// import * as fs from "fs";
import { Document, Packer } from "docx";

import { parseJsonToOption } from "./generate";

const exportBuffer = (params: ParagraphItem[]) => {
  const option = parseJsonToOption(params);
  if (!option) {
    return null;
  }
  const doc = new Document(option);

  // is browser runtime
  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    return Packer.toBlob(doc);
  }
  // is node runtime
  else if (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  ) {
    return Packer.toBuffer(doc);
  }
};

export { exportBuffer };
