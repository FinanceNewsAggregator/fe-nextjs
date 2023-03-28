import { faBars, faBookmark, faChevronDown, faChevronUp, faCirclePlus, faHouse, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import newsData from '../mocked_data/data';

const BottomNav = ({ scrollNews }) => (

  <div className=" bg-white flex items-center justify-center">
    <hr />
    <div className="w-full max-w-md mx-auto items-center justify-center mt-4">
      <div className=" bg-slate-800 shadow-lg rounded-md ">
        <div className="flex">
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faHouse} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faBookmark} style={{ color: '#ffffff' }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faCirclePlus} size="2xl" style={{ color: "#ffffff", }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} />
                <span className="block text-xs pb-2"></span>
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

