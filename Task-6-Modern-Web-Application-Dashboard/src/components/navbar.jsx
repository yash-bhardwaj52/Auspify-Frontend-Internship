import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="topbar">
      <div className="mobile-brand">
        <div className="brand-icon">D</div>
        <strong>DashFlow</strong>
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input placeholder="Search anything..." />
        <kbd>⌘ K</kbd>
      </div>

      <div className="topbar-actions">
        <button
          className="icon-button theme-button"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <div className="navbar-dropdown">
          <button
            className="icon-button notification"
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            ♧
            <span></span>
          </button>

          {showNotifications && (
            <div className="dropdown notification-dropdown">
              <strong>Notifications</strong>
              <p>3 new notifications</p>
              <p>Your monthly report is ready.</p>
            </div>
          )}
        </div>

        <div className="navbar-dropdown">
          <button
            className="profile"
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="avatar">Y</div>

            <div className="profile-info">
              <strong>Yash</strong>
              <small>Administrator</small>
            </div>

            <span className="profile-arrow">⌄</span>
          </button>

          {showProfile && (
            <div className="dropdown profile-dropdown">
              <strong>Yash Bhardwaj</strong>
              <p>Administrator</p>
              <button>Profile</button>
              <button>Settings</button>
              <button>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;