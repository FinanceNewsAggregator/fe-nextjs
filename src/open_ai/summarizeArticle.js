// summarizeArticle.js
//require('dotenv').config();
const openaiApiKey = process.env.OPENAI_API_KEY;


async function summarizeArticle(article) {
  try {
    const prompt = `Please summarize the following article:\n\n${article}\n\nSummary: `;
    const response = await openai.Completion.create({
      engine: 'davinci-codex',
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    return response.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Error generating summary.';
  }
}

module.exports = summarizeArticle;
