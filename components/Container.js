import React from "react";

const Container = ({ children }) => {
  return (
    <main className="">
      <div className="container mx-auto " >{children}</div>
    </main>
  );
};

export default Container;
