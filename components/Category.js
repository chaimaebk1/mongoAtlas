import React from "react";

const Category = ({ category, categoryCount }) => {
  return (
    <>
      <h3 className=" text-2xl block mt-10 items-center" style={{color : "rgb(30, 25, 22)" , fontWeight : "bolder" , position: "relative" , left: "2%"}}>
        {category}
      </h3>
      <span className="mt-3 text-sm text-gray-500" style={{color : "rgb(30, 25, 22)" , position: "relative" , left: "2%"}}>{categoryCount}</span>
    </>
  );
};

export default Category;
