// import Index from "views/Index.js";
// import Profile from "views/Pages/Profile.js";
// import Maps from "views/Pages/Maps.js";
// import Register from "views/Pages/Register.js";
import {Login} from "./view/Pages/Login";
import {UserRegistration} from "./view/Pages/UserRegistration";
import {OrgRegistration} from "./view/Pages/OrgRegistration";
import { Dashboard } from "./view/Pages/User/Dashboard";


// import Tables from "views/Pages/Tables.js";
// import Icons from "views/Pages/Icons.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard />,
    layout: "/user",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
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
export default routes;
