import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CombinedCard from "../components/CombinedCard";
import combinedData from '../mocked_data/combinedData';
import BottomNav from '@/components/BottomNav';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className="text-black">
        <div className="flex-col h-screen items-center justify-center bg-indigo-50 px-4 mb-3">
          <div className="relative container mx-auto h-screen mb-5 max-w-2xl flex-col bg-white py-6 text-black shadow-2xl">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-xl bg-white p-5">
                <Navbar />
                <div className="pt-4 pb-4 flex flex-col items-center">
                  <h1 className="text-4xl font-semibold mb-2">Dripper News</h1>
                  <h2 className="text-2xl font-medium">Latest News</h2>
                </div>
                <div className="relative flex h-48 w-full justify-center rounded-xl bg-cover">
                  <img src='https://img2.rtve.es/i/?w=1600&i=1678710873868.jpg' className="absolute flex h-48 w-full justify-center rounded-xl bg-cover" />
                </div>
                <div className="flex items-center px-4 py-5">
                  <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150" />
                  <div className="ml-3 ">
                    <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                    <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                  </div>
                </div>
                <hr />
                <div className="max-h-[calc(100vh-430px)] overflow-y-auto">
                  {combinedData.map((item, index) => (
                    <div key={index} className="mb-4">
                      <CombinedCard item={item} />
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