import {promises as fs} from 'fs';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function robots(req: NextApiRequest, res: NextApiResponse) {
  const robotsTxt = await fs.readFile('robots.txt', 'utf8');
  res.setHeader('Content-Type', 'text/plain');
  res.send(robotsTxt);
}
