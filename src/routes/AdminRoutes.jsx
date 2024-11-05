import { OrganizationDashboard } from "../views/Pages/Organization/OrganizationDashboard";
import { OrganizationList } from "../views/Pages/Admin/OrganizationList";
import { OrganizationApprovalFlow } from "../views/Pages/Admin/OrganizationApprovalFlow";


import {
  ApprovalOutlined,
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
    path: "/organizationApproval",
    name: "Organization Approval",
    icon: <ApprovalOutlined />,
    component: <OrganizationApprovalFlow />,
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
