import * as React from "react";
import { About, Contact, Featured, Landing, Layout } from "@components";
import { useViewportHeight } from "@hooks";
// markup
const IndexPage = ({ location }) => {
    const viewportHeight = useViewportHeight(window.innerHeight);
    return (React.createElement(Layout, { location: location, viewportHeight: viewportHeight },
        React.createElement(Landing, { viewportHeight: viewportHeight }),
        React.createElement(About, { viewportHeight: viewportHeight }),
        React.createElement(Featured, { viewportHright: viewportHeight }),
        React.createElement(Contact, { viewportHeight: viewportHeight })));
};
export default IndexPage;
