import React from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";
import { motion } from "framer-motion";
import { Logo } from "@icons";

const StyledLoader = styled.div`
    width: 100vw;
    min-height: calc(var(--vh) * 100px);
    ${mixins.flexCenter};
    justify-content: center;

    .cancel-animation {
        opacity: 0;
        color: #77787a;
        position: absolute;
        bottom: 3rem;
        font-size: var(--ft-sm);

        @media screen and (min-width: 768px){
            font-size: var(--ft-md);
            right: 3rem;
        }

        &::after {
            content: "Tap screen to skip intro";

            @media (hover: hover) and (pointer: fine){
                content: "Press any key to skip intro";
            }
        }
    }
`;

interface IProps {
    finishLoading: () => void,
    viewportHeight: number
}

const Loader: React.FC<IProps> = ({finishLoading, viewportHeight}) => {

    React.useEffect(() => {
        window.addEventListener("keydown", finishLoading);
        window.addEventListener("touchend", finishLoading);
        return () => {
            window.removeEventListener("keydown", finishLoading);
            window.removeEventListener("touchend", finishLoading);
        };
    }, [])

    return (
        <StyledLoader
            style={{"--vh": viewportHeight * 0.01}}>
            <motion.span 
                animate={{opacity: 1}}
                transition={{delay: 2.6, duration: .4}}
                className="cancel-animation">
            </motion.span>
            <Logo finishLoading={finishLoading} />
        </StyledLoader>
    );
};

export default Loader;