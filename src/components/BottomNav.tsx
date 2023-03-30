import { faBars, faBookmark, faChevronDown, faChevronUp, faCirclePlus, faHouse, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import newsData from '../mocked_data/data';

const BottomNav = ({ scrollNews }) => (

  <div className="flex items-center justify-center max-w-sxl absolute inset-x-0 bottom-0">
    <hr />
    <div className="w-full max-w-sxl mx-auto items-center justify-center mt-4">
      <div className=" bg-white border-t-2 border-grey-50 ">
        <div className="flex">
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#000000", }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faBookmark} style={{ color: "#000000", }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faCirclePlus} size="2xl" style={{ color: "#000000", }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} />
                <span className="block text-xs pb-2"></span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-gray-50 rounded-full"></span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-white group-hover:text-gray-50">
              <span className="block px-1 pt-1 pb-1">
                <FontAwesomeIcon icon={faBars} style={{ color: "#000000", }} />
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

