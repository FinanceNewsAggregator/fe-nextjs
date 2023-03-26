import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const NewsLenght: React.FC = () => {
  return <div className=" group py-10 bg-gray-100  max-w-sm flex justify-center items-center  mx-auto ">
    <div className="flex-col w-full max-w-sm items-center justify-center bg-white p-8 rounded shadow px-4">
      <h1 className="text-2xl  mb-5 text-gray-700">How many time you are planning to spend reading.</h1>
      <div className="p-5">
        <button className="w-full rounded-md bg-white  border-2 border-black py-2 text-black hover:bg-black hover:text-white hover:shadow-md duration-75">1 Minute</button>
      </div>
      <div className="p-5">
        <button className="w-full rounded-md bg-bwhite border-2 border-black py-2 text-black  hover:bg-black hover:text-white hover:shadow-md duration-75">5 Minutes</button>

      </div>

      <div className="p-5">

        <button className="w-full rounded-md  bg-white border-2 border-black  py-2 text-black  hover:bg-black hover:text-white hover:shadow-md duration-75">10 Minutes</button>
      </div>
      <hr />
      <div class="p-5">
        <Link href="/select-sources">
          <button class="w-full rounded-md bg-black  py-2 text-indigo-100 hover:bg-gray-400 hover:shadow-md duration-75">Next</button>
        </Link>
        <button class="w-full my-2 rounded-md bg-black  py-2 text-indigo-100 hover:bg-gray-400 hover:shadow-md duration-75">GoBack</button>
      </div>
    </div>

  </div >;
}

export default NewsLenght;