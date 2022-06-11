import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import mixins from "@styles/_mixins";
import { motion } from "framer-motion";
import { navLinksContainerVariants,
        navLinksItemVariants } from "@styles/_transitions";

const StyledNav = styled.nav`
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

type NavLink = {
    name: string,
    url: string
}

interface IProps {
    navLinks: NavLink[]
}

const Nav: React.FC<IProps> = ({navLinks}) => {

    return (
        <StyledNav>
            <motion.ol
                variants={navLinksContainerVariants}
                initial="initial"
                animate="animate">
                {
                    navLinks.map(({name, url}, index) => (
                            <motion.li 
                                variants={navLinksItemVariants}
                                key={index} 
                                >
                                <Link to={url}>{name}</Link>
                            </motion.li>
                    ))
                }
            </motion.ol>
        </StyledNav>
    );
};

export default Nav;