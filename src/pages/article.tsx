import React from 'react';
import { GetServerSideProps } from 'next';
import newsData from '../../src/mocked_data/data'; // Updated import path
import { useRouter } from 'next/router';
import BottomNav from '@/components/BottomNav';

interface ArticleProps {
  newsItem: NewsItem;
}

const Article: React.FC<ArticleProps> = ({ newsItem }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">{newsItem.headline}</h1>
      <ul>
        {newsItem.bulletPoints.map((point, i) => (
          <li key={i} className="italic text-center">{point}</li>
        ))}
      </ul>
      <BottomNav />
    </div>
  );
};

const ArticlePage: React.FC<ArticleProps> = (props) => {
  return <Article {...props} />;
};

export default ArticlePage;

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
