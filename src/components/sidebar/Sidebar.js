import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [openAccordions, setOpenAccordions] = useState({
    dashboards: true,
    sales: true,
    applications: false,
    ecommerce: false,
  });

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (key) => {
    setOpenAccordions({
      ...openAccordions,
      [key]: !openAccordions[key],
    });
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarExpanded(false);
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <>
      <button
        className={styles.hamburgerButton}
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list"></i>
      </button>

      <div
        className={`${styles.mobileOverlay} ${
          isSidebarExpanded ? styles.active : ""
        }`}
        onClick={closeSidebar}
      ></div>

      <div
        className={`${styles.sidebar} ${
          isSidebarExpanded ? styles.expanded : ""
        }`}
      >
        <div className={styles.sidebarHeader}>
          <div>
            <i className="bi bi-grid-fill me-2"></i>
            <span className="fw-bold">Tangerine-digital Dashboard </span>
          </div>

          {isMobile && isSidebarExpanded && (
            <button
              className={styles.closeButton}
              onClick={closeSidebar}
              aria-label="Close navigation"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          )}
        </div>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            <img
              className={styles.avatar}
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt=""
            />
          </div>
          <span>Jonathan Kim</span>
        </div>

        <div className={styles.sidebarMenu}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <div
                className={`${styles.navLink} ${
                  openAccordions.dashboards ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("dashboards")}
              >
                <div>
                  <i className="bi bi-speedometer2 me-2"></i>
                  <span>Dashboards</span>
                </div>
                <i
                  className={`bi ${
                    openAccordions.dashboards
                      ? "bi-chevron-down"
                      : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              <div
                className={`${styles.accordionCollapse} ${
                  openAccordions.dashboards ? styles.show : styles.collapse
                }`}
              >
                <ul className={styles.nestedNavList}>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i
                        className={`bi bi-circle-fill me-2 ${styles.smallIcon}`}
                      ></i>
                      <span>Analytics</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i
                        className={`bi bi-circle-fill me-2 ${styles.smallIcon}`}
                      ></i>
                      <span>Sales</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i
                        className={`bi bi-circle-fill me-2 ${styles.smallIcon}`}
                      ></i>
                      <span>Performance</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                <i className="bi bi-bar-chart-line me-2"></i>
                <span>Analytics</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <div
                className={`${styles.navLink} ${
                  openAccordions.sales ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("sales")}
              >
                <div>
                  <i className="bi bi-cart-fill me-2"></i>
                  <span>Sales</span>
                </div>
                <i
                  className={`bi ${
                    openAccordions.sales
                      ? "bi-chevron-down"
                      : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              <div
                className={`${styles.accordionCollapse} ${
                  openAccordions.sales ? styles.show : styles.collapse
                }`}
              >
                <ul className={styles.nestedNavList}>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-graph-up me-2 small"></i>
                      <span>Overview</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-people me-2 small"></i>
                      <span>Customers</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-box me-2 small"></i>
                      <span>Products</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-receipt me-2 small"></i>
                      <span>Orders</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                <i className="bi bi-database-fill me-2"></i>
                <span>Assets</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                <i className="bi bi-file-earmark me-2"></i>
                <span>Pages</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <div
                className={`${styles.navLink} ${
                  openAccordions.applications ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("applications")}
              >
                <div>
                  <i className="bi bi-layers me-2"></i>
                  <span>Applications</span>
                </div>
                <i
                  className={`bi ${
                    openAccordions.applications
                      ? "bi-chevron-down"
                      : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              <div
                className={`${styles.accordionCollapse} ${
                  openAccordions.applications ? styles.show : styles.collapse
                }`}
              >
                <ul className={styles.nestedNavList}>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-calendar-event me-2 small"></i>
                      <span>Calendar</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-chat-dots me-2 small"></i>
                      <span>Messages</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-envelope me-2 small"></i>
                      <span>Email</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-kanban me-2 small"></i>
                      <span>Kanban</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.navItem}>
              <div
                className={`${styles.navLink} ${
                  openAccordions.ecommerce ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("ecommerce")}
              >
                <div>
                  <i className="bi bi-shop me-2"></i>
                  <span>Ecommerce</span>
                </div>
                <i
                  className={`bi ${
                    openAccordions.ecommerce
                      ? "bi-chevron-down"
                      : "bi-chevron-right"
                  }`}
                ></i>
              </div>
              <div
                className={`${styles.accordionCollapse} ${
                  openAccordions.ecommerce ? styles.show : styles.collapse
                }`}
              >
                <ul className={styles.nestedNavList}>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-basket2 me-2 small"></i>
                      <span>Products</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-tags me-2 small"></i>
                      <span>Pricing</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-truck me-2 small"></i>
                      <span>Shipping</span>
                    </Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to="#" className={styles.nestedNavLink}>
                      <i className="bi bi-credit-card me-2 small"></i>
                      <span>Checkout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                <i className="bi bi-shield-lock me-2"></i>
                <span>Authentication</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                <i className="bi bi-puzzle me-2"></i>
                <span>Components</span>
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLink}>
                <i className="bi bi-brush me-2"></i>
                <span>Design Log</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
