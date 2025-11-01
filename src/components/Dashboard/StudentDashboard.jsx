import React from 'react';
import { assignments } from '../../data/data';

// const assignments = [
//   {
//     title: 'History Essay - The Roman Empire',
//     dueDate: 'Oct 26, 2023',
//     status: 'Overdue',
//     description: 'A short brief about the essay requirements and its historical context.',
//     progress: 80,
//     actionLabel: 'Submit Now',
//     statusColor: 'text-red-600',
//     progressColor: 'bg-orange-500',
//     buttonColor: 'bg-blue-600 hover:bg-blue-700',
//   },
//   {
//     title: 'Calculus Problem Set 3',
//     dueDate: 'Nov 15, 2023',
//     status: 'Submitted',
//     description: 'A short brief about the problem set and the topics covered.',
//     progress: 100,
//     actionLabel: 'View Submission',
//     statusColor: 'text-green-600',
//     progressColor: 'bg-green-500',
//     buttonColor: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
//   },
// ];

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800"></h2>
        <p className="text-gray-600 mt-1">5 Completed Assignments</p>
      </div>

      {/* Assignments Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Assignments</h3>
        <div className="space-y-6">
          {assignments.map((assignment, index) => (
            <div key={index} className="bg-white shadow-sm rounded-lg p-6">
              {/* Status and Title */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`${assignment.statusColor} font-semibold`}>
                    {assignment.status === 'Overdue' ? '⚠️ Overdue:' : '✅ Due:'}
                  </span>
                  <span className="text-gray-700">{assignment.dueDate}</span>
                </div>
                <span className="text-sm px-2 py-1 rounded-full border font-medium mt-2 md:mt-0 
                  ${assignment.status === 'Overdue' ? 'text-red-600 border-red-600' : 'text-green-600 border-green-600'}">
                  {assignment.status}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{assignment.title}</h4>
              <p className="text-gray-600 mb-4">{assignment.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-1">Progress: {assignment.progress}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${assignment.progressColor} h-2 rounded-full`}
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`px-4 py-2 rounded-md text-white font-medium ${assignment.buttonColor}`}
              >
                {assignment.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
