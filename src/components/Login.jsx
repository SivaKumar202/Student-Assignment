import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function LoginForm() {
  const [role, setRole] = useState("student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
  localStorage.setItem('role', JSON.stringify(role));
}, [role]);
useEffect(() => {
  localStorage.setItem('identifier', JSON.stringify(identifier));
}, [identifier]);

  const navigate = useNavigate();

  const canSubmit = identifier.trim().length > 0 && password.length > 0;

  function handleLogin(e) {
    e.preventDefault();

    setError("");
    if (!canSubmit) {
      setError("Please fill the required fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast(`Logged in as ${role} — ${identifier}`);

      if (role === "student") {
        setTimeout(() => {
          navigate("/studentDashboard");
        }, 2000);
      }
      if (role === "admin") {
        setTimeout(() => {
          navigate("/AdminDashboard");
        }, 2000);
      }
    }, 800);
  }

  return (
    <div className="flex justify-center my-30">
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold text-gray-900">
          Log in to your account
        </h1>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              I am a:
            </label>

            <div className="bg-gray-100 rounded-full p-1 inline-flex gap-1">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer ${
                  role === "student"
                    ? "bg-white shadow-sm text-indigo-600"
                    : "text-gray-600"
                }`}
                aria-pressed={role === "student"}
              >
                Student
              </button>

              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer ${
                  role === "admin"
                    ? "bg-white shadow-sm text-indigo-600"
                    : "text-gray-600"
                }`}
                aria-pressed={role === "admin"}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Identifier */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              name="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter your email or username"
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Password*/}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
            </div>

            <div className="relative mt-1">
              <input
                type={showPwd ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />

              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                aria-label={showPwd ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPwd ? (
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
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.05 0 2.057.156 3 .445M3 3l18 18"
                    />
                  </svg>
                ) : (
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
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Login button */}
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              disabled={!canSubmit || loading}
              className={`w-full rounded-xl py-3 text-white font-medium transition disabled:opacity-60 ${
                canSubmit
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-300"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <ToastContainer />
          </div>

          {/* bottom hint */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
