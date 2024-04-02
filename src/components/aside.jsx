import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Aside = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar-header">
        <div className="logo-name flex-grow-1">
          <h5 className="mb-0">My Todo List</h5>
        </div>
        <div className="sidebar-close">
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
      <div className="sidebar-nav" data-simplebar="true">
        {/*navigation*/}
        <ul className="metismenu" id="menu">
          <li>
            <NavLink to="/dashboard" activeClassName="mm-active">
              <div className="parent-icon">
                <span className="material-symbols-outlined">home</span>
              </div>
              <div className="menu-title">Todo List</div>
            </NavLink>
          </li>
        </ul>
        {/*end navigation*/}
      </div>
      <div className="sidebar-bottom dropdown dropup-center dropup">
        <div
          className="dropdown-toggle d-flex align-items-center px-3 gap-3 w-100 h-100"
          data-bs-toggle="dropdown"
        >
          <div className="user-info">
            <h5 className="mb-0 user-name">Chobela</h5>
            <p className="mb-0 user-designation">Admin</p>
          </div>
        </div>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="javascript:;">
              <span className="material-symbols-outlined me-2">
                account_circle{" "}
              </span>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:;">
              <span className="material-symbols-outlined me-2"> tune </span>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:;">
              <span className="material-symbols-outlined me-2">
                {" "}
                dashboard{" "}
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:;">
              <span className="material-symbols-outlined me-2">
                account_balance{" "}
              </span>
              <span>Earnings</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="javascript:;">
              <span className="material-symbols-outlined me-2">
                cloud_download{" "}
              </span>
              <span>Downloads</span>
            </a>
          </li>
          <li>
            <div className="dropdown-divider mb-0" />
          </li>
          <li>
            <a className="dropdown-item" href="javascript:;">
              <span className="material-symbols-outlined me-2"> logout </span>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
