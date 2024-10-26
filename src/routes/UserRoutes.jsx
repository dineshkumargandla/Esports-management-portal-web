import { UserDashboard } from "../views/UserDashboard";

import {
  Person2Outlined,
  DashboardCustomizeTwoTone,
  Newspaper,
} from "@mui/icons-material";

var userRoutes  = [
  {
    path: "#",
    name: "News Feed",
    icon: <Newspaper/>,
    component: <UserDashboard />,
    layout: "/user",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardCustomizeTwoTone/>,
    component: <UserDashboard />,
    layout: "/user",
  },
  {
    path: "#",
    name: "User profile",
    icon: <Person2Outlined/>,
   // component: <UserDashboard />,
    layout: "/user",
  },
];

export default userRoutes;

