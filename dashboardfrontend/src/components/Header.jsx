import React from 'react';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[#edadd7] shadow-sm transition-transform duration-300">
      <div className="flex items-center">
        <button className="text-gray-600 mr-4" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
      <div className="rounded-full overflow-hidden w-10 h-10">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User profile picture" />
      </div>
    </div>
  );
};

export default Header;