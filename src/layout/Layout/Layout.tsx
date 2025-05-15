import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};
