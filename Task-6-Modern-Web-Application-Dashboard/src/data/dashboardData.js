export const dashboardStats = [
  {
    icon: "₹",
    iconClass: "revenue",
    title: "Total Revenue",
    value: "₹84,240",
    growth: "+12.5%",
    growthClass: "positive",
    description: "Compared to ₹74,880 last month"
  },
  {
    icon: "↗",
    iconClass: "orders",
    title: "Total Orders",
    value: "1,284",
    growth: "+8.2%",
    growthClass: "positive",
    description: "Compared to 1,186 last month"
  },
  {
    icon: "♙",
    iconClass: "customers",
    title: "Customers",
    value: "8,549",
    growth: "+18.7%",
    growthClass: "positive",
    description: "Compared to 7,202 last month"
  },
  {
    icon: "%",
    iconClass: "conversion",
    title: "Conversion Rate",
    value: "4.82%",
    growth: "-2.4%",
    growthClass: "negative",
    description: "Compared to 4.94% last month"
  }
];

export const activities = [
  {
    icon: "✓",
    type: "green",
    title: "New order received",
    text: "Order #DF-10284 was placed.",
    time: "5 minutes ago"
  },
  {
    icon: "♙",
    type: "blue",
    title: "New customer joined",
    text: "Rahul created an account.",
    time: "24 minutes ago"
  },
  {
    icon: "!",
    type: "orange",
    title: "Low stock alert",
    text: "Wireless Headphones are low.",
    time: "1 hour ago"
  },
  {
    icon: "₹",
    type: "purple",
    title: "Payment received",
    text: "₹12,499 payment confirmed.",
    time: "2 hours ago"
  }
];

export const orders = [
  {
    id: "#DF-10284",
    customer: "Arjun Sharma",
    initial: "A",
    product: "Premium Headphones",
    date: "Sep 30, 2026",
    amount: "₹2,499",
    status: "Completed",
    statusClass: "completed"
  },
  {
    id: "#DF-10283",
    customer: "Rahul Verma",
    initial: "R",
    product: "Smart Watch Series 5",
    date: "Sep 30, 2026",
    amount: "₹3,299",
    status: "Pending",
    statusClass: "pending"
  },
  {
    id: "#DF-10282",
    customer: "Priya Singh",
    initial: "P",
    product: "Leather Backpack",
    date: "Sep 29, 2026",
    amount: "₹1,899",
    status: "Completed",
    statusClass: "completed"
  },
  {
    id: "#DF-10281",
    customer: "Karan Mehta",
    initial: "K",
    product: "Running Shoes",
    date: "Sep 29, 2026",
    amount: "₹2,799",
    status: "Cancelled",
    statusClass: "cancelled"
  }
];

export const revenueData = {
  "Last 7 Months": [42000, 58000, 51000, 69000, 63000, 82000, 94240],
  "Last 30 Days": [18000, 24000, 21000, 28000, 32000, 29000, 38000],
  "Last 12 Months": [38000, 45000, 42000, 51000, 56000, 62000, 58000, 69000, 74000, 79000, 84000, 94240]
};