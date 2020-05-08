import React from "react";

// context provider
import { MenuContextProvider } from "../components/menuContext";

// components
import ArtDirectedFullBackground from "../components/ArtDirectedFullBackground";
import Layout from "../components/layout";
import { LandingPageLayout } from "../components/landingPageLayout";

const IndexPage = () => (
  <ArtDirectedFullBackground>
    <MenuContextProvider>
      <Layout>
        <LandingPageLayout />
      </Layout>
    </MenuContextProvider>
  </ArtDirectedFullBackground>
);

export default IndexPage;
