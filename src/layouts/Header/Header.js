import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { route } from "../../config/route";
import { labels, navBarData } from "../../config/constants";
import ProfilePic from "../../assets/images/Ishan_profile.jpeg";
import "./Header.css";

export default function Header({ showSidebar, setShowSidebar, pathname }) {
  const { myName } = labels;
  const profileClass = `${navBarData?.[0]?.linkClass} p-0`;
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <Link to={route.home} className={`${profileClass}`}>
          <div className="d-flex align-items-center gap-1">
            <img
              src={ProfilePic}
              alt="Profile pic"
              className="profile-pic border-radius-50"
            />
            {myName}
          </div>
        </Link>
        <nav>
          {showSidebar ? (
            <FaTimes
              className="d-block menu-icon"
              onClick={handleToggleSidebar}
            />
          ) : (
            <FaBars
              className="d-block menu-icon"
              onClick={handleToggleSidebar}
            />
          )}
          <ul className={`list d-none m-0 p-0`}>
            {navBarData &&
              navBarData?.map(({ id, icon, list, path, linkClass }) => (
                <li key={id}>
                  <Link
                    to={path}
                    className={`${linkClass} ${
                      path === pathname ? "selected-navbar-link" : ""
                    }`}
                  >
                    {icon}
                    <div className="navbar-link-text">{list}</div>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
