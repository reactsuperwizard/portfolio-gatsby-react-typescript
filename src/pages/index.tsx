import React from "react";

import Layout from "./layout";
import Home from "@/components/Home/home";
import { Seo } from "@/components/SEO";

const Index: React.FC = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Front-end developer specialized in creating sleek and premium user interfaces with the help of React."
      />
      <Home />
    </Layout>
  );
};

export default Index;
