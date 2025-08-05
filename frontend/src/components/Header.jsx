import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow p-6 flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-3xl font-extrabold text-purple-700 tracking-tight">🎬 Movie Explorer</h1>
      <span className="mt-2 sm:mt-0 text-xs text-gray-500">
        Backend: <span className="font-mono text-blue-600">{import.meta.env.VITE_BACKEND_URL}</span>
      </span>
    </header>
  );
}

export default Header;
