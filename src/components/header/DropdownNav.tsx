import React, {useEffect} from "react";
import styled, { css } from "styled-components";
import mixins from "@styles/_mixins";
import { Link } from "gatsby";

type NavProps = {
    dropdownIsOpen: boolean
}

const StyledNav = styled.nav<NavProps>`
    ${mixins.flexCenter};
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--dropmenu-fill);
    transform: translateY(-100%);
    transition: transform 300ms ease-in-out;

    @supports (backdrop-filter: blur()){
        background-color: var(--dropmenu-fill-alpha);
        backdrop-filter: blur(16px);
    }

    ol {
        font-size: var(--ft-lg);
        ${mixins.flexCol};
        
        li {
            transition: none;
            opacity: 0;
            margin-left: -25rem;
            text-align: center;
            font-size: var(--ft-lg);
            counter-increment: item 1;
            color: white;

            a {
                color: white;

                &:before {
                    content: '0' counter(item) '.';
                    display: block;
                    margin-right: 0;
                    margin-bottom: .3125rem;
                    font-size: var(--ft-sm);
                    color: var(--fg-highlight);
                }
            }
        }
    }

    ${({dropdownIsOpen}) => dropdownIsOpen && css`
        transform: translateY(0);

        ol {

            li {
                opacity: 1;
                margin-left: 0;
                transition: 
                    margin 250ms ease-in-out calc((var(--delay) * 75ms) + 200ms),
                    opacity 250ms ease-in-out calc((var(--delay) * 75ms) + 200ms);
            }
        }
    `}

`;

type NavLink = {
    name: string,
    url: string
}

interface IProps {
    navLinks: NavLink[],
    dropdownIsOpen: boolean,
    setDropdownIsOpen: (bool: boolean) => void
}

const DropdownNav: React.FC<IProps> = ({navLinks, dropdownIsOpen, setDropdownIsOpen}) => {

    // innerWidth should be >= to --bp-sm which is set in src/styles/_variables.js
    const onResize = (e: UIEvent) => {
        if(!e.currentTarget) return;
        if (window.innerWidth >= 768) {
            setDropdownIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [])

    return (  
        <StyledNav dropdownIsOpen={dropdownIsOpen}>
            <ol>
                {
                    navLinks.map(({name, url}, index) => (
                        <li 
                            key={index} 
                            style={{"--delay": index}}
                            onClick={() => setDropdownIsOpen(false)}>
                            <Link to={url}>{name}</Link>
                        </li>
                    ))
                }
            </ol>
        </StyledNav>
    );
};

export default DropdownNav;