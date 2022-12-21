import React from "react";

export const Navicon = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-all duration-300 ">
      <div className="bg-white bg-no-repeat rounded-full w-10 h-10 flex justify-center items-center">
        <div>{icon}</div>
      </div>
      <div className="text-lg">{title}</div>
    </div>
  );
};
