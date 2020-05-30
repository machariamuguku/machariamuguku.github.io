import { useState, useEffect } from "react";

export const useMediaQuery = (mediaQuery) => {
  const [matchesMediaQuery, setMatchesMediaQuery] = useState(
    !!window.matchMedia(mediaQuery).matches
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
  }, [mediaQuery]);

  return matchesMediaQuery;
};
