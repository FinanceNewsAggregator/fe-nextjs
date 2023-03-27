// src/pages/api/summary.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import fetchSummary from '../../helpers/fetchSummary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const content = req.body.content;
      const summary = await fetchSummary(content);
      res.status(200).json({ summary });
    } catch (error) {
      console.error('Error in summary API handler:', error);
      res.status(500).json({ error: 'Error fetching summary', message: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
