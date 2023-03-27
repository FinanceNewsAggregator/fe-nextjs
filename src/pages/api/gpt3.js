// pages/api/gpt3.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const prompt = req.body.prompt;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: prompt,
          max_tokens: 100, // Adjust the number of tokens as needed
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      const summary = response.data.choices[0].text.trim();
      res.status(200).json({ summary });
    } catch (error) {
      console.error('Error fetching summary from GPT-3:', error);
      res.status(500).json({ error: 'Error fetching summary from GPT-3', message: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
