import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faComment, faUser, faHome } from "@fortawesome/free-solid-svg-icons";

const BottomNav: React.FC = () => {
  return (
    <div>
      <nav className="bottom-nav">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faPlus} />
        </a>
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faComment} />
        </a>
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </nav>
    </div>
  );
}

export default BottomNav;
