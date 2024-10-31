import {OrganizationDashboard} from "../views/Pages/Organization/OrganizationDashboard";
import {OrganizationProfile} from "../views/Pages/Organization/OrganizationProfile";


import {
  Person2Outlined,
  DashboardCustomizeTwoTone,
  Newspaper,
  MultilineChart
} from "@mui/icons-material";

var organizationRoutes  = [
  {
    path: "#",
    name: "News Feed",
    icon: <Newspaper/>,
    component: <OrganizationDashboard />,
    layout: "/organization",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardCustomizeTwoTone/>,
    component: <OrganizationDashboard />,
    layout: "/organization",
  },
  {
    path: "/profile",
    name: "profile",
    icon: <Person2Outlined/>,
    component: <OrganizationProfile />,
    layout: "/organization",
  },
  {
    path: "/perfomance",
    name: "Organiization Performance",
    icon: <MultilineChart/>,
    component: <OrganizationDashboard />,
    layout: "/perfomance",
  },
];

export default organizationRoutes;

