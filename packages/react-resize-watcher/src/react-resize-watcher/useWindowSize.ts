import { useEffect, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const callback = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
  }, []);

  return { width, height };
}
