import React from "react";

const Navbar = ({ onSearch }) => {
  return (
    <div className="bg-emerald-400 p-4 flex items-center justify-between sticky top-0 shadow">
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/okky-rafa-nuggraha-4a6857260/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-3xl font-bold text-white">Catatanku.</span>
        </a>
      </div>
      <div>
        <input
          type="text"
          placeholder="Cari..."
          onChange={(event) => onSearch(event)}
          className="border p-2 rounded-md focus:outline-none focus:border-blue-700"
          aria-label="Cari..."
        />
      </div>
    </div>
  );
};

export default Navbar;
