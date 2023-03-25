// pages/news/article/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import newsData from '../../../mocked_data/data';

const Article: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const newsItem = newsData.find((item) => item.id === parseInt(id as string, 10));

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  // Render article content
};

export default Article;
