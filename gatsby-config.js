const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://grigorebudac.com/",
    title: "Grigore Budac",
    titleTemplate: "%s · Grigore Budac",
    description:
      "Front-end developer specialized in creating sleek and premium user interfaces with the help of React.",
    image: "/icon.png",
    url: "https://grigorebudac.com",
    twitterUsername: "@grigorebudac",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [path.join(__dirname, "libs")],
        "@": path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-RHEMCN5DLJ"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "avatars",
        path: "./src/assets/images/avatars",
      },
      __key: "avatars",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "companies",
        path: "./src/assets/images/companies",
      },
      __key: "companies",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "skills",
        path: "./src/assets/images/skills",
      },
      __key: "skills",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/assets/images/projects",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "clients",
        path: "./src/assets/images/clients",
      },
      __key: "clients",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "case-studies",
        path: `${__dirname}/src/case-studies`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Manrope",
            weights: ["400", "600", "700"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 490,
      },
    },
  ],
};
