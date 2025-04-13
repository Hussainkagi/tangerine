import React from "react";

const Card = ({ title, children, className = "", headerRight = null }) => {
  return (
    <div className={`card shadow-sm mb-4 ${className}`}>
      {title && (
        <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
          <h6 className="mb-0">{title}</h6>
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
