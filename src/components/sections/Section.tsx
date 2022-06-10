import React from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";

const StyledSection = styled.section`
    ${mixins.flexCenter};
    padding: var(--pd-win-sm);
    z-index: var(--layer-1);
    min-height: calc(var(--vh) * 100px);
    width: 100vw;
`;

interface IProps {
    viewportHeight: number,
    children: React.ReactNode
}

const Section: React.FC<IProps> = ({viewportHeight, children, ...props}) => {

    return (
        <StyledSection 
            style={{"--vh": viewportHeight * 0.01}}
            {...props}>
                {children}
        </StyledSection>
    );
};

export default Section;