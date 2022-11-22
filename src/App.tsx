import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Admin from './Pages/Admin/Admin';
import { MainRouters } from './MainRouters/MainRouters';
import {RoutesData} from "./Routes/Routes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from './Pages/Admin/Customer/Customer';
import Meter from './Pages/Admin/Meter/Meter';
import LoginComponent from "./Pages/Login/Login"
function App() {
  return (
    <>
    {/* <Login/> */}
    <div>
      {/* <Switch>
        <Route path="/" exact component={LoginComponent}></Route>
        <Route path="/admin" exact component={Admin}></Route>
      </Switch>  */}
      {/* <Route path: "/",
    component: LoginComponent></Route> */}
       {/* <BrowserRouter>
      <Routes> 
      <Route path="/" element={<LoginComponent history={undefined}/>}></Route>
            <Route path="/admin" element={<Admin/>}>
              <Route index element={<ReportPage />}></Route>
              <Route path="meter" element={<MeterTable />}></Route>
              <Route path="customer" element={<Customers />}></Route>
              <Route path="agents" element={<Meter/>}></Route>
              <Route path="meterReport" element={<BarGraph />}></Route>
              <Route path="revenueReport" element={<LineGraph />}></Route>
            </Route>
            <Route path="/alumini" element={<Alumini />}>
              <Route index element={<AssignedCustomerTable />}></Route>
              <Route
                path="assignedCustomers"
                element={<AssignedCustomerTable />}
              ></Route>
            </Route>
     </Routes> 
     </BrowserRouter>
      */}
     <MainRouters array={RoutesData}/>
    </div>

    {/* <Admin/> */}
    </>
  );
}

export default App;
