import {Login} from "../views/Pages/Login";
import {UserRegistration} from "../views/Pages/UserRegistration";
import {OrgRegistration} from "../views/Pages/OrgRegistration";
var authRoutes  = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/user-registration",
    name: "User Registration",
    component: <UserRegistration />,
    layout: "/registration",
  },

  {
    path: "/org-registration",
    name: "Organization Registration",
    component: <OrgRegistration />,
    layout: "/registration",
  },
];

export default authRoutes;

