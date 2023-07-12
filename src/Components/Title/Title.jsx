import React from "react";

const Title = ({ main, sub }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-[75px]">
      <p className="text-[#0060FE] font-semibold">{sub}</p>
      <h1 className="text-[42px] dark:text-white font-bold">{main}</h1>
    </div>
  );
};

export default Title;
