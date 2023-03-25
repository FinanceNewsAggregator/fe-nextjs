import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";

import BottomNav from "../components/BottomNav";
import NewsCard from "../components/NewsCard";

import Footer from '@/components/Footer';
import Home from '@/components/Home';
import TagsPage from '@/components/TagsPage';

export default function HomePage() {
  const [news, setnews] = useState([]);

  const getNews = (length) => {
    let newNews = Array.from(Array(length).keys());
    setnews((oldNews) => [...oldNews, ...newNews]);
  };

  useEffect(() => {
    getNews(3);
  }, []);

  return (
    <Layout>
      <Seo />

      <main>
        <div className="slider-container">
          {news.length > 0 ? (
            <>
              {news.map((newsItem, id) => (
                <NewsCard key={id}
                  index={id + 1}
                  lastNewsIndex={news.length - 1}
                  getVideos={getNews} />
              ))}
            </>
          ) : (
            <>
              <h1>Nothing to show here</h1>
            </>
          )}
        </div>

        <BottomNav />
      </main>
    </Layout>
  );
}
