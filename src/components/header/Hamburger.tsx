import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { hamburgerVariants } from "@styles/_transitions";
import mixins from "@styles/_mixins";

type ButtonProps = {
    dropdownIsOpen: boolean
}

const StyledButton = styled(motion.button)<ButtonProps>`
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

    ${({dropdownIsOpen}) => dropdownIsOpen && css`
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

interface IProps {
    dropdownIsOpen: boolean,
    setDropdownIsOpen: (bool: boolean) => void
}

const Hamburger: React.FC<IProps> = ({dropdownIsOpen, setDropdownIsOpen}) => {

    const handleClick = () => {
        return setDropdownIsOpen(!dropdownIsOpen);
    };

    return (
        <StyledButton
            variants={hamburgerVariants}
            initial="initial"
            animate="animate"
            onClick={handleClick} 
            dropdownIsOpen={dropdownIsOpen}
            type="button" 
            >
            <div className="barBox">
                <div className="topBar" />
                <div className="middleBar" />
                <div className="bottomBar" />
            </div>
        </StyledButton>
    );
};

export default Hamburger;