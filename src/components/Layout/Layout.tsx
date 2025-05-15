import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <nav className="layout__nav" role="navigation">
        <ul className="layout__nav-list">
          <li className="layout__nav-item">
            <Link to="/client" className="layout__nav-link">
              Client
            </Link>
          </li>
          <li className="layout__nav-item">
            <Link to="/practitioner" className="layout__nav-link">
              Practitioner
            </Link>
          </li>
        </ul>
      </nav>
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};
