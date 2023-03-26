import Link from 'next/link';
import React from 'react';



const MailNewsletter: React.FC = () => {
  return <div className=" group py-10 bg-gray-100  max-w-sm flex justify-center items-center  mx-auto ">
    <div className="flex-col w-full max-w-sm items-center justify-center bg-white p-8 rounded shadow px-4">
      <h1 className="text-2xl  mb-5 text-gray-700">Select News Sources you Want.</h1>
      <div className="p-5">
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
          <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <label for="toggle" class="text-xs text-gray-700"> <span className="text-black">news@businessinseder.com </span> </label>
      </div>
      <div className="p-5">
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
          <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <label for="toggle" class="text-xs text-gray-700">
          <span className="text-black"> newsletter@wjs.com </span> </label>

      </div>
      <hr />
      <div className="p-5">
        <Link href="/select-media">
          <button className="w-full rounded-md bg-black  py-2 text-indigo-100 hover:bg-gray-400 hover:shadow-md duration-75">Next</button>
        </Link>
        <button className="w-full my-2 rounded-md bg-black  py-2 text-indigo-100 hover:bg-gray-400 hover:shadow-md duration-75">GoBack</button>
      </div>


    </div>

  </div >;
}
export default MailNewsletter;