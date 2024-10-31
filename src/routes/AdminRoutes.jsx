import {OrganizationDashboard} from "../views/Pages/Organization/OrganizationDashboard";
import {OrganizationProfile} from "../views/Pages/Organization/OrganizationProfile";


import {
  Person2Outlined,
  DashboardCustomizeTwoTone,
  Newspaper,
  MultilineChart
} from "@mui/icons-material";

var adminRoutes  = [
  {
    path: "#",
    name: "Dashboard",
    icon: <Newspaper/>,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Organization List",
    icon: <DashboardCustomizeTwoTone/>,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Athletes List",
    icon: <Person2Outlined/>,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
  {
    path: "/perfomance",
    name: "Oraganize a tournment",
    icon: <MultilineChart/>,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
];

export default adminRoutes;

