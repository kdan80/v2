/* eslint-disable camelcase */
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

interface IProps {
    title: string,
    description: string,
    image: string
}

const DocumentHead: React.FC<IProps> = ({ title, description, image }) => {
    const { pathname } = useLocation();

    const { site } = useStaticQuery(
        graphql`
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
        `,
    );

    const {
      defaultTitle,
      defaultDescription,
      siteUrl,
      defaultImage,
    } = site.siteMetadata;

    const siteMetadata = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image || defaultImage}`,
      url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={title} defaultTitle={siteMetadata.title} titleTemplate={`%s | ${defaultTitle}`}>
            <html lang="en" />

            <meta name="description" content={siteMetadata.description} />
            <meta name="image" content={siteMetadata.image} />

            <meta property="og:title" content={siteMetadata.title} />
            <meta property="og:description" content={siteMetadata.description} />
            <meta property="og:image" content={siteMetadata.image} />
            <meta property="og:url" content={siteMetadata.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteMetadata.title} />
            <meta name="twitter:description" content={siteMetadata.description} />
            <meta name="twitter:image" content={siteMetadata.image} />
        </Helmet>
    );
};

export default DocumentHead;
