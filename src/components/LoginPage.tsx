import Link from 'next/link';
import React, { useState } from 'react';
import { API_BASE_URL } from "../../config";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Save the authentication token
      localStorage.setItem('authToken', data.access);
      // Redirect the user to the desired page after successful login
      // Replace '/dashboard' with the desired route
      window.location.href = '/src/pages/index.tsx';
    } else {
      const errorData = await response.json();
      // Display an error message
      // Replace 'errorMessage' with the appropriate HTML element ID
      const errorMessageElement = document.getElementById('errorMessage');
      if (errorMessageElement) {
        errorMessageElement.textContent = errorData.detail;
      }
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await loginUser(email, password);
  };


  return (
    <div className="flex h-screen items-center justify-center bg-indigo-50">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white text-black">
        <div className="relative flex h-20 w-full justify-center rounded-xl bg-cover" >
        </div>
        <h1 className="text-4xl font-bold mb-3 text-black">Dripper News</h1>
        <p className="text-lg text-center mb-6 text-black">A personalized news platform that provides insightful analysis for tech professionals.</p>
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

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

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
