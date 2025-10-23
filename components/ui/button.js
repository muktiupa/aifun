import React from "react";
import clsx from "clsx";

export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-xl font-medium transition-all duration-200",
        "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md",
        className
      )}
    >
      {children}
    </button>
  );
}
