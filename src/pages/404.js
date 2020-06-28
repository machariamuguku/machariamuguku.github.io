import React from "react";

// context provider
import { MenuContextProvider } from "../components/menuContext";
import { SEO } from "../components/seo";

const NotFoundPage = () => (
  <MenuContextProvider>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MenuContextProvider>
);

export default NotFoundPage;
