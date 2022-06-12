import React, { ReactElement } from "react";
import styled from "styled-components";
import mixins from "@styles/_mixins";
import { DocumentHead, Footer, Header, Loader, Section, SocialsList } from "@components";
import { GlobalStyle } from "@styles";
import { useScrollDirection, useScrolledToTop, useViewportHeight } from "@hooks";

const App = styled.div`
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

const MainContent = styled.main`
    font-family: var(--font-sans);
    font-weight: bold;
    counter-reset: section;
`;

interface IProps {
    location: Location,
    children: React.ReactElement[],
}

const Layout: React.FC<IProps> = ({location, children}) => {

    const viewportHeight = useViewportHeight(window.innerHeight)
    const scrollDirection = useScrollDirection();
    const scrolledToTop = useScrolledToTop();
    const isHome: boolean = location.pathname === "/";
    const is404: boolean = location.pathname === "404";
    const [isLoading, setIsLoading] = React.useState<boolean>(isHome);

    return (
        <>
            <DocumentHead />
            <GlobalStyle />
            <App id="root" className="root">
                <div className="background" />
                {
                    isLoading && isHome
                        && false
                        ?   <Loader
                                finishLoading={() => setIsLoading(false)}
                                viewportHeight={viewportHeight} />
                        :   is404
                                ?   <MainContent>
                                        <Section viewportHeight={viewportHeight}>
                                            {children}
                                        </Section>
                                    </MainContent>
                                :
                                    <>
                                        <Header
                                            scrollDirection={scrollDirection}
                                            scrolledToTop={scrolledToTop}/>
                                        <MainContent>
                                            {
                                                children && children.map(child => (
                                                    React.cloneElement(child, {viewportHeight: viewportHeight})
                                                ))
                                            }
                                            <Footer />
                                        </MainContent>
                                        <SocialsList scrolledToTop={scrolledToTop} />
                                    </>
                }
            </App>
        </>
    );
};

export default Layout;
