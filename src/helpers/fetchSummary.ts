// src/helpers/fetchSummary.ts
import axios from 'axios';

async function fetchSummary(content: string): Promise<string> {
  try {
    const response = await axios.post('http://localhost:3000/api/summary', { content });
    return response.data.summary;
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
}

export default fetchSummary;
