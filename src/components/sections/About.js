import React from "react";
import styled from "styled-components";
import Section from "./Section";
import mixins from "@styles/_mixins";
import { skills } from "@config";
import { motion } from "framer-motion";
import { scrollFade } from "@styles/_transitions";
import { NumberedHeading } from "@components";
const StyledSection = styled(Section) `
    
    .container {
        ${mixins.sectionContentContainer};
        ${mixins.flexCol};
    }

    .skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 .625rem;
        padding: 0;
        margin: 1.25rem 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: .625rem;
            padding-left: 1.25rem;
            font-family: var(--font-mono);
            font-size: var(--ft-sm);

            &:before {
                content: "▹";
                position: absolute;
                left: 0;
                color: var(--fg-highlight);
                font-size: var(--ft-sm);
                line-height: .75rem;
            }
        }
    }

    @media screen and (min-width: 768px){
        .container {
            width: 70%;
        }

        .skills-list li {
            font-size: var(--ft-md);

            &:before {
                font-size: var(--ft-md);
            }
        }
    }
`;
const About = ({ viewportHeight }) => {
    return (React.createElement(StyledSection, { id: "about", viewportHeight: viewportHeight },
        React.createElement(motion.div, { className: "container" },
            React.createElement(NumberedHeading, null, "About Me"),
            React.createElement(motion.p, { ...scrollFade }, "Hello! My name is Kieran and I enjoy creating things that live on the internet. My interest in web development started back in 2005 when I was making custom themes for myspace profiles. Fast-forward to today and I enjoy building full-featured websites and apps using modern design principles and tools."),
            React.createElement(motion.p, { ...scrollFade }, "I am a self-taught developer from Tayside, Scotland and I am currently looking to secure a position as a junior developer to further my own knowledge and abilities. My ultimate career aspiration is to become a backend, or full-stack engineer, and a project leader."),
            React.createElement(motion.p, { ...scrollFade }, "Here are some of the tools and technologies that I use;"),
            React.createElement(motion.ul, { className: "skills-list", ...scrollFade }, skills && skills.map((skill, index) => React.createElement(motion.li, { key: index }, skill))))));
};
export default About;
