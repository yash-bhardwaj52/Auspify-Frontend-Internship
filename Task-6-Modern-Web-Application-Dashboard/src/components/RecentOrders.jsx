import { orders } from "../data/dashboardData";

function RecentOrders() {
  return (
    <div className="orders-card">
      <div className="card-header">
        <div>
          <h3>Recent Orders</h3>
          <p>Latest customer transactions</p>
        </div>

        <button className="view-all">View All →</button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>PRODUCT</th>
              <th>DATE</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>

                <td>
                  <div className="customer">
                    <span className="customer-avatar">
                      {order.initial}
                    </span>
                    {order.customer}
                  </div>
                </td>

                <td>{order.product}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>

                <td>
                  <span className={`status ${order.statusClass}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;