import { Document, Packer } from "docx";

import { parseJsonToOption } from "@util/generate";
import type { ParagraphItem } from "@type/index";

const exportBuffer = (params: ParagraphItem[]) => {
  const option = parseJsonToOption(params);
  if (!option) {
    return null;
  }
  const doc = new Document(option);

  // is browser runtime
  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    console.log("is browser runtime");
    return Packer.toBlob(doc);
  }
  // is node runtime
  else if (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  ) {
    console.log("is node runtime");
    return Packer.toBuffer(doc);
  }
};

export { exportBuffer };
