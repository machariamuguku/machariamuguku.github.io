import { useState, useEffect } from "react";

import { throttle } from "lodash";

/**
 * Creates an event to watch for scroll events
 * and if the scroll was at least a set number from zero
 * returns true
 * otherwise returns false
 *
 * @param {number} minimumScrollDown The minimum number of scrolls from the top before it first triggers
 * @param {number} throttleTime Time in milliseconds to throttle the function attached to the scroll event
 * @param {TimeRanges} delayTime Time in milliseconds to delay between changes
 * @returns {boolean} A boolean on whether the scroll was effected and valid
 */
export function useHideOnScrollDown({
  minimumScrollDown = 50,
  throttleTime = 250,
  delayTime = 250
}) {
  const [isScrollDownValid, setIsScrollDownValid] = useState(false);
  const [scrollPos, setScrollPos] = useState({
    prevScrollPos: 0,
    currentScrollPos: window.scrollY
  });

  useEffect(() => {
    function handleScroll() {
      // get current scrolled position in number
      let currentScrollPosition = window.scrollY;

      // set prev and current scrolled top space
      setScrollPos((prevState) => ({
        prevScrollPos: prevState.currentScrollPos,
        currentScrollPos: currentScrollPosition
      }));

      // if scroll direction is downwards
      const isScrolledDown =
        scrollPos.currentScrollPos > scrollPos.prevScrollPos;
      // if you've scrolled down a bit from the top (don't hide when at the top)
      const isMinimumScrolled = scrollPos.currentScrollPos > minimumScrollDown;

      // delay
      setTimeout(() => {
        setIsScrollDownValid(isScrolledDown && isMinimumScrolled);
      }, delayTime);
    }

    // throttle the fn for 250ms
    const handleScrollThrottled = throttle(handleScroll, throttleTime);

    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [scrollPos, delayTime, minimumScrollDown, throttleTime]);
  return isScrollDownValid;
}
