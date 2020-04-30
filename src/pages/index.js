import React from "react";

// context provider
import { MenuContextProvider } from "../components/menuContext";

// components
import Layout from "../components/layout";
import { LandingPageLayout } from "../components/landingPageLayout";

const IndexPage = () => (
  <MenuContextProvider>
    <Layout>
      <LandingPageLayout />
    </Layout>
  </MenuContextProvider>
);

export default IndexPage;
