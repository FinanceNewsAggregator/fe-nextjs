import React from 'react';
import { useRouter } from 'next/router';
import newsData from '../mocked_data/data';



const Summary: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const newsItem = newsData.find((item) => item.id === parseInt(id as string, 10));


  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <img src={"https://picsum.photos/200/300"} height={300} width={200} className="mx-auto mb-4" />
      <h1 className="text-3xl mb-4">{newsItem.headline}</h1>
      <ul>
        {newsItem.summary.map((summary, i) => (
          <li key={i} className="italic text-center mb-2">{summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
