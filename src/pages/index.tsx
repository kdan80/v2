import * as React from "react"
import { PageProps } from "gatsby"
import { About, Contact, Featured, Landing, Layout } from "@components"
import { useViewportHeight } from "@hooks"

// markup
const IndexPage: React.FC<PageProps> = ({location}) => {

    const viewportHeight: number = useViewportHeight(window.innerHeight);

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
