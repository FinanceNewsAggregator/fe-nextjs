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
    <div className="flex h-screen justify-center bg-indigo-50 px-4 text-black">
      <div className="py-5 max-w-sm overflow-hidden rounded-xl bg-white shadow-md">
        <img src={newsItem.image} className="w-full h-64 object-cover rounded-md" />
        <h1 className="text-3xl m-4 text-center">{newsItem.headline}</h1>
        <ul>
          {newsItem.summary.map((summary, i) => (
            <li key={i} className="italic text-center mb-2 p-2">{summary}</li>
          ))}
        </ul>
        <BottomNav />
      </div>
    </div>
  );
};

export default Summary;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  if (!newsData || !newsData.results) {
    // Handle the case where newsData or newsData.results is undefined or null
    console.error('newsData or newsData.results is undefined');
    return {
      notFound: true,
    };
  }

  const newsItem = newsData.results.find((item) => item.id === parseInt(id, 10));


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
