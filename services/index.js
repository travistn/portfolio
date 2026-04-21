import { gql, request } from 'graphql-request';

const graphqlApi =
  process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const fetchGraphQL = async (query) => {
  const response = await fetch(graphqlApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const json = await response.json().catch(() => ({}));

  if (!response.ok || json?.errors?.length) {
    const message =
      json?.errors?.map((error) => error.message).join(', ') ||
      `Failed to fetch data: ${response.status}`;

    throw new Error(message);
  }

  return json?.data;
};

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

export const getSkills = async () => {
  if (!graphqlApi) {
    return [];
  }

  const queries = [
    `
      query GetSkills {
        skills(orderBy: order_ASC) {
          name
          order
          icon {
            url
          }
        }
      }
    `,
    `
      query GetSkills {
        skills(orderBy: order_ASC) {
          name
          order
          icon
        }
      }
    `,
    `
      query GetSkills {
        skills {
          name
          icon
        }
      }
    `,
  ];

  for (const query of queries) {
    try {
      const data = await fetchGraphQL(query);
      const skills = Array.isArray(data?.skills) ? data.skills : [];

      return skills.map((skill) => ({
        name: skill?.name ?? '',
        order: skill?.order ?? null,
        icon:
          typeof skill?.icon === 'string'
            ? skill.icon
            : skill?.icon?.url ?? '',
      }));
    } catch {}
  }

  return [];
};

export const getAbout = async () => {
  const query = gql`
    query MyQuery {
      abouts {
        bio
      }
    }
  `;

  const results = await request(graphqlApi, query);

  return results.abouts;
};
