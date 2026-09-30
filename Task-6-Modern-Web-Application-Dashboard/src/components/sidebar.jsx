function Sidebar({ activeMenu, setActiveMenu }) {
  const mainMenu = [
    ["▦", "Dashboard"],
    ["◉", "Analytics"],
    ["▣", "Orders"],
    ["□", "Products"],
    ["♙", "Customers"]
  ];

  const supportMenu = [
    ["⚙", "Settings"],
    ["?", "Help Center"]
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          <div className="brand-icon">D</div>

          <div>
            <h2>DashFlow</h2>
            <span>Analytics Platform</span>
          </div>
        </div>

        <div className="menu-section">
          <p className="menu-title">MAIN MENU</p>

          {mainMenu.map(([icon, name]) => (
            <button
              key={name}
              className={`menu-item ${
                activeMenu === name ? "active" : ""
              }`}
              onClick={() => setActiveMenu(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </div>

        <div className="menu-section">
          <p className="menu-title">SUPPORT</p>

          {supportMenu.map(([icon, name]) => (
            <button
              key={name}
              className={`menu-item ${
                activeMenu === name ? "active" : ""
              }`}
              onClick={() => setActiveMenu(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="upgrade-box">
          <div className="upgrade-icon">✦</div>

          <h4>Upgrade Plan</h4>

          <p>
            Unlock advanced analytics and premium features.
          </p>

          <button>Upgrade Now</button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;