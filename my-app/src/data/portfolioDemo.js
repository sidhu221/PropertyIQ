export const portfolioStats = [
  { icon: "apartment", label: "Portfolio Value", value: "$8.42M", delta: "+4.2%" },
  { icon: "payments", label: "Monthly Cash Flow", value: "$28,140", delta: "+$1,820" },
  { icon: "task_alt", label: "Occupancy", value: "96.4%", delta: "12/13 units" },
  { icon: "pie_chart", label: "Blended ROI", value: "14.8%", delta: "TTM" },
];

// 12 months of cash flow; the last 4 are forward-looking forecast values.
export const portfolioCashFlow = [
  { month: "J", value: 19500, forecast: false },
  { month: "F", value: 20800, forecast: false },
  { month: "M", value: 21200, forecast: false },
  { month: "A", value: 22600, forecast: false },
  { month: "M", value: 24100, forecast: false },
  { month: "J", value: 23400, forecast: false },
  { month: "J", value: 25900, forecast: false },
  { month: "A", value: 26700, forecast: false },
  { month: "S", value: 28140, forecast: true },
  { month: "O", value: 29200, forecast: true },
  { month: "N", value: 30100, forecast: true },
  { month: "D", value: 31400, forecast: true },
];

export const portfolioActivity = [
  {
    icon: "task_alt",
    title: "Rent received · Unit 4B",
    time: "2h ago",
    value: "$2,850",
  },
  {
    icon: "warning",
    title: "Lease expires · Magnolia Crest",
    time: "yest.",
    value: "42 days",
  },
  {
    icon: "assignment",
    title: "Inspection scheduled · Oak Ln",
    time: "yest.",
    value: "Fri",
  },
  {
    icon: "auto_awesome",
    title: "AI: refi opportunity flagged",
    time: "3d",
    value: "-$310/mo",
  },
];
