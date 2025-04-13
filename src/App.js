import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/home";
import styles from "./app.module.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.contentArea}>
          <Navbar />
          <HomePage />
        </div>
      </div>
    </Router>
  );
}

export default App;
