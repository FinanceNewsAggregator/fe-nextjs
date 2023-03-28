import dynamic from 'next/dynamic';
import * as React from 'react';
import { useEffect, useRef, useState } from "react";

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CombinedCard from "../components/CombinedCard";
import combinedData from '../mocked_data/combinedData';
import BottomNav from '@/components/BottomNav';

const ReactAnimatedProgressBar = dynamic(
  () => import('react-animated-progress-bar'),
  { ssr: false }
);

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(10);
  const timerRef = useRef(null);

  const scrollNews = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % combinedData.length;
      return newIndex;
    });
  };

  const handleButtonClick = (direction) => {
    clearInterval(timerRef.current);

    setCurrentIndex((prevIndex) => {
      let newIndex;
      if (direction === "previous") {
        newIndex = prevIndex === 0 ? combinedData.length - 1 : prevIndex - 1;
      } else {
        newIndex = (prevIndex + 1) % combinedData.length;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const updateCounter = () => {
      setCounter((prevCounter) => {
        if (prevCounter === 1) {
          scrollNews();
          return 10;
        } else {
          return prevCounter - 1;
        }
      });
    };

    timerRef.current = setInterval(updateCounter, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

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
              <ReactAnimatedProgressBar
                width="100%"
                height="5px"
                rect
                fontColor="black"
                percentage={`${(10 - counter) * 10}`}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="#e6e6e6"
                trackBorderColor="#e6e6e6"
                trackBorderWidth="1px"
                trackBorderRadius="20px"
                trackColor="#3a3a3a"
                trackWidth="100%"
                trackRemainingPathColor="#e6e6e6"
                pointerRadius="0px"
                pointerColor="#3a3a3a"
                pointerBorderWidth="0px"
                pointerBorderColor="transparent"
              />
              <CombinedCard item={combinedData[currentIndex]} />
              <div className="mt-3 flex space-x-4">
                <button onClick={() => handleButtonClick("previous")} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Previous</button>
                <button onClick={() => handleButtonClick("next")} className="w-full rounded-md bg-black py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Next</button>
              </div>
              <div className="mt-3 flex-col space-x-4">
                <p className="my-2">Changing content in {counter} seconds</p>
                <BottomNav scrollNews={undefined} />

              </div>

            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}
