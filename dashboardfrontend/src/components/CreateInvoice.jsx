import React from 'react';

const CreateInvoice = () => {
  return (
   <div className="bg-white rounded-2xl p-6 my-4 mx-4 text-center shadow-md">
  <div className="flex flex-col items-center justify-center">
    {/* Gradient Circle with + */}
    <div className="w-12 h-12 flex items-center justify-center rounded-full 
                    bg-gradient-to-r from-pink-500 to-indigo-500 p-[2px]">
      <div className="w-full h-full flex items-center justify-center rounded-full bg-white">
        <svg xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6"
             fill="none" viewBox="0 0 24 24" stroke="url(#plusGradient)">
          <defs>
            <linearGradient id="plusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DD2A7B" />
              <stop offset="50%" stopColor="#9747FF" />
              <stop offset="100%" stopColor="#334CCA" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>

    {/* Title */}
    <h2 className="mt-4 text-lg font-semibold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
      Create New Invoice
    </h2>

    {/* Subtitle */}
    <p className="text-sm text-gray-500 mt-1">
      Start by creating and sending new invoice
    </p>
  </div>
</div>



  );
};

export default CreateInvoice;