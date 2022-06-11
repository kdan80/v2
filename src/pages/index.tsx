import * as React from "react"
import { About, Contact, Featured, Landing, Layout } from "@components"
import { useViewportHeight } from "@hooks"

interface IProps {
  location: Location
}

// markup
const IndexPage: React.FC<IProps> = ({location}) => {

    const viewportHeight = useViewportHeight(window.innerHeight);

    return (
      <Layout location={location} viewportHeight={viewportHeight}>
        <Landing viewportHeight={viewportHeight} />
        <About viewportHeight={viewportHeight} />
        <Featured viewportHright={viewportHeight} />
        <Contact viewportHeight={viewportHeight} />
      </Layout>
    )
}

export default IndexPage
