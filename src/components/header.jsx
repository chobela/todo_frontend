const Header = () => {
  return (
    <header className="top-header">
      <nav className="navbar navbar-expand justify-content-between">
        <div className="btn-toggle-menu">
          <span className="material-symbols-outlined">menu</span>
        </div>

        <ul className="navbar-nav top-right-menu gap-2">
          <li className="nav-item dropdown dropdown-large">
            <a
              className="nav-link dropdown-toggle dropdown-toggle-nocaret"
              href="javascript:;"
              data-bs-toggle="dropdown"
            >
              <div className="position-relative">
                <span className="notify-badge">8</span>
                <span className="material-symbols-outlined">
                  notifications_none
                </span>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end mt-lg-2">
              <a href="javascript:;">
                <div className="msg-header">
                  <p className="msg-header-title">Notifications</p>
                  <p className="msg-header-clear ms-auto">Marks all as read</p>
                </div>
              </a>
              <div className="header-notifications-list">
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-primary border">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        New Orders
                        <span className="msg-time float-end">2 min ago</span>
                      </h6>
                      <p className="msg-info">You have recived new orders</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-danger border">
                      <span className="material-symbols-outlined">
                        account_circle
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        New Customers
                        <span className="msg-time float-end">14 Sec ago</span>
                      </h6>
                      <p className="msg-info">5 new user registered</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-success border">
                      <span className="material-symbols-outlined">
                        picture_as_pdf
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        24 PDF File
                        <span className="msg-time float-end">19 min ago</span>
                      </h6>
                      <p className="msg-info">The pdf files generated</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-info border">
                      <span className="material-symbols-outlined"> store </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        New Product Approved
                        <span className="msg-time float-end">2 hrs ago</span>
                      </h6>
                      <p className="msg-info">Your new product has approved</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-warning border">
                      <span className="material-symbols-outlined">
                        event_available
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        Time Response
                        <span className="msg-time float-end">28 min ago</span>
                      </h6>
                      <p className="msg-info">5.1 min avarage time response</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-danger border">
                      <span className="material-symbols-outlined"> forum </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        New Comments
                        <span className="msg-time float-end">4 hrs ago</span>
                      </h6>
                      <p className="msg-info">New customer comments recived</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-primary border">
                      <span className="material-symbols-outlined">
                        local_florist
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        New 24 authors
                        <span className="msg-time float-end">1 day ago</span>
                      </h6>
                      <p className="msg-info">
                        24 new authors joined last week
                      </p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-success border">
                      <span className="material-symbols-outlined"> park </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        Your item is shipped
                        <span className="msg-time float-end">5 hrs ago</span>
                      </h6>
                      <p className="msg-info">Successfully shipped your item</p>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="javascript:;">
                  <div className="d-flex align-items-center">
                    <div className="notify text-warning border">
                      <span className="material-symbols-outlined">
                        {" "}
                        elevation{" "}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="msg-name">
                        Defense Alerts
                        <span className="msg-time float-end">2 weeks ago</span>
                      </h6>
                      <p className="msg-info">45% less alerts last 4 weeks</p>
                    </div>
                  </div>
                </a>
              </div>
              <a href="javascript:;">
                <div className="text-center msg-footer">View All</div>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
