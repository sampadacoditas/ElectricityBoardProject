
import { array } from "yup";
import Admin from "../Pages/Admin/Admin";
import AdminProfile from "../Pages/Admin/AdminProfile/AdminProfile";
// import { AdminProfile } from "../Pages/Admin/AdminProfile/AdminProfile";
// import AdminProfile from "../Pages/Admin/AdminProfile/AdminProfile";
import Agent from "../Pages/Admin/Agent/Agent";
import Bill from "../Pages/Admin/Bill/Bill";
import Customer from "../Pages/Admin/Customer/Customer";
import Meter from "../Pages/Admin/Meter/Meter";
import { Reports } from "../Pages/Admin/Reports/Reports";
import Agents from "../Pages/Agent/Agent";
import { AgentProfile } from "../Pages/Agent/AgentProfile/AgentProfile";
import Reading from "../Pages/Agent/Reading/Reading";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
// import { ForgotPassword } from "../Pages/ForgotPassword/ForgotPassword";
import LoginComponent from "../Pages/Login/Login";
// imports Reports from "."

// const children=
//   [{
//     path:"customer",
//   component:Customer
//   },
// ]


export const RoutesData = [
  {
    path: "/",
    component: LoginComponent
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword
  },
  {
    path:"/admin",
    component:Admin,
    children:[{
      path:"customer",
    component:Customer
    },
    {
      path:"adminProfile",
      component:AdminProfile
    },
    {
      path:"meter",
    component:Meter
    },
    {
      path:"agent",
    component:Agent
    },
    {
      path:"reports",
    component:Reports
    },
    {
      path:"bill",
    component:Bill
    }
  ]
  },
  {
    path:"agents",
    component:Agents,
    children:[{
      path:"reading",
      component:Reading
    },
    {
      path:"agentProfile",
      component:AgentProfile
    }
  ]
  }
];
