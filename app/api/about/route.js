import { getAbout } from '@/services';

export async function GET() {
  try {
    const about = await getAbout();

    return Response.json({ about });
  } catch (error) {
    console.error('Failed to load about content from Hygraph.', error);

    return Response.json({ about: [] });
  }
}
