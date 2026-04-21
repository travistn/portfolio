import { getProjects } from '@/services';

export async function GET() {
  try {
    const projects = await getProjects();

    return Response.json({ projects });
  } catch (error) {
    console.error('Failed to load projects from Hygraph.', error);

    return Response.json({ projects: [] });
  }
}
