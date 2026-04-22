export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const secret = req.headers['x-webhook-secret'];

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    await res.revalidate('/');

    return res.status(200).json({ revalidated: true, paths: ['/'] });
  } catch (error) {
    return res.status(500).json({ message: 'Revalidation failed' });
  }
}
