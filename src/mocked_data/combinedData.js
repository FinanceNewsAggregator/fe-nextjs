// src/mocked_data/combinedData.js
import newsData from './data';
import newsletter_data from './newsletter_data';
import twitter_data from './twitter_data';

const combinedData = [
  ...newsData.map(item => ({ ...item, type: 'news' })),
  ...newsletter_data.data.map(item => ({ ...item, type: 'newsletter' })),
  ...twitter_data.map(item => ({ ...item, type: 'twitter' })),
];

export default combinedData;
