import React from 'react';
import { Link } from 'react-router-dom';
import { Assets } from '../assets/Assets';

const Signup = () => {
  const today = new Date().getFullYear();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <img
        src={Assets.Icon}
        alt="logo"
        className="w-[150px] h-[150px] mb-6"
      />

      <h1 className="text-3xl font-bold text-green-600 mb-2">Account Registration</h1>
      <p className="text-lg text-gray-700 mb-6">To sign up, kindly fill the form below</p>

      <form className="bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-8 rounded-lg shadow-lg text-left">
        <div className="mb-6">
          <label htmlFor="username1" className="block font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            name="username1"
            id="username1"
            placeholder="Student No/ Employee No"
            required
            className="w-full border border-gray-300 p-2 rounded text-base focus:outline-none placeholder-opacity-70"
          />

          <label htmlFor="password1" className="block font-semibold mt-4 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password1"
            id="password1"
            placeholder="Enter your Password"
            required
            className="w-full border border-gray-300 p-2 rounded text-base focus:outline-none placeholder-opacity-70"
          />

          <label htmlFor="password2" className="block font-semibold mt-4 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm your Password"
            required
            className="w-full border border-gray-300 p-2 rounded text-base focus:outline-none placeholder-opacity-70"
          />
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Account Type</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="student" value="student" className="accent-green-600" />
              <span>Student</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="student" value="employee" className="accent-green-600" />
              <span>Employee</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-blue-900 text-white font-bold py-2 rounded transition-colors"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="mb-2">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 font-semibold hover:underline">
            Log In
          </Link>
        </p>
        <p className="text-green-600 font-medium">
          &copy; {today} - ABNO Softwares International
        </p>
      </div>
    </div>
  );
};

export default Signup;
