import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSvg = styled(motion.svg)`
        height: 20px;
        width: 20px;
        cursor: pointer;
        transition: transform 200ms ease-in-out;
        transform: translateY(0);

        :hover {
            transform: translateY(-2px);

            path {
                fill: var(--icon-fill-hover);
            }
        }

        path {
            fill: var(--fg-main-dark);
            transition: fill .4s ease-in-out;
        }

        @media screen and (min-width: 768px){
            height: 22px;
            width: 22px;
        }
`;

interface IProps {
    children: React.ReactNode
}

const Icon: React.FC<IProps> = ({children}) => {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
                {children}
        </StyledSvg>
    );
};

export default Icon;