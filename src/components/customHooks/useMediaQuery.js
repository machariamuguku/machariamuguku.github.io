import { useState, useEffect } from "react";

export const useMediaQuery = (mediaQuery) => {
  // check if windows is undefined to avoid build-time error
  const [matchesMediaQuery, setMatchesMediaQuery] =
    typeof window !== `undefined`
      ? useState(!!window.matchMedia(mediaQuery).matches)
      : [];

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () =>
      setMatchesMediaQuery(!!mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery]);

  return matchesMediaQuery;
};
