function StatCard({ icon, iconClass, title, value, growth, growthClass, description }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className={`stat-icon ${iconClass}`}>{icon}</div>
        <span className={`growth ${growthClass}`}>{growth}</span>
      </div>

      <p>{title}</p>
      <h2>{value}</h2>
      <small>{description}</small>
    </div>
  );
}

export default StatCard;