import React from 'react';

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return <div>
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Dripper News</a>
      </div>
      <div>
        <a href="/one" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</a>
        <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">News</a>
        <a href="/three" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Featured</a>
      </div>
    </nav>
  </div>;
}

export default Navbar;