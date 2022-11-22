import { Button } from "@mui/material";
import { Component, createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom";
// import ButtonComponents from "../../Components/Button/Button";
import ButtonAppBar from "../../Components/Header/Header";
import EnableColorOnDarkAppBar from "../../Components/Header/Header";
import http from "../../Services/Services";
import styles from "./Agent.module.scss";
import AgentSideBar from "./AgentSideBar/AgentSideBar";
// import TablePagination from '@mui/material/TablePagination';

export const AdminContext = createContext<any>({});
export default class Agents extends Component<
  {}
> {

 
  render() {
   
    return (
      <>
        {/* <AdminContext.Provider value={{modal,setModal,page,setPage,id,setId,setUrl}}> */}
        <div className={styles.admin}>
        <ButtonAppBar/>
          <div className={styles.searchBar}>
          </div>
          <div className={styles.sideBarButtons}>
            <ul className={styles.unorderedList}>
              <div className={styles.Link}>
              <AgentSideBar/>
              </div>
            </ul>
          </div>
          <main className={styles.main}>
            <Outlet />
            {/* <AgentSideBar/> */}
          </main>
        </div>
     
      </>
    );
  }
}
