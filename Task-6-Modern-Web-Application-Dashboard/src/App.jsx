import { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import StatCard from "./components/startcard";
import RevenueChart from "./components/RevenueChart";
import RecentActivity from "./components/RecentActivity";
import RecentOrders from "./components/RecentOrders";
import OrderAnalytics from "./components/OrderAnalytics";
import { dashboardStats } from "./data/dashboardData";
import "./App.css";

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 Months");
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <main className="main-content">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <section className="dashboard">
          <div className="welcome-section">
            <div>
              <p className="welcome-label">OVERVIEW</p>
              <h1>Welcome back, Yash 👋</h1>
              <p className="welcome-text">
                Here's what's happening with your business today.
              </p>
            </div>

            <button className="date-button">
              September 30, 2026 <span>⌄</span>
            </button>
          </div>

          <div className="stats-grid">
            {dashboardStats.map((stat) => (
              <StatCard
                key={stat.title}
                icon={stat.icon}
                iconClass={stat.iconClass}
                title={stat.title}
                value={stat.value}
                growth={stat.growth}
                growthClass={stat.growthClass}
                description={stat.description}
              />
            ))}
          </div>

          <div className="content-grid">
            <div className="analytics-card">
              <RevenueChart
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
                darkMode={darkMode}
              />
            </div>

            <div className="activity-card">
              <RecentActivity />
            </div>
          </div>

          <div className="analytics-widgets">
            <OrderAnalytics />
          </div>

          <RecentOrders />
        </section>
      </main>
    </div>
  );
}

export default App;