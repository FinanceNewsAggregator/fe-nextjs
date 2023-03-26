import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import newsData from '../mocked_data/data';
import BottomNav from '../components/BottomNav';

interface SummaryProps {
  newsItem: NewsItem;
}

const Summary: React.FC<SummaryProps> = ({ newsItem }) => {
  return (
    <div className="p-4 text-black">
      <img src={"https://picsum.photos/200/300"} height={300} width={200} className="mx-auto mb-4" />
      <h1 className="text-3xl mb-4">{newsItem.headline}</h1>
      <ul>
        {newsItem.summary.map((summary, i) => (
          <li key={i} className="italic text-center mb-2">{summary}</li>
        ))}
      </ul>
      <BottomNav />
    </div>
  );
};

export default Summary;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  const newsItem = newsData.find((item) => item.id === parseInt(id, 10));

  if (!newsItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      newsItem,
    },
  };
};
