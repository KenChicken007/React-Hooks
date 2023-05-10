import React from "react";

export default function usePageBottom() {
  const [Bottom, setBottom] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      setBottom(Bottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return Bottom;
}
