import * as React from "react"
import { PageProps } from "gatsby"
import { About, Contact, Featured, Landing, Layout } from "@components"

// markup
const IndexPage: React.FC<PageProps> = ({location}) => {

    return (
      <Layout location={location} >
        <Landing/>
        <About/>
        <Featured/>
        <Contact/>
      </Layout>
    )
}

export default IndexPage
