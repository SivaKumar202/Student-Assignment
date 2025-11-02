import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [role, setRole] = useState(" ");
  const [identifier, setIdentifier] = useState(" ");
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const role = JSON.parse(localStorage.getItem("role"));
    if (role) {
      setRole(role);
    }
  }, []);

  useEffect(() => {
    const identifier = JSON.parse(localStorage.getItem("identifier"));
    if (identifier) {
      setIdentifier(identifier);
    }
  }, []);

  useEffect(() => {
    const assignments = JSON.parse(localStorage.getItem("assignments"));
    if (assignments) {
      setAssignments(assignments);
    }
  }, []);
  console.log(assignments);

  const handleindex = () => {
    localStorage.removeItem(assignments.index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 text-center">
          Admin Dashboard ({identifier})
        </h1>
        <Link to="/CreateAssignment">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
            + Create New Assignment
          </button>
        </Link>
      </div>

      {/* Assignment List */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Assignments
        </h2>
        <div className="space-y-6 hover:cursor-pointer">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg p-6 relative"
            >
              {/* Title & Icons */}
              <div className="flex-col justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {assignment.title}
                </h3>
                <p className="text-sm font-semibold text-gray-800">
                  {assignment.description}
                </p>

                {/* <div className="flex space-x-3"> */}
                  {/* Delete Icon */}
                  {/* <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={handleindex}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button> */}
                {/* </div> */}
              </div>

              {/* Details */}
              <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
              <p className="text-sm text-gray-600">createdAt: {assignment.createdAt}</p>
              <p className="text-sm text-gray-600 mb-4">
                 Drive Link :{assignment.driveLink} 
              </p>

              {/* Progress Bar
              <div>
                <p className="text-sm text-gray-700 mb-1">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">
                  {assignment.progress}%
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
