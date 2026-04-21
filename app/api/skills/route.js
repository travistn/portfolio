import { getSkills } from '@/services';

export async function GET() {
  try {
    const skills = await getSkills();

    return Response.json({ skills });
  } catch (error) {
    console.error('Failed to load skills from Hygraph.', error);

    return Response.json({ skills: [] });
  }
}
