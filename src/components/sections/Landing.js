import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Section from "./Section";
import mixins from "@styles/_mixins";
import { motion, useAnimation } from "framer-motion";
import { landingPageContainerVariants, landingPageItemVariants } from "@styles/_transitions";
const StyledSection = styled(Section) `
    font-weight: normal;
    transition: all 1000ms ease-in-out;

    .container {
        ${mixins.sectionContentContainer};
        ${mixins.flexCol};
        justify-content: space-between;
        gap: 1.5rem;
    }

    h1 {
        color: var(--fg-highlight);
        font-family: var(--font-mono);
        font-size: clamp(var(--ft-sm), 5vw, var(--ft-lg));
        font-weight: 400;
        margin-bottom: .5rem;
    }

    h2, h3 {
        line-height: .9;
        font-weight: 600;
        font-size: clamp(2.5rem, 8vw, 4rem);
    }

    h2 {
        color: var(--fg-main);
    }

    h3  {
        color: var(--fg-main-darker);
    }

    a {
        ${mixins.bigButton}
        display: inline-block;
        margin-top: 2rem;
        width: 12.5rem;
    }

    @media screen and (min-width: 768px){
        p {
            max-width: 60%;
        }
    }
`;
const Landing = ({ viewportHeight }) => {
    const animation = useAnimation();
    const [pageLoadAnimationsComplete, setPageLoadAnimationsComplete] = React.useState(false);
    React.useEffect(async () => {
        await animation.start("animate");
        setPageLoadAnimationsComplete(true);
    }, [animation]);
    const itemProps = {
        variants: landingPageItemVariants,
        viewport: {
            margin: "0px 10px 0px 10px",
            amount: 1
        },
        animate: pageLoadAnimationsComplete ? "fadeOut" : false,
        whileInView: pageLoadAnimationsComplete ? "fadeIn" : false,
    };
    const elements = [
        (React.createElement(motion.h1, { ...itemProps }, "Hi, my name is")),
        (React.createElement(motion.h2, { ...itemProps }, "Kieran Dansey.")),
        (React.createElement(motion.h3, { ...itemProps }, "I build things for the web.")),
        (React.createElement(motion.p, { ...itemProps }, "I am a freelance web developer, and occasional designer, with a passion for building exceptional digital experiences.")),
        (React.createElement(motion.div, { ...itemProps },
            React.createElement(Link, { to: "/#projects" }, "View My Projects")))
    ];
    return (React.createElement(StyledSection, { id: "landing", viewportHeight: viewportHeight },
        React.createElement(motion.div, { className: "container", variants: landingPageContainerVariants, initial: "initial", animate: animation }, elements.map((element, index) => (React.createElement(React.Fragment, { key: index }, element))))));
};
export default Landing;
