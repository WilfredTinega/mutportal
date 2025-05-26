import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const today = new Date().getFullYear();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="mb-6">
        <img
          src="https://portal.mut.ac.ke/uploads/60f2dc3a-7b61-4544-91a8-af2f8fa7d9c9.png?v=owI7j1YJIb_ys2wg_aWc9iUu37eDpGcwvFn8cReKebk"
          alt="logo"
          className="w-[150px] h-[150px] mx-auto"
        />
      </div>

      <h1 className="text-4xl font-bold text-green-600 mb-2">Hi, welcome back</h1>
      <p className="text-lg text-gray-700 mb-6">Please fill in your details to log in</p>

      <form className="bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-8 rounded-lg shadow-lg text-left">
        <div className="mb-6">
          <label htmlFor="username" className="block font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Student No/ Employee No"
            required
            className="w-full border border-gray-300 p-2 text-base rounded focus:outline-none placeholder-opacity-70"
          />

          <label htmlFor="password" className="block font-semibold mt-4 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            required
            className="w-full border border-gray-300 p-2 text-base rounded focus:outline-none placeholder-opacity-70"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex items-center mb-2 sm:mb-0">
            <input type="checkbox" id="remember" name="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
          </div>
          <div>
            <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-blue-900 text-white font-bold py-2 rounded transition-colors"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="mb-2">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-green-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-green-600 font-medium">
          &copy; {today} - ABNO softwares international
        </p>
      </div>
    </div>
  );
};

export default Login;
