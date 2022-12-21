import React from "react";

export const Navicon = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition-all duration-300 ">
      <div className="bg-white  bg-no-repeat rounded-full w-8 h-8 flex justify-center items-center">
        <div>{icon}</div>
      </div>
      <div className="text-lg">{title}</div>
    </div>
  );
};
