import React from "react";

// context provider
import { MenuContextProvider } from "../components/menuContext";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <MenuContextProvider>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </MenuContextProvider>
);

export default NotFoundPage;
