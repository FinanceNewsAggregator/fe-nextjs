import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import newsData from '../mocked_data/data';

const BottomNav = ({ scrollNews }) => (
  <nav className="navbar fixed-bottom navbar-light bg-light">
    <a className="navbar-brand" href="/" onClick={() => scrollNews('up')}>
      <FontAwesomeIcon icon={faChevronUp} />
    </a>
    <a className="navbar-brand" href="/">
      <FontAwesomeIcon icon={faBookmark} style={{ color: '#ffffff' }} />
    </a>
    {newsData && newsData.length > 0 && (
      <Link href={`/article?id=${newsData[0].id}`} className="navbar-brand">
        <FontAwesomeIcon icon={faPlus} />
      </Link>
    )}
    <a className="navbar-brand" href="/" onClick={() => scrollNews('down')}>
      <FontAwesomeIcon icon={faChevronDown} />
    </a>
  </nav>
);

export default BottomNav;

