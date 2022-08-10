import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <div className="text-gray-400">
        <p>{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
