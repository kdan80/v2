import React from "react";
import styled from "styled-components";
import Section from "./Section";
import mixins from "@styles/_mixins";
import { email } from "@config";
import { motion } from "framer-motion";
import { scrollFade } from "@styles/_transitions";
import { NumberedHeading } from "@components";

type SectionProps = {
    id: string
}

const StyledSection = styled(Section)<SectionProps>`
    
    .container {
        ${mixins.sectionContentContainer};
        ${mixins.flexCol};
        align-items: center;
        gap: 1rem;
    }

    .title {
        color: var(--fg-main);
        font-weight: 600;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
    }

    p {
        text-align: center;

        @media screen and (min-width: 768px){
            max-width: 60%;
        }
    }

    a {
        ${mixins.bigButton};
        font-size: var(ft-md);
        margin-top: 2.5rem;
    }
`;

interface IProps {
    viewportHeight: number
}

const Contact: React.FC<IProps> = ({viewportHeight}) => {

    return (
        <StyledSection 
            id="contact"
            viewportHeight={viewportHeight}>
            <motion.div className="container">

                <NumberedHeading overline>
                    What's Next?
                </NumberedHeading>

                <motion.h2 
                    className="title" 
                    {...scrollFade}>
                    Get In Touch
                </motion.h2>

                <motion.p {...scrollFade}>
                    Thank you for taking the time to visit my site. If you have a project you wish to discuss, an opportunity for me, or would just like some more information, please do not hesitate to contact me.
                </motion.p>

                <motion.a 
                    href={`mailto:${email}`} 
                    {...scrollFade}>
                    Contact Me
                </motion.a>

            </motion.div>
        </StyledSection>
    );
};

export default Contact;