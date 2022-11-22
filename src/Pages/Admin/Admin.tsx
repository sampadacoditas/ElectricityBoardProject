import { Button } from "@mui/material";
import { Component, createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ButtonAppBar from "../../Components/Header/Header";
import EnableColorOnDarkAppBar from "../../Components/Header/Header";
import KeepMountedModal from "../../Components/Modal/Modal";
import http from "../../Services/Services";
import styles from "./Admin.module.scss";
import AdminSideBar from "./AdminSideBar/AdminSideBar";
import AddUser from "./Agent/AddUser/AddUser";
import Agent from "./Agent/Agent";
import Customers from "./Customer/Customer";

export const AdminContext = createContext<any>({});
export default class Admin extends Component<
  {},
  { email: string; password: any }
> {
 
  render() {
  
    return (
      <>
        <div className={styles.admin}>
        <ButtonAppBar/>
        
          <div className={styles.sideBarButtons}>
            <ul className={styles.unorderedList}>
              <div className={styles.Link}>
              <AdminSideBar/>
              </div>
            </ul>
          </div>
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
        
      </>
    );
  }
}
