import { gql, request } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        description1
        description2
        githubUrl
        liveSiteUrl
        image {
          url
        }
        name
        technologies
      }
    }
  `;

  const results = await request(graphqlApi, query);

  return results.projects;
};
