import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <nav className="layout__nav" role="navigation">
        <ul className="layout__nav-list">
          <li className="layout__nav-item">
            <Link to="/client" className="layout__nav-link">
              Client View
            </Link>
          </li>
          <li className="layout__nav-item">
            <Link to="/practitioner" className="layout__nav-link">
              Practitioner View
            </Link>
          </li>
        </ul>
      </nav>
      <main className="layout__main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};
