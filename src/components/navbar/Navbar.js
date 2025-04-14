import React, { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-4 shadow-sm">
      <div className="container-fluid">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item active">
            <i className="bi bi-house-door-fill"></i>
          </li>
          <li className="breadcrumb-item">
            <a href="/">Components</a>
          </li>
          <li className="breadcrumb-item active">Sales</li>
        </ol>
        <div className="d-flex align-items-center">
          <div className="search-bar me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
          </div>
          <div className="icons d-flex align-items-center">
            <div
              className={`mx-2 position-relative ${styles.nav__icon}`}
              onMouseEnter={() => showTooltip("settings")}
              onMouseLeave={hideTooltip}
            >
              <i className="bi bi-gear-fill"></i>
              <Tooltip
                id="settings"
                text="Settings"
                isVisible={activeTooltip === "settings"}
              />
            </div>
            <div
              className={`mx-2 position-relative ${styles.nav__icon}`}
              onMouseEnter={() => showTooltip("notifications")}
              onMouseLeave={hideTooltip}
            >
              <i class="bi bi-person-circle"></i>
              <Tooltip
                id="notifications"
                text="user profile"
                isVisible={activeTooltip === "notifications"}
              />
            </div>
            <div
              className={`mx-2 position-relative ${styles.nav__icon}`}
              onMouseEnter={() => showTooltip("mail")}
              onMouseLeave={hideTooltip}
            >
              <i className="bi bi-envelope-fill position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </i>
              <Tooltip
                id="mail"
                text="Mail"
                isVisible={activeTooltip === "mail"}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
