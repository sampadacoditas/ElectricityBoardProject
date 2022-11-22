import { Button } from "@mui/material";
import { Component, createContext, MouseEvent, useEffect, useState } from "react";
import KeepMountedModal from "../../../Components/Modal/Modal";
import { Pagination } from "../../../Components/Pagination/Pagination";
import http from "../../../Services/Services";
// import AddUser from "./AddUser/AddUser";
import AddUser from "./AddUser/AddUser";
// import KeepMountedModal from "./AddUserModal/AddUserModal";
// import CustomPaginationActionsTable  from "./CustomerTable/CustomerTable";
import styles from "./Agent.module.scss"
import CustomizedTables from "./AgentTable/AgentTable";
// import CustomizedTables from "./CustomerTable/CustomerTable";


// export const AdminContext = createContext<any>({});
export default class Agent extends Component<any,any,{}> 
{
  data:any
  constructor(props: any) {
    super(props);
    this.state = {
     data:[],
    };
  }

  async getData () 
  {
    try {
     
      const data = await http.get("user/getAllAgents");
      this.setState({data:data.data})
      console.log(data.data)
    } catch (e:any) {
      console.log("error", e);
    }
  }
    componentDidMount():void
    {
      this.getData()
     
    }
 
 
  render() {
    // const { email, password } = this.state;
    return (
      <>
       <span className={styles.addCustomers}>
      <KeepMountedModal 
      Component={<AddUser/>} 
      heading={"AddUser"}
      color={"red"}/>
        </span>   
        <div className={styles.customer}>
        <CustomizedTables rows={this.state.data} />
        </div>

        <div className={styles.pagination}>
        <Pagination/>
        </div>
        </>
    
    );
  }
}
