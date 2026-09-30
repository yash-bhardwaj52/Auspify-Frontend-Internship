import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { revenueData } from "../data/dashboardData";

function RevenueChart({ selectedPeriod, setSelectedPeriod, darkMode }) {
  const currentData = revenueData[selectedPeriod].map((value, index) => ({
    month: `M${index + 1}`,
    revenue: value
  }));

  const lineColor = darkMode ? "#60a5fa" : "#111827";
  const gridColor = darkMode ? "#334155" : "#e8ebf0";
  const textColor = darkMode ? "#94a3b8" : "#9aa3b2";

  return (
    <>
      <div className="card-header">
        <div>
          <h3>Revenue Overview</h3>
          <p>Monthly revenue performance</p>
        </div>

        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          {Object.keys(revenueData).map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>

      <div className="real-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0
            }}
          >
            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={lineColor}
                  stopOpacity={darkMode ? 0.28 : 0.16}
                />
                <stop
                  offset="100%"
                  stopColor={lineColor}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke={gridColor}
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{
                fontSize: 9,
                fill: textColor
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fontSize: 9,
                fill: textColor
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                background: darkMode ? "#111827" : "#ffffff",
                border: darkMode
                  ? "1px solid #334155"
                  : "1px solid #e5e7eb",
                borderRadius: "8px",
                color: darkMode ? "#f8fafc" : "#111827",
                fontSize: "11px",
                boxShadow: "0 8px 25px rgba(0,0,0,.12)"
              }}
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Revenue"
              ]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke={lineColor}
              strokeWidth={3}
              fill="url(#revenueGradient)"
              dot={{
                r: 3,
                fill: lineColor,
                stroke: darkMode ? "#111827" : "#ffffff",
                strokeWidth: 2
              }}
              activeDot={{
                r: 6,
                fill: lineColor,
                stroke: darkMode ? "#111827" : "#ffffff",
                strokeWidth: 3
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default RevenueChart;