import React, { useState } from "react";

const Card = ({ title, children, className = "", headerRight = null }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const showTooltip = (id) => {
    setActiveTooltip(id);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  const Tooltip = ({ id, text, isVisible }) => {
    if (!isVisible) return null;

    return (
      <div
        className="position-absolute bg-dark text-white px-2 py-1 rounded"
        style={{
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.75rem",
          zIndex: 1000,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className={`card shadow-sm mb-4 h-100 ${className}`}>
      {title && (
        <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
          <h6 className="mb-0">{title}</h6>
          <div
            className={`mx-2 position-relative`}
            onMouseEnter={() => showTooltip("info")}
            onMouseLeave={hideTooltip}
          >
            <i className="bi bi-info-circle"></i>
            <Tooltip
              id="info"
              text="charts info"
              isVisible={activeTooltip === "info"}
            />
          </div>
        </div>
      )}
      <div className="card-body d-flex flex-column">{children}</div>
    </div>
  );
};

export default Card;
