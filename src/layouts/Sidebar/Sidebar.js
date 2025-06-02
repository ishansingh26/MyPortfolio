import { Link } from "react-router-dom";
import { navBarData } from "../../config/constants";
import "./Sidebar.css";

export default function Sidebar({ showSidebar, setShowSidebar, pathname }) {
  const handleHideSidebar = () => {
    setShowSidebar(false);
  };

  if (showSidebar) {
    return (
      <nav className="sidebar-nav-container w-100 d-block">
        <ul className="sidebar-list m-0 p-0">
          {navBarData &&
            navBarData?.map(({ id, icon, list, path, linkClass }) => (
              <li key={id}>
                <Link
                  to={path}
                  className={`navbar-p-x ${linkClass} ${
                    path === pathname ? "selected-navbar-link" : ""
                  }`}
                  onClick={handleHideSidebar}
                >
                  {icon}
                  <div>{list}</div>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}
