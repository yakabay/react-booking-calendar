import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import "./Sidebar.scss";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar" role="complementary">
      <nav className="sidebar__nav" role="navigation">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <Link
              to="/client"
              className={clsx("sidebar__nav-link", {
                "sidebar__nav-link--active": location.pathname === "/client",
              })}
            >
              Client
            </Link>
          </li>
          <li className="sidebar__nav-item">
            <Link
              to="/practitioner"
              className={clsx("sidebar__nav-link", {
                "sidebar__nav-link--active": location.pathname === "/practitioner",
              })}
            >
              Practitioner
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
