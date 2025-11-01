import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreateAssignmentForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [driveLink, setDriveLink] = useState("");

  const handleCreate = () => {
    if (!title || !dueDate || !driveLink) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const newAssignment = {
      title,
      description,
      dueDate,
      driveLink,
      students: 0,
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("assignments")) || [];
    localStorage.setItem("assignments", JSON.stringify([...existing, newAssignment]));

    // Reset form
    setTitle("");
    setDescription("");
    setDueDate("");
    setDriveLink("");

    toast.success("Assignment Created");

    setTimeout(() => {
      navigate("/AdminDashboard");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Assignment
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Assignment title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Assignment description"
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Due Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            required
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Google Drive Link */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Google Drive Link
          </label>
          <input
            type="url"
            value={driveLink}
            required
            onChange={(e) => setDriveLink(e.target.value)}
            placeholder="https://drive.google.com/..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-4">
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition hover:cursor-pointer"
            onClick={handleCreate}
          >
            Create Assignment
          </button>
          <ToastContainer />
          <button
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition hover:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentForm;
