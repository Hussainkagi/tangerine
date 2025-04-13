import React from "react";

const StatCard = ({ title, value, change, timeframe }) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="text-muted small mb-1">{title}</div>
        <h5 className="card-title mb-1">{value}</h5>
        <div className={`small ${isPositive ? "text-success" : "text-danger"}`}>
          {change} <span className="text-muted">last {timeframe}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
