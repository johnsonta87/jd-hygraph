"use client";

import { useEffect, useState } from "react";

export function useDetectMobile() {
  const windowInnerWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? windowInnerWidth : 0);

  function handleWindowSizeChange() {
    setWidth(windowInnerWidth);
  }

  useEffect(() => {
    if(typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width <= 768;

  return isMobile;
}
