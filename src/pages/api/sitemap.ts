import { ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';

const sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`
    });

    // List of posts
    const links = [
      { url: '/', changefreq: 'weekly', priority: 0.9 },
      { url: '/contact', changefreq: 'weekly', priority: 0.7 },
      { url: '/blog', changefreq: 'daily', priority: 0.5 },
      { url: '/projects', changefreq: 'daily', priority: 0.6 },
      { url: '/projects/elearning', changefreq: 'daily', priority: 0.6 },
      { url: '/projects/srk', changefreq: 'daily', priority: 0.6 },
      { url: '/projects/varastro', changefreq: 'daily', priority: 0.6 },
    ]

    // Create each URL row
    links.forEach(post => {
      smStream.write({
        url: `${post.url}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }

}

export default sitemap