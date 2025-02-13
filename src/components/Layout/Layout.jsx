// src/components/Layout.jsx
import Navbar from "../../components/Navbar/Navbar";
import FooterMenu from "../../components/Footer/FooterMenu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <FooterMenu />
    </div>
  );
}

export default Layout;
