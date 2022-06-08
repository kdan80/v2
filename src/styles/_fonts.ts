import { css } from "styled-components";

import PoppinsRegular           from "@fonts/Poppins/Poppins-Regular.ttf";
import PoppinsMedium            from "@fonts/Poppins/Poppins-Medium.ttf";
import PoppinsSemiBold          from "@fonts/Poppins/Poppins-SemiBold.ttf";
import PoppinsBold              from "@fonts/Poppins/Poppins-Bold.ttf";
import PoppinsExtraBold         from "@fonts/Poppins/Poppins-ExtraBold.ttf";

import PoppinsItalic            from "@fonts/Poppins/Poppins-Italic.ttf";
import PoppinsMediumItalic      from "@fonts/Poppins/Poppins-MediumItalic.ttf";
import PoppinsSemiBoldItalic    from "@fonts/Poppins/Poppins-SemiBoldItalic.ttf";
import PoppinsBoldItalic        from "@fonts/Poppins/Poppins-BoldItalic.ttf";
import PoppinsExtraBoldItalic   from "@fonts/Poppins/Poppins-ExtraBoldItalic.ttf";

import SFMonoRegular            from "@fonts/SFMono/SFMono-Regular.woff2";
import SFMonoMedium             from "@fonts/SFMono/SFMono-Medium.woff2";
import SFMonoSemibold           from "@fonts/SFMono/SFMono-Semibold.woff2";

import SFMonoRegularItalic      from "@fonts/SFMono/SFMono-RegularItalic.woff2";
import SFMonoMediumItalic       from "@fonts/SFMono/SFMono-MediumItalic.woff2";
import SFMonoSemiboldItalic     from "@fonts/SFMono/SFMono-SemiboldItalic.woff2";

const PoppinsFont = css`
    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsRegular}) format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsMedium}) format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsSemiBold}) format("truetype");
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsBold}) format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsExtraBold}) format("truetype");
        font-weight: 800;
        font-style: normal;
        font-display: auto;
    }
`;

const PoppinsItalicFont = css`
    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsItalic}) format("truetype");
        font-weight: 400;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsMediumItalic}) format("truetype");
        font-weight: 500;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsSemiBoldItalic}) format("truetype");
        font-weight: 600;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsBoldItalic}) format("truetype");
        font-weight: 700;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: "Poppins";
        src:
            local("Poppins"),
            local("poppins"), 
            url(${PoppinsExtraBoldItalic}) format("truetype");
        font-weight: 800;
        font-style: italic;
        font-display: auto;
    }
`;

const SFMonoFont = css`
    @font-face {
        font-family: "SF Mono";
        src:
            local("SF Mono"),
            local("sf mono"), 
            url(${SFMonoRegular}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "SF Mono";
        src:
            local("SF Mono"),
            local("sf mono"), 
            url(${SFMonoMedium}) format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "SF Mono";
        src:
            local("SF Mono"),
            local("sf mono"), 
            url(${SFMonoSemibold}) format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }
`;

const SFMonoItalicFont = css`
    @font-face {
        font-family: "SF Mono";
        src:
            local("SF Mono"),
            local("sf mono"), 
            url(${SFMonoRegularItalic}) format("woff2");
        font-weight: 400;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: "SF Mono";
        src:
            local("SF Mono"),
            local("sf mono"), 
            url(${SFMonoMediumItalic}) format("woff2");
        font-weight: 500;
        font-style: italic;
        font-display: auto;
    }

    @font-face {
        font-family: "SF Mono";
        src:
            local("SF Mono"),
            local("sf mono"), 
            url(${SFMonoSemiboldItalic}) format("woff2");
        font-weight: 600;
        font-style: italic;
        font-display: auto;
    }
`;

const fonts = css`
    ${PoppinsFont}
    ${PoppinsItalicFont}
    ${SFMonoFont}
    ${SFMonoItalicFont}
`;

export default fonts;