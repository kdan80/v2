import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { hamburgerVariants } from "@styles/_transitions";
import mixins from "@styles/_mixins";
const StyledButton = styled(motion.button) `
    ${mixins.flexCenter};
    justify-content: center;
    padding: var(--pd-win-sm);
    margin-right: calc(-1 * var(--pd-win-sm)); // Required as padding pushes the button to the left and results in an asymetrical appearance of the header
    z-index: var(--layer-3);
    
    .barBox {
        ${mixins.flexCol};
        gap: 6px;

        .topBar,
        .middleBar,
        .bottomBar {
            height: 3px;
            width: 28px;
            border-radius: 2px;
            background-color: var(--fg-highlight); 
            transform-origin: 1.5px 1.5px;  
            transition: 
                transform 250ms ease-in-out,
                width 250ms ease-in-out, 
                opacity 250ms ease-in-out; 
        }
    }

    ${({ dropdownIsOpen }) => dropdownIsOpen && css `
        .barBox {
            .topBar,
            .middleBar,
            .bottomBar {
                width: 18px;
            }

            .middleBar {
                transform: translateX(50%) scaleX(0);
            }
          
            .topBar {
                transform: translateY(3.5px) rotate(45deg);               
            }

            .middleBar {
                opacity: 0;
            }

            .bottomBar {
                transform: translateY(-3.5px) rotate(-45deg);
            }
        }
    `}

    @media screen and (min-width: 768px){
        display: none;   
    }
`;
const Hamburger = ({ dropdownIsOpen, setDropdownIsOpen }) => {
    const handleClick = () => {
        return setDropdownIsOpen(!dropdownIsOpen);
    };
    return (React.createElement(StyledButton, { variants: hamburgerVariants, initial: "initial", animate: "animate", onClick: handleClick, dropdownIsOpen: dropdownIsOpen, type: "button" },
        React.createElement("div", { className: "barBox" },
            React.createElement("div", { className: "topBar" }),
            React.createElement("div", { className: "middleBar" }),
            React.createElement("div", { className: "bottomBar" }))));
};
export default Hamburger;
