import * as github from 'octonode';
import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    const data = JSON.parse(req.body);

    const client = await github.client(data?.token);
    await client.get('/user/repos', (err, status, body, headers) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(body);
      }
    });
  } else {
    res.status(200);
    res.send('aaaa');
  }
}
