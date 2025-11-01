import React from "react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Welcome to Joineeazy
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Please select your role to continue.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Student Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition ">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
            {/* Graduation Cap Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422A12.083 12.083 0 0118 20H6a12.083 12.083 0 01-.16-9.422L12 14z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            I'm a Student
          </h2>
          <p className="text-gray-600 text-center">
            View your courses, submit assignments, and track your progress.
          </p>
        </div>

        {/* Admin Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition ">
          <div className="bg-purple-100 text-purple-600 p-3 rounded-full mb-4">
            {/* Lock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 11h14v10H5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            I'm an Admin
          </h2>
          <p className="text-gray-600 text-center">
            Manage courses, review submissions, and oversee student accounts.
          </p>
        </div>
      </div>
      <div className="flex justify-center align-middle m-10">
        <Link to="/login">
        <button className="bg-blue-400 p-5 rounded-2xl text-white text-xl hover:shadow-xl transition cursor-pointer">Login to Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default RoleSelection;
