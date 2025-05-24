import React from "react";

export const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }: any) => (
  <div className="p-2">{children}</div>
);
