import { css } from "styled-components";

const mixins = {

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;  
    `,

    flexCol: css`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    `,

    sectionContentContainer: css`
         max-width: 90vw;

         @media screen and (min-width: 768px){
            max-width: 40rem;
        }

        @media screen and (min-width: 900px){
            max-width: 52rem;
        }

        @media screen and (min-width: 1060px){
            max-width: 64rem;
        }
    `,

    svgIcon: css`
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
            transition: fill 400ms ease-in-out;
        }

        @media screen and (min-width: 768px){
            height: 24px;
            width: 24px;
        }
    `,

    smallButton: css`
        color: var(--fg-highlight);
        background-color: transparent;
        border: 1px solid var(--fg-highlight);
        border-radius: .25rem;
        padding: 0.75rem 1rem;
        font-size: var(--ft-xs);
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        &:hover,
        &:focus,
        &:active {
            background-color: var(--fg-highlight-tint);
            outline: none;
        }
        &:after {
            display: none !important;
        }
    `,

    bigButton: css`
        color: var(--fg-highlight);
        background-color: transparent;
        border: 1px solid var(--fg-highlight);
        border-radius: .25rem;
        padding: 1.25rem 1.75rem;
        font-size: var(--ft-sm);
        font-family: var(--font-mono);
        line-height: 1;
        transition: all 300ms ease-in-out;
        
        &:hover,
        &:focus,
        &:active {
            background-color: var(--fg-highlight-tint);
        }
        
        &:after {
            display: none !important;
        }
    `,

    inlineLink: css`
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        //transition: var(--transition);
        color: var(--fg-highlight);
        &:hover,
        &:focus,
        &:active {
            color: var(--fg-highlight);
            outline: 0;
            
            &:after {
                width: 100%;
            }

            & > * {
                color: var(--fg-highlight) !important;
            }
        }
        &:after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            position: relative;
            bottom: 0.37em;
            background-color: var(--fg-highlight);
            transition: all 300ms ease-in-out;
            opacity: 0.5;
        }
    `,

    boxShadow: css`
        box-shadow: 0 .25rem 1.2rem  rgba(0,0,0,.35);

        @media screen and (min-width: 768px){
            box-shadow: 0 .25rem 1rem  rgba(0,0,0,.45);
        }
    `,
}

export default mixins;