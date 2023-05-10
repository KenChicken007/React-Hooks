import React from "react";
import ClipboardIcon from "../Clipboard/svg/clipboard.svg";
import SuccessIcon from "../Clipboard/svg/success-mark.svg";
import { useCopytoClipboard } from "./useCopytoClipboard";

export default function Copy({ code }) {
  const [isCopied, handleCopy] = useCopytoClipboard(3000);

  return (
    <button onClick={() => handleCopy(code)}>
      {isCopied ? <SuccessIcon /> : <ClipboardIcon />}
    </button>
  );
}
