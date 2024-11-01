import { OrganizationDashboard } from "../views/Pages/Organization/OrganizationDashboard";
import { OrganizationList } from "../views/Pages/Admin/OrganizationList";

import {
  Person2Outlined,
  DashboardCustomizeTwoTone,
  Newspaper,
  MultilineChart,
} from "@mui/icons-material";

var adminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <Newspaper />,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
  {
    path: "/organizationList",
    name: "Organization List",
    icon: <DashboardCustomizeTwoTone />,
    component: <OrganizationList />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Athletes List",
    icon: <Person2Outlined />,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
  {
    path: "/perfomance",
    name: "Oraganize a tournment",
    icon: <MultilineChart />,
    component: <OrganizationDashboard />,
    layout: "/admin",
  },
];

export default adminRoutes;
