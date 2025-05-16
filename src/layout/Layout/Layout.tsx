import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.scss";
import { useEffect, useRef } from "react";

export const Layout = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <main ref={mainRef} className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};
