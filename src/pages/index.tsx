import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { useState, useEffect } from "react";

import BottomNav from "../components/BottomNav";
import NewsCard from "../components/NewsCard";

import newsData from '../mocked_data/data';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNews = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex;
      if (direction === "up") {
        newIndex = prevIndex === 0 ? newsData.length - 1 : prevIndex - 1;
      } else {
        newIndex = (prevIndex + 1) % newsData.length;
      }
      return newIndex;
    });
  };

  return (
    <Layout>
      <Seo />

      <main className="text-black">
        <div className="pt-16 pb-4 flex flex-col items-center">
          <h1 className="text-4xl font-semibold mb-2 ">Dripper News</h1>
          <h2 className="text-2xl font-medium">Latest News</h2>
        </div>
        <div className="flex justify-center">
          <NewsCard index={currentIndex} />
        </div>

        <BottomNav scrollNewsUp={() => scrollNews("up")} scrollNewsDown={() => scrollNews("down")} />
      </main>
    </Layout>
  );
}
