import { faBookmark, faChevronDown, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, faHouse } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import newsData from '../mocked_data/data';

const BottomNav = ({ scrollNews }) => (

  <div className=" bg-white flex items-center justify-center">
    <hr />
    <div className="w-full max-w-md mx-auto mt-4">
      <div className=" bg-slate-800 shadow-lg rounded-md ">
        <div className="flex">
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <span className="block text-xs pb-2">Home</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">

                <span className="block text-xs pb-2">Explore</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">

                <span className="block text-xs pb-2">Search</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">

                <span className="block text-xs pb-2">Settings</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>

);

export default BottomNav;

