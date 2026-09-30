import { activities } from "../data/dashboardData";

function RecentActivity() {
  return (
    <div className="activity-card">
      <div className="card-header">
        <div>
          <h3>Recent Activity</h3>
          <p>Latest updates</p>
        </div>

        <button className="more-button">•••</button>
      </div>

      <div className="activity-list">
        {activities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <div className={`activity-icon ${activity.type}`}>
              {activity.icon}
            </div>

            <div>
              <strong>{activity.title}</strong>
              <p>{activity.text}</p>
              <small>{activity.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;