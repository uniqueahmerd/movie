import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      // ignore network error for logout
    }
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-400">
        MovieRec
      </Link>
      <div className="flex items-center gap-4">
        {token ? (
          <>
            <Link to="/" className="hover:underline">
              Home
            </Link>
            {user && (
              <span className="text-sm text-gray-300 mr-2">
                {user.name || user.email}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
