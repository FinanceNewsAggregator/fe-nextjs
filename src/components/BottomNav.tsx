import React from 'react';
import Link from 'next/link';
import newsData from '../mocked_data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faUpLong, faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

const BottomNav: React.FC = ({ scrollNews }) => {
  return (
    <div>
      <nav className="bottom-nav">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <Link href={`/article?id=${newsData[0].id}`} className="navbar-brand">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
        <a className="navbar-brand" href="/" onClick={scrollNews}>
          <FontAwesomeIcon icon={faUpLong} style={{ color: "#ffffff", }} />
        </a>
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </nav>
    </div>
  );
}

export default BottomNav;
