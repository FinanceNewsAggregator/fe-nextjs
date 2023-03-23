
import React from 'react';

// import { Container } from './styles';

const Home: React.FC = () => {
  return <div>
    <div class="bg-gray-100">

      <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Get The
            <span class="text-indigo-700">News</span>
            That Matters
          </h1>
          <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
        </div>
        <div class="flex justify-center items-center">
          <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-black transition duration-150 ease-in-out hover:bg-gray-600 lg:text-xl lg:font-bold  rounded-3xl text-white px-4 sm:px-10 border  py-2 sm:py-4 text-sm">SIGN UP</button>
          <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-black lg:text-xl lg:font-bold rounded-3xl hover:text-gray-600 rounded border border-black text-black px-4 sm:px-10 py-2 sm:py-4 text-sm">LOG IN</button>
        </div>

      </div>

    </div>
  </div>;
}

export default Home;