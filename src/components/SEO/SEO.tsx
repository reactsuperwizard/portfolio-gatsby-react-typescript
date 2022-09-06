import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const Seo: React.FC<SeoProps> = ({
  title = "",
  description = "",
  article = false,
  image = "",
}) => {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: "en" }}
    >
      <meta name="author" content="Grigore Budac" />
      <meta name="description" content={seo.description} />

      {/* Facebook Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />

      {/* Twitter Open Graph */}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />

      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {(article ? true : null) && <meta property="og:type" content="article" />}

      <title>{seo.title}</title>
    </Helmet>
  );
};

export { Seo };

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`;
