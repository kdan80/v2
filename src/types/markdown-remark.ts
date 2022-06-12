export type MarkdownRemark = {
    frontmatter: {
        title: string
        cover: {
            childImageSharp: {
                gatsbyImageData: any
            }
        }
        tech: string,
        github: string,
        external: string,
    }
}