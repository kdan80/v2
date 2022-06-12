import React from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";
import { motion } from "framer-motion";
import { scrollFade } from "@styles/_transitions";
const StyledFooter = styled.footer `
    ${mixins.flexCenter};
    height: 6rem;
    margin-top: -6rem;

    span {
        font: var(--font-mono);
        font-size: var(--ft-sm);
        font-weight: 400;
    }
`;
const Footer = () => {
    return (React.createElement(StyledFooter, null,
        React.createElement(motion.span, { ...scrollFade }, "Designed & Built by Kieran Dansey")));
};
export default Footer;
