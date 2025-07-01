import { Outlet } from "react-router-dom";
import '../page-css/Layout.css';

const Layout = () => {
  return (
    <div id="layout-container">
        <Outlet />
    </div>
  )
}

export default Layout;