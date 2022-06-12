import React from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";
import { DocumentHead, Footer, Header, Loader, Section, SocialsList } from "@components";
import { GlobalStyle } from "@styles";
import { useScrollDirection, useScrolledToTop } from "@hooks";
const App = styled.div `
    ${mixins.flexCenter};
    min-height: 100%;

    .background {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background: url("/background.webp");
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
const MainContent = styled.main `
    font-family: var(--font-sans);
    font-weight: bold;
    counter-reset: section;
`;
const Layout = ({ location, viewportHeight, children }) => {
    const scrollDirection = useScrollDirection();
    const scrolledToTop = useScrolledToTop();
    const isHome = location.pathname === "/";
    const is404 = location.pathname === "404";
    const [isLoading, setIsLoading] = React.useState(isHome);
    return (React.createElement(React.Fragment, null,
        React.createElement(DocumentHead, null),
        React.createElement(GlobalStyle, null),
        React.createElement(App, { id: "root", className: "root" },
            React.createElement("div", { className: "background" }),
            isLoading && isHome
                && false
                ? React.createElement(Loader, { finishLoading: () => setIsLoading(false), viewportHeight: viewportHeight })
                : is404
                    ? React.createElement(MainContent, null,
                        React.createElement(Section, { viewportHeight: viewportHeight }, children))
                    :
                        React.createElement(React.Fragment, null,
                            React.createElement(Header, { scrollDirection: scrollDirection, scrolledToTop: scrolledToTop }),
                            React.createElement(MainContent, null,
                                children,
                                React.createElement(Footer, null)),
                            React.createElement(SocialsList, { scrolledToTop: scrolledToTop })))));
};
export default Layout;
