import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(`
    query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
      
    `);

  return data.site.useSiteMetadata;
};

export default useSiteMetadata;
