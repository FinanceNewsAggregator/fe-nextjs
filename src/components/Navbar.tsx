import { faBookmark, faCirclePlus, faEnvelope, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return <div>
    <nav className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between">
        <div className="logo">
          <h1 className="font-bold text-xl">
            <h1>Dripper News</h1>
          </h1>
        </div>
        <div className="icons flex">
          <div className="home-icon mr-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="profile-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </nav>
  </div >;
}

export default Navbar;