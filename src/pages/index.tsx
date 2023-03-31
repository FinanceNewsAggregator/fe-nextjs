import React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import NewsCard from "../components/NewsCard";
import { newsData } from '../mocked_data/data'; // Import newsData from the data file
import BottomNav from '@/components/BottomNav';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className="text-black">
        <div className="flex-col h-screen items-center justify-center bg-white px-4 mb-3">
          <div className="relative container mx-auto h-screen mb-5 max-w-2xl flex-col bg-white py-6 text-black">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-xl bg-white p-5">
                <Navbar />
                <div className="max-h-[calc(200vh-430px)] overflow-y-auto">
                  {newsData.results.map((news, index) => (
                    <div key={index} className="mb-4">
                      <NewsCard news={news} />
                    </div>
                  ))}
                </div>
                <div className="">
                  <BottomNav scrollNews={undefined} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
