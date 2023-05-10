import React from "react";
import copy from "copy-to-clipboard";
import ClipboardIcon from "../Clipboard/svg/clipboard";
import SuccessIcon from "../Clipboard/svg/success-mark";

export const useCopytoClipboard = (resetInterval = null) => {
  const [isCopied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback((text) => {
    if (typeof text == "string" || typeof text == "number") {
      copy(text.toString());
      setCopied(true);
    } else {
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
      setCopied(false);
    }
  }, []);

  React.useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, handleCopy]);

  return [isCopied, handleCopy];
};
