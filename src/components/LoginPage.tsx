import Link from 'next/link';
import React, { useState } from 'react';
import DipperLogo from 'next/DripperLogo';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to handle authentication and submission
  };

  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white text-black">
        <div className="relative flex h-20 w-full justify-center rounded-xl bg-cover" >
          {/* <img src="https://www.webxpro.es/wp-content/uploads/2014/11/twitter.jpg" class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" /> */}
          <div className="mt-2 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={'/DripperLogo.jpg'} alt="" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3 text-black">Dripper News</h1>
        <p className="text-lg text-center mb-6 text-black">Dripper News: Your Personalized Tech News Hub</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded shadow">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <Link href="/news-lenght">
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </Link>
          <p className="text-center mt-4 text-black">
            Don't have an account?{' '}
            <a href="/signup" className="text-grey-900 underline underline-offset-2 hover:text-grey-300">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
