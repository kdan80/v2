import React from "react";
import { navLinks } from '@config';
import styled, { css } from "styled-components";
import Nav from "./Nav";
import DropdownNav from "./DropdownNav";
import Hamburger from "./Hamburger";
import mixins from "@styles/_mixins";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { homeLinkVariants } from "@styles/_transitions";

type HeaderProps = {
    scrollDirection: string,
    scrolledToTop: boolean,
    dropdownIsOpen: boolean
}

const StyledHeader = styled(motion.header)<HeaderProps>`
    ${mixins.flexCenter};
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 var(--pd-win-sm);
    font-size: var(--ft-lg);
    color: var(--fg-main);
    z-index: var(--layer-3); 
    height: var(--header-height);
    transition: transform 300ms ease-in-out;

    ${({scrolledToTop, scrollDirection}) => 
            !scrolledToTop && 
            (scrollDirection === "down") && 
            css`
                transform: translateY(-100%);
    `}

    ${({scrolledToTop, scrollDirection}) => 
            !scrolledToTop && 
            (scrollDirection === "up") && 
            css`
                transform: translateY(0);
                background-color: rgba(28,29,34, .95);
                backdrop-filter: blur(8px);
                box-shadow: 0 2px 16px rgba(0,0,0,.4);

                @supports (backdrop-filter: blur()){
                    background-color: transparent;
                }
    `}

    ${({dropdownIsOpen}) => dropdownIsOpen && css`
            background-color: transparent;
            backdrop-filter: none;
    `}

    .container {
        ${mixins.flexBetween};
        width: 100%;
    }

    .home-link {
        a {
            color: var(--fg-highlight);
        }
        
        span {
            transition: all 300ms ease-in-out;
            color: var(--fg-main);

            :hover {
                color: var(--fg-highlight);
            }
        }
    }

    @media screen and (min-width: 768px){
        padding: 0 var(--pd-win-lg);
        width: 100%;
    }
`;

interface IProps {
    scrollDirection: string,
    scrolledToTop: boolean
}

const Header: React.FC<IProps> = ({scrollDirection, scrolledToTop}) => {

    const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);

    return (
        <StyledHeader
            dropdownIsOpen={dropdownIsOpen}
            scrollDirection={scrollDirection}
            scrolledToTop={scrolledToTop}>
            <Helmet>
                <body className={dropdownIsOpen ? "disable-scroll" : ""} />
            </Helmet>
            <div className="container">
                    <motion.div 
                        className="home-link"
                        variants={homeLinkVariants}
                        initial="initial"
                        animate="animate"
                        >
                        <Link to="#landing">&lt;/&gt; <span>kieran dansey</span></Link>
                    </motion.div>

                        <Hamburger 
                            dropdownIsOpen={dropdownIsOpen} 
                            setDropdownIsOpen={setDropdownIsOpen}
                            />
                <DropdownNav navLinks={navLinks} dropdownIsOpen={dropdownIsOpen} setDropdownIsOpen={setDropdownIsOpen} />
                <Nav navLinks={navLinks} />
            </div>
        </StyledHeader>
    );
};

export default Header;