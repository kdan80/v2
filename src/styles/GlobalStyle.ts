import { createGlobalStyle } from "styled-components";
import fonts from "./_fonts";
import variables from "./_variables";

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables};

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow: overlay;
        overflow-x: hidden;
        font-size: 16px;
        font-family: var(--font-sans);  

        &.disable-scroll {
            overflow: hidden;
        }
    }

    /* Scrollbar Styles */
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-fill) transparent;
    }

    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-track {
        background: transparent;
    }

    body::-webkit-scrollbar-thumb {
        transition: all 300ms ease-in-out;
        background-color: var(--scrollbar-fill);
        border-radius: 10px;

        :hover {
            background-color: var(--scrollbar-fill-hover);
        }
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: var(--fg-main);
        transition: color 400ms ease-in-out;

        :hover {
            color: var(--fg-highlight);
        }
    }

    p, li, h1, h2, h3, span, div {
        font-size: var(--ft-lg);
        color: var(--fg-main-darker);
        font-weight: 400;
    }

    p {
        line-height: 1.5em;
        font-size: var(--ft-lg);
        color: var(--fg-main-darker);
        font-weight: 400;
    }

    button {
        cursor: pointer;
        background: none;
    }

    input, button {
        font-size: 1rem;
    }

    input {
        min-width: 0;
        background-color: transparent;

        &::placeholder {
            opacity: 1;
        }
    }
`;

export default GlobalStyle;