import React from 'react';

// import { Container } from './styles';

const NewsLenght: React.FC = () => {
  return <div className=" group py-10 bg-gray-100  max-w-sm flex justify-center items-center  mx-auto ">
    <div className="flex-col w-full max-w-sm items-center justify-center bg-white p-8 rounded shadow px-4">
      <h1 className="text-2xl  mb-5 text-gray-700">How many time you are planning to spend reading.</h1>
      <div className="p-5">
        <button className="w-full rounded-md bg-black  py-2 text-indigo-100 hover:bg-gray-500 hover:shadow-md duration-75">1 Minute</button>
      </div>
      <div className="p-5">
        <button className="w-full rounded-md bg-black  py-2 text-indigo-100  hover:bg-gray-500 0 hover:shadow-md duration-75">5 Minutes</button>

      </div>

      <div className="p-5">

        <button className="w-full rounded-md bg-black  py-2 text-indigo-100  hover:bg-gray-500 hover:shadow-md duration-75">10 Minutes</button>
      </div>
    </div>

  </div >;
}

export default NewsLenght;