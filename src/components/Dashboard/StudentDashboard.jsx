import React, { useState, useEffect } from "react";
import { assignments } from "../../data/data";

const StudentDashboard = () => {
  const [role, setRole] = useState(" ");
  const [identifier, setIdentifier] = useState(" ");

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
  console.log(role, identifier);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Student Dashboard
        </h2>
        <h2 className="text-gray-600 mt-1">Email : {identifier}</h2>
      </div>

      {/* Assignments Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Your Assignments
        </h3>
        <div className="flex gap-10 flex-col sm:flex-row md:flex-row lg:flex-row">
          {assignments.map((assignment, index) => (
            <div key={index} className="bg-white shadow-sm rounded-lg p-6">
              {/* Status and Title */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`${assignment.statusColor} font-semibold`}>
                    {assignment.status === "Overdue"
                      ? "⚠️ Overdue:"
                      : "✅ Due:"}
                  </span>
                  <span className="text-gray-700">{assignment.dueDate}</span>
                </div>
                <span
                  className="text-sm px-2 py-1 rounded-full border font-medium mt-2 md:mt-0 
                  ${assignment.status === 'Overdue' ? 'text-red-600 border-red-600' : 'text-green-600 border-green-600'}"
                >
                  {assignment.status}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {assignment.title}
              </h4>
              <p className="text-gray-600 mb-4">{assignment.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-1">
                  Progress: {assignment.progress}%
                </p>
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
