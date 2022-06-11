import React from "react";
import Section from "./Section";
import styled from "styled-components";
import mixins from "@styles/_mixins";
import { Github, External } from "@components/icons";
import { motion } from "framer-motion";
import { NumberedHeading } from "@components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { scrollFade20 } from "@styles/_transitions";

type SectionProps = {
    id: string
}

const StyledSection = styled(Section)<SectionProps>`

    .container {
        ${mixins.sectionContentContainer};
        ${mixins.flexCol};
        gap: 2rem;

        @media screen and (min-width: 768px){
            gap: 3rem;
        }
    }
`;

const ProjectList = styled.ul`
    ${mixins.flexCol};
    gap: 2rem;

    @media screen and (min-width: 768px) {
        gap: 6rem;
    }

    a {
        position: relative;
        z-index: var(--layer-1);
    }
`;

const Project = styled(motion.li)`
    position: relative;
    display: grid;
    grid-gap: .625rem;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    &:nth-of-type(odd) {
        .project-content {
            grid-column: 7 / -1;
            text-align: right;

            @media (max-width: 1080px) {
                grid-column: 5 / -1;
            }

            @media (max-width: 768px) {
                grid-column: 1 / -1;
                padding: 1rem 2.5rem 1.875rem;
                text-align: left;
            }

            @media (max-width: 480px) {
                padding: 1.5rem 1.5rem 1.25rem;
            }
        }

        .project-tech-list {
            justify-content: flex-end;
            align-items: center;

            @media (max-width: 768px) {
                justify-content: flex-start;
            }

            li {
                @media (max-width: 768px) {
                    margin: 0 .625rem .3125rem 0;
                }
            }
        }

        .project-links {
            justify-content: flex-end;

            @media (max-width: 768px) {
                justify-content: flex-start;
                margin-left: -0.625rem;
                margin-right: 0;
            }
        }

        .project-image {
            grid-column: 1 / 8;

            @media (max-width: 768px) {
                grid-column: 1 / -1;
            }
        }
    }

    .project-content {
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;

        @media (max-width: 1080px) {
            grid-column: 1 / 9;
        }

        @media (max-width: 768px) {
            ${mixins.flexCol};
            justify-content: center;
            height: 100%;
            grid-column: 1 / -1;
            padding: 1rem 2.5rem 1.875rem;
            z-index: 5;
        }

        @media (max-width: 480px) {
            padding: 1.5rem 1.5rem 1.25rem;
        }
    }

    .project-overline {
        margin: .625rem 0;
        color: var(--fg-highlight);
        font-family: var(--font-mono);
        font-size: var(--ft-xs);
        font-weight: 400;
    }

    .project-title {

        color: var(--fg-main-light);
        font-weight: 600;
        font-size: clamp(1rem, 5vw, 1.6rem);

        @media (min-width: 768px) {
            margin: 0 0 1.25rem;
        }

        @media (max-width: 768px) {
            color: var(--fg-main-light);

            a {
                position: static;

                &:before {
                content: '';
                    display: block;
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }
        }
    }

    .project-description {
        ${mixins.boxShadow};
        position: relative;
        z-index: var(--layer-2);
        padding: 1.4rem;
        border-radius: .25rem;
        background-color: var(--bg-main-light);
        color: var(--fg-main);
        font-size: var(--ft-sm);

        @media (max-width: 768px) {
            padding: 1.25rem 0;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }
        }

        a {
            ${mixins.inlineLink};
        }

        p {
            color: var(--fg-main);
            font-size: var(--ft-md);
        }

        strong {
            color: red;
            font-weight: normal;
        }
    }

    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        gap: 1rem;
        z-index: 2;
        margin: 1.6rem 0 .625rem;
        padding: 0;
        list-style: none;

        li {
            color: var(--fg-main);
            font-family: var(--font-mono);
            font-size: var(--ft-sm);
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            margin: .625rem 0;

            li {
                margin: 0 .625rem .3125rem 0;
                color: var(--fg-main-dark);
            }
        }
    }

    .project-links {
        ${mixins.flexCenter};
        justify-content: flex-start;
        position: relative;
        margin-top: .625rem;
        margin-left: -.625rem;
        color: var(--fg-main-dark);

        a {
            ${mixins.flexCenter};
            padding: .625rem;

            svg {
                width: 1.25rem;
                height: 1.25rem;
            }
        }

        .cta {
            ${mixins.smallButton};
            margin: .625rem;
        }
    }

    .project-image {
        ${mixins.boxShadow};
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: var(--layer-1);
        border: 2px solid #555;
        border-radius: .25rem;
        overflow: hidden;
        transition: all 300ms ease-in-out;

        @media (max-width: 768px) {
            border-radius: .5rem;
            border: none;
            grid-column: 1 / -1;
            height: 100%;
        }

        &:hover {
            border-color: var(--fg-highlight);
        }

        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            background-color: var(--bg-main-lighter);
            border-radius: .25rem;
            vertical-align: middle;

            @media screen and (min-width: 768px){
                background: transparent;
            }

            &:hover,
            &:focus {
                background: transparent;
                outline: 0;

                &:before,
                .img {
                    background: transparent;
                    filter: none;
                }
            }

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: var(--layer-3);
                mix-blend-mode: screen;
            }
        }

        .img {
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1) brightness(90%);
            transition: all 300ms ease-in-out;
            opacity: 0.35;

            @media screen and (min-width: 768px){
                filter: grayscale(60%) contrast(1) brightness(90%);
                opacity: 1;
            }

            &:hover {
                filter: grayscale(0%) contrast(1) brightness(90%);
            }

            @media (max-width: 768px) {
                object-fit: cover;
                width: auto;
                height: 100%;
                filter: grayscale(100%) contrast(1) brightness(50%);
            }
        }
    }
`;

