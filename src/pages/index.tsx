import * as React from "react"
import { Layout } from "@components"

interface IProps {
  location: Location
}

// markup
const IndexPage: React.FC<IProps> = ({location}) => {
    return (
      <Layout location={location}>
        <div>Hello</div>
        <div>World</div>
      </Layout>
    )
}

export default IndexPage
