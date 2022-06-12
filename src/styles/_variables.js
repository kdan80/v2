import { css } from "styled-components";
const variables = css `
    :root {

        // Color Palette
        --blue                  : #57cbff;
        --bg-main               : #17181a;
        --bg-main-light         : #26272a;
        --bg-main-lighter       : #303135;
        --bg-main-dark          : #151618;
        --pink                  : #f57dff;
        --slate-dark            : #495670;
        
        --fg-main               : #e0e2ed;
        --fg-main-light         : #e6f1ff;
        --fg-main-dark          : #b8b9bd;
        --fg-main-darker        : #99a0a4;
        --fg-highlight          : #13d5bb;
        
        --fg-highlight-tint     : #11aa951a;
        --scrollbar-fill        : #394044;
        --scrollbar-fill-hover  : #596064;
        --dropmenu-fill         : #27282a;
        --dropmenu-fill-alpha   : rgba(48, 49, 54,.6);
        --icon-fill             : #899094;
        --icon-fill-hover       : #0e8a7a;                               
        

        // Font sizes
        --ft-xxs       : 0.75rem;
        --ft-xs        : 0.8125rem;
        --ft-sm        : 0.875rem;
        --ft-md        : 1rem;
        --ft-lg        : 1.125rem;
        --ft-xl        : 1.25rem;
        --ft-xxl       : 1.375rem;
        --ft-heading   : 2rem;

        --font-sans: "Poppins", "Roboto", "Arial", "sans", "sans-serif";
        --font-mono: "Hack", "SF Mono", "Hack", "mono";

        // Padding
        --pd-win-sm     : 5vw;
        --pd-win-lg     : 3rem;

        // Header height is fixed/non-responsive in order to work with an intersection observer
        --header-height : 80px;

        --sn-max-width  : 64rem;
        --sections      : 4;


        // Z-indices
        --layer-1   : 1;
        --layer-2   : 10;
        --layer-3   : 100;
        --layer-4   : 1000;
    }
`;
export default variables;
