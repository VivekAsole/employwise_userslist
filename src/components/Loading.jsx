import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
