import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-md mt-8">
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200  border-r-0 ml-0 rounded-l hover:text-white" style={{backgroundColor : "#eaa636"}}
        >
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200  border-r-0 hover:text-white" style={{color : "#eaa636"}}
        >
          <span>1</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200  border-r-0  hover:text-white" style={{ color : "#eaa636"}}
        >
          <span>2</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200  border-r-0  hover:text-white"  style={{ color : "#eaa636"}}
        >
          <span>3</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200  rounded-r  hover:text-white" style={{backgroundColor : "#eaa636"}}
        >
          <span>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
