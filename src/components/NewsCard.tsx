import React from 'react';
import newsData from '../mocked_data/data';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const NewsCard = ({ index }) => {
  const newsItem = newsData[index];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
      <img src={newsItem.image} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{newsItem.headline}</h2>
        <ul className="mb-4">
          {newsItem.bulletPoints.map((point, i) => (
            <li key={i} className="italic text-center">{point}</li>
          ))}
        </ul>

        <div className="w-full p-5 items-center justify-center">
          <Link href={`/news/summary/${newsItem.id}`}>
            <span className="cursor-pointer text-blue-600 hover:text-blue-800">Read Summary</span>
          </Link>
          <span> | </span>
          <Link href={`/news/article/${newsItem.id}`}>
            <span className="cursor-pointer text-blue-600 hover:text-blue-800">Read Article</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default NewsCard;
