import { useStaticQuery, graphql } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}
