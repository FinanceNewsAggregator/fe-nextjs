import React from 'react';
import newsData from '../mocked_data/data';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

const NewsCard = ({ index }) => {
  const newsItem = newsData[index];

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md text-black">
          {newsItem && newsItem.images && (
            <div className="image-container">
              {newsItem.images.map((image, i) => (
                <img key={i} src={image.url} className="w-full h-64 object-cover" />
              ))}
            </div>
          )}
          <div className="p-6">
            {newsItem && (
              <h2 className="text-2xl font-bold mb-3">{newsItem.title}</h2>
            )}
            <ul className="mb-4">
              {/* Check if newsItem and newsItem.descriptions are defined before rendering the list items */}
              {newsItem && newsItem.descriptions && (
                newsItem.descriptions.map((description, i) => (
                  <li key={i} className="italic text-center">{description}</li>
                ))
              )}
            </ul>

            <div className="w-full p-5 items-center justify-center">
              {/* <Link href={`/news/summary/${newsItem?.id}`}> */}
              <span className="cursor-pointer text-blue-600 hover:text-blue-800">Read Summary</span>
              {/* </Link> */}
              <span> | </span>
              {/* <Link href={`/news/article/${newsItem.id}`}> */}
              <span className="cursor-pointer text-blue-600 hover:text-blue-800">Read Article</span>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
