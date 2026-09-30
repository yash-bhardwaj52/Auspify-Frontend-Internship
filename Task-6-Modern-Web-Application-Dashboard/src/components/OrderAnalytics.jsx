import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Completed", value: 64 },
  { name: "Pending", value: 23 },
  { name: "Cancelled", value: 13 }
];

const colors = ["#111827", "#94a3b8", "#d1d5db"];

function OrderAnalytics() {
  return (
    <div className="analytics-card order-analytics">
      <div className="card-header">
        <div>
          <h3>Order Analytics</h3>
          <p>Current order distribution</p>
        </div>
      </div>

      <div className="order-chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={82}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value}%`, "Orders"]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="pie-center">
          <strong>1,284</strong>
          <span>Orders</span>
        </div>
      </div>

      <div className="analytics-legend">
        {data.map((item, index) => (
          <div className="legend-item" key={item.name}>
            <span
              className="legend-dot"
              style={{ background: colors[index] }}
            ></span>

            <span>{item.name}</span>
            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderAnalytics;