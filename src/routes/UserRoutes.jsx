import { UserDashboard } from "../views/UserDashboard";

var userRoutes  = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <UserDashboard />,
    layout: "/user",
  },
];

export default userRoutes;

