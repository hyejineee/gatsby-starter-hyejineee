import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const {site}  = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
            siteMetadata {
              categories
              description
              imageUrl
              siteUrl
              title
            }
          }
      }
    `
  );
  
  return site;
};
export default useSiteMetadata;



