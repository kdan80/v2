import * as React from "react"
import { About, Landing, Layout } from "@components"
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
      </Layout>
    )
}

export default IndexPage
