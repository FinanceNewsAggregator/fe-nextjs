import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { useState } from "react";

import CombinedCard from "../components/CombinedCard";
import combinedData from '../mocked_data/combinedData';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNews = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex;
      if (direction === "up") {
        newIndex = prevIndex === 0 ? combinedData.length - 1 : prevIndex - 1;
      } else {
        newIndex = (prevIndex + 1) % combinedData.length;
      }
      return newIndex;
    });
  };

  return (
    <Layout>
      <Seo />

      <main className="text-black">
        <div class="flex-col h-screen items-center justify-center bg-indigo-50 px-4">
          <div className="pt-16 pb-4 flex flex-col items-center">
            <h1 className="text-4xl font-semibold mb-2 ">Dripper News</h1>
            <h2 className="text-2xl font-medium">Latest News</h2>
          </div>
          <div className="flex justify-center">
            <div className="w-96 overflow-hidden rounded-xl bg-white p-5">
              <CombinedCard item={combinedData[currentIndex]} />
              <div className="mt-3 flex space-x-4">
                <button onClick={() => scrollNews("up")} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Previous</button>
                <button onClick={() => scrollNews("down")} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

