import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Github, LinkedIn, Codepen } from "@icons";
import { socialLinksContainerVariants,
    socialLinksItemVariants } from "@styles/_transitions";

type SocialListProps = {
    scrolledToTop: boolean
}

const StlyedSocialList = styled(motion.div)<SocialListProps>`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3.5rem;
    padding: 0 var(--pd-win-sm);
    height: var(--header-height);
    transition: transform 300ms ease-in-out;
    
    // Firefox mobile has a dynamic url bar on scroll and as such translatingY by 100% does not necessarily hide an elment
    // An additional 60px is required, alternatively 200% works
    ${({scrolledToTop}) => 
            !scrolledToTop && 
            css`
                transform: translateY(calc(100% + 60px));
    `}


    @media screen and (min-width: 768px){
        gap: 2.5rem;
        left: 0;
    }

    @media (hover: hover) and (pointer: fine){
        padding: 0 var(--pd-win-lg);
    }
`;

interface IProps {
    scrolledToTop: boolean
}

const SocialsList: React.FC<IProps> = ({scrolledToTop}) => {

    return (
        <StlyedSocialList
            scrolledToTop={scrolledToTop}
            variants={socialLinksContainerVariants}
            initial="initial"
            animate="animate">

            <motion.a 
                variants={socialLinksItemVariants}
                target="_blank"
                href={"https://github.com/kdan80"}>
                <Github />
            </motion.a>

            <motion.a 
                variants={socialLinksItemVariants}
                target="_blank"
                href={"https://linkedin.com/in/kdansey80"}>
                <LinkedIn />
            </motion.a>

            <motion.a 
                variants={socialLinksItemVariants}
                target="_blank"
                href={"https://codepen.io/kdan80"}>
                <Codepen />
            </motion.a>
            
        </StlyedSocialList>
    );
};

export default SocialsList;