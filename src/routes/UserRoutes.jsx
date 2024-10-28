import { UserDashboard } from "../views/Pages/User/UserDashboard";
import {UserProfile} from "../views/Pages/User/UserProfile";

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
    path: "/profile",
    name: "User profile",
    icon: <Person2Outlined/>,
    component: <UserProfile />,
    layout: "/user",
  },
];

export default userRoutes;

