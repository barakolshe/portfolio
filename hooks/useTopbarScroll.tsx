"use client";
import React from "react";
/**
 * useScrollingUp
 * @returns {boolean}
 */

const useTopbarScroll = () => {
  //if it is SSR then check you are now on the client and window object is available
  const [prevScroll, setPrevScroll] = React.useState(0);
  const [scrollingUp, setScrollingUp] = React.useState(true);

  const handleScroll = React.useCallback(() => {
    if (typeof window !== "undefined") {
      const currScroll = window.scrollY;
      const isScrolled = prevScroll > currScroll;
      if (prevScroll !== currScroll) {
        setScrollingUp(isScrolled);
        setPrevScroll(currScroll);
      }
    }
  }, [prevScroll]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const onTop = typeof window !== "undefined" ? window.scrollY < 5 : true;

  return {
    scrollingUp,
    onTop: onTop,
  };
};

export default useTopbarScroll;
