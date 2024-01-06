"use client";

import { useEffect, useState } from "react";

export function useDetectMobile() {
  const [width, setWidth] = useState<number>(window ? window.innerWidth : 0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return isMobile;
}
