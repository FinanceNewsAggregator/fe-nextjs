// pages/reward.tsx
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const RewardPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [numSummariesRead, setNumSummariesRead] = useState(0);

  useEffect(() => {
    // Retrieve the number of summaries read from local storage or any other storage you're using
    const storedSummariesRead = localStorage.getItem('numSummariesRead');
    const summariesRead = storedSummariesRead ? parseInt(storedSummariesRead, 10) : 0;
    setNumSummariesRead(summariesRead);

    // Show confetti animation if the user has read 20 or more summaries
    if (summariesRead >= 0) {
      setShowConfetti(true);
    }
  }, []);

  return (
    <Layout>
      <Seo title="Reward" />
      <main className="text-black bg-indigo-50 flex h-screen justify-center p-5 m-5">
        <div className="max-w-sm justify-center overflow-hidden rounded-xl bg-white shadow-md py-5 text-black">
          <div className="pt-16 pb-4 flex flex-col items-center bg-wite">
            <h1 className="text-4xl font-semibold mb-2">Congratulations!</h1>
            <h2 className="text-2xl font-medium">
              You've read {numSummariesRead} summaries!
            </h2>
          </div>
          {showConfetti && (
            <div className="w-full h-screen">
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500}
              />
            </div>

          )}</div>
      </main>
    </Layout>
  );
};

export default RewardPage;
