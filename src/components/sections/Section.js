import React from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";
const StyledSection = styled.section `
    ${mixins.flexCenter};
    padding: var(--pd-win-sm);
    z-index: var(--layer-1);
    min-height: calc(var(--vh) * 100px);
    width: 100vw;
`;
const Section = ({ viewportHeight, children, ...props }) => {
    return (React.createElement(StyledSection, { style: { "--vh": viewportHeight * 0.01 }, ...props }, children));
};
export default Section;
