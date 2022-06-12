import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import mixins from "@styles/_mixins";
import { motion } from "framer-motion";
import { navLinksContainerVariants, navLinksItemVariants } from "@styles/_transitions";
const StyledNav = styled.nav `
    display: none;

    @media screen and (min-width: 768px){
        display: flex;
    
        ol {
            ${mixins.flexCenter};
            gap: 2rem;
                
            a {
                color: var(--fg-main);

                :hover {
                    color: var(--fg-highlight);
                }
            }
        }
    }
`;
const Nav = ({ navLinks }) => {
    return (React.createElement(StyledNav, null,
        React.createElement(motion.ol, { variants: navLinksContainerVariants, initial: "initial", animate: "animate" }, navLinks.map(({ name, url }, index) => (React.createElement(motion.li, { variants: navLinksItemVariants, key: index },
            React.createElement(Link, { to: url }, name)))))));
};
export default Nav;
