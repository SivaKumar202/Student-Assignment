import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {assignments} from "../../data/data"

// const assignments = [
//   {
//     title: 'Calculus I: Problem Set 4',
//     dueDate: 'Oct 26, 2023',
//     students: 32,
//     progress: 75,
//   },
//   {
//     title: 'History of Art: Essay',
//     dueDate: 'Nov 5, 2023',
//     students: 28,
//     progress: 40,
//   },
//   {
//     title: 'Intro to Programming: Final Project',
//     dueDate: 'Nov 15, 2023',
//     students: 45,
//     progress: 10,
//   },
// ];

const AdminDashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Dashboard</h1>
        <Link to="/CreateAssignment">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
          + Create New Assignment
        </button>
        </Link>
      </div>

      {/* Assignment List */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Assignments</h2>
        <div className="space-y-6">
          {assignments.map((assignment, index) => (
            <div key={index} className="bg-white shadow-sm rounded-lg p-6 relative">
              {/* Title & Icons */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                <div className="flex space-x-3">
                  {/* Delete Icon */}
                  <button className="text-gray-500 hover:text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
              <p className="text-sm text-gray-600 mb-4">Assigned: {assignment.students} Students</p>

              {/* Progress Bar */}
              <div>
                <p className="text-sm text-gray-700 mb-1">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">{assignment.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
