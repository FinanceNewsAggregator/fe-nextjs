import React, { useState } from 'react';
import { API_BASE_URL } from '../../config';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const registerUser = async (email: string, password: string) => {
      const response = await fetch(`${API_BASE_URL}api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        window.location.href = '/src/pages/index.tsx';
      } else {
        const errorData = await response.json();
        const errorMessageElement = document.getElementById('errorMessage');
        if (errorMessageElement) {
          errorMessageElement.textContent = errorData.detail;
        }
      }
    };

    await registerUser(email, password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50">
      <div className="flex-col h-screen items-center justify-center bg-white px-4 mb-3 text-black">
        <div className="container mx-auto h-screen mb-5 max-w-2xl flex-col bg-white py-6">
          <h1 className="text-4xl font-bold mb-3 text-black">Sign Up</h1>
          <form onSubmit={handleSubmit} className="container mx-auto h-screen mb-5 max-w-2xl flex-col bg-white p-8 rounded shadow">
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
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <p className="text-center mt-4 text-black">
              Already have an account?{' '}
              <a href="/login" className="text-grey-900 underline underline-offset-2 hover:text-grey-300">
                Login
              </a>
            </p>
            <p id="errorMessage" className="text-red-500 text-center mt-2"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
