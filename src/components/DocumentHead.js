/* eslint-disable camelcase */
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
const DocumentHead = ({ title, description, image }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(graphql `
            query {
                site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl
                    defaultImage: image
                    
                    }
                }
            }
        `);
    const { defaultTitle, defaultDescription, siteUrl, defaultImage, } = site.siteMetadata;
    const siteMetadata = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };
    return (React.createElement(Helmet, { title: title, defaultTitle: siteMetadata.title, titleTemplate: `%s | ${defaultTitle}` },
        React.createElement("html", { lang: "en" }),
        React.createElement("meta", { name: "description", content: siteMetadata.description }),
        React.createElement("meta", { name: "image", content: siteMetadata.image }),
        React.createElement("meta", { property: "og:title", content: siteMetadata.title }),
        React.createElement("meta", { property: "og:description", content: siteMetadata.description }),
        React.createElement("meta", { property: "og:image", content: siteMetadata.image }),
        React.createElement("meta", { property: "og:url", content: siteMetadata.url }),
        React.createElement("meta", { property: "og:type", content: "website" }),
        React.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
        React.createElement("meta", { name: "twitter:title", content: siteMetadata.title }),
        React.createElement("meta", { name: "twitter:description", content: siteMetadata.description }),
        React.createElement("meta", { name: "twitter:image", content: siteMetadata.image }),
        React.createElement("meta", { name: "google-site-verification", content: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" })));
};
export default DocumentHead;
