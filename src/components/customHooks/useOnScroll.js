import { useState, useEffect } from "react";

import { throttle } from "lodash";

/**
 * Watches for scroll down events of at least a set minimum scroll number
 * if scroll was down
 * and for at least the set minimum number it returns true
 * otherwise returns false
 *
 * @param {number} minimumScroll The minimum number to scroll from the top before it first triggers
 * @param {number} throttleTime Time in milliseconds to throttle the function attached to the scroll event
 * @param {TimeRanges} delayTime Time in milliseconds to delay between firing and change
 * @returns {boolean} A boolean on whether the scroll was effected and valid
 */

export function useOnScroll({
  minimumScroll = 50,
  throttleTime = 250,
  delayTime = 250
}) {
  const [isScrollValid, setIsScrollValid] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // get current scrolled position in number
      let currentScrollPosition = window.scrollY;

      // if you've scrolled for at least the set minimum scroll number
      const isMinimumScrolled = currentScrollPosition > minimumScroll;

      // delay
      setTimeout(() => {
        setIsScrollValid(isMinimumScrolled);
      }, delayTime);
    }

    // throttle the fn for 250ms
    const handleScrollThrottled = throttle(handleScroll, throttleTime);

    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [delayTime, minimumScroll, throttleTime]);
  return isScrollValid;
}