interface IProps {
    viewportHeight: number
}

const Featured: React.FC<IProps> = ({viewportHeight}) => {

    const data = useStaticQuery(graphql`
        {
            featured: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/featured/" } }
                sort: { fields: [frontmatter___date], order: ASC }
            ) {
                edges {
                    node {
                    frontmatter {
                        title
                        cover {
                            childImageSharp {
                                gatsbyImageData(width: 720, placeholder: BLURRED, formats: [AUTO, WEBP])
                            }
                        }
                        tech
                        github
                        external
                    }
                    html
                    }
                }
            }
        }
    `);

    const featuredProjects = data.featured.edges.filter(({ node }) => node);

    return (

        <StyledSection
            id="projects"
            viewportHeight={viewportHeight}>
            <motion.div className="container">

                <NumberedHeading>
                    Some Things I've Built
                </NumberedHeading>

                <ProjectList>
                    {featuredProjects &&
                        featuredProjects.map(({ node }, index) => {
                            const { frontmatter, html } = node;
                            const { external, title, tech, github, cover } = frontmatter;
                            const image = getImage(cover);

                            return(
                                <Project key={index} {...scrollFade20}>
                                    <div className="project-content">
                                        <div>

                                            <p className="project-overline">
                                                Featured Project
                                            </p>

                                            <h3 className="project-title">
                                                <a href={external}>{title}</a>
                                            </h3>

                                            <div
                                                className="project-description"
                                                dangerouslySetInnerHTML={{ __html: html }}
                                            />

                                            {tech.length && (
                                                <ul className="project-tech-list">
                                                    {tech.map((tech, index) => (
                                                        <li key={index}>{tech}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className="project-links">
                                                {github && (
                                                    <a href={github} aria-label="GitHub Link" target="_blank">
                                                        <Github />
                                                    </a>
                                                )}
                                                {external && (
                                                    <a href={external} aria-label="External Link" target="_blank">
                                                        <External />
                                                    </a>
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                    <div className="project-image">
                                        <a href={external ? external : github ? github : '#'} target="_blank">
                                            <GatsbyImage image={image} alt={title} className="img" />
                                        </a>
                                    </div>
                                </Project>
                            )
                        })
                    }
                </ProjectList>
            </motion.div>
        </StyledSection>

    );
};

export default Featured;