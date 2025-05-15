import { Link } from "react-router-dom";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar" role="complementary">
      <nav className="sidebar__nav" role="navigation">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <Link to="/client" className="sidebar__nav-link">
              Client
            </Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/practitioner" className="sidebar__nav-link">
              Practitioner
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
