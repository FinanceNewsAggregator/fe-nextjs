import { React, useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import newsData from '../../src/mocked_data/data'; // Updated import path
import { useRouter } from 'next/router';
import BottomNav from '@/components/BottomNav';

interface ArticleProps {
  newsItem: NewsItem;
  onArticleRead: () => void; // Add the onArticleRead prop
}

const Article: React.FC<ArticleProps> = ({ newsItem, onArticleRead }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    if (progressPercentage === 100) {
      onArticleRead();
    }
  }, [progressPercentage, onArticleRead]);

  const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      setProgressPercentage(100);
    } else {
      setProgressPercentage((windowBottom / docHeight) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-screen justify-center bg-indigo-50 px-4 text-black">
      <div className="h-1 p-4 bg-primary" style={{ width: `${progressPercentage}%` }}>
      </div>
      <div className="py-5 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 ">
        <div className="h-1 p-2 mx-2 bg-neutral-200 dark:bg-neutral-600">

        </div>
        <div className="h-1 p-2">
          <img src={newsItem.image} className="w-full h-64 object-cover rounded-md" />
          <h1 className="text-3xl m-4">{newsItem.headline}</h1>
          <ul>
            {newsItem.article.split('. ').map((point, i) => (
              <p key={i} className="italic text-center m-4">
                {point.trim()}
              </p>
            ))}
          </ul>
        </div>
      </div>
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
