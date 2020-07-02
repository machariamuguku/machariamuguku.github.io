import { useState, useEffect } from "react";

export const useMediaQuery = (mediaQuery) => {
  // check if windows object is undefined to avoid build-time error (not available to nodejs runtime)
  const [matchesMediaQuery, setMatchesMediaQuery] = useState(() =>
    typeof window !== `undefined`
      ? !!window.matchMedia(mediaQuery).matches
      : false
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () =>
      setMatchesMediaQuery(!!mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery, setMatchesMediaQuery]);

  return matchesMediaQuery;
};
