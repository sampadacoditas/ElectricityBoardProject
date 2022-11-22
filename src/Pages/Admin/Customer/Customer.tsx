import { Button } from "@mui/material";
import { Component, createContext, MouseEvent, useEffect, useState } from "react";
import CustomPaginationActionsTable  from "./CustomerTable/CustomerTable";
import styles from "./Customer.module.scss"
import CustomizedTables from "./CustomerTable/CustomerTable";
// import KeepMountedModal from "./AddCustomer/AddCustomerModal/AddCustomerModal";
import AddCustomer from "./AddCustomer/AddCustomer";
import KeepMountedModal from "../../../Components/Modal/Modal";
import http from "../../../Services/Services";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Delete from "./Delete/Delete";
import DeleteIcon from '@mui/icons-material/Delete';
import EditCustomer from "./EditCustomer/EditCustomer";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { Pagination } from "./Pagination/Pagination";
export default class Customers extends Component<any,any> {
  

  constructor(props: any) {
    super(props);
    this.state = {
     data:[],
    };
  }

  async getData () 
  {
    try {
      const data = await http.get("customer/");
      // this.setState({data:data.data})
      this.setState({data:data.data.rows})
      console.log(data.data.rows)
    } catch (e:any) {
      console.log("error", e);
    }
  }
    componentDidMount():void
    {
      this.getData()
     
    }
   
    //  console.log(this.state)
    
      columns: GridColDef[] = [
      { field: 'id', headerName: 'ID' },
      {
        field: 'name',
        headerName: 'Name',
      },
      {
        field: 'email',
        headerName: 'Email',
      },
      {
        field: 'address',
        headerName: 'Address',
      }
    ];
    
    

  render() {
    console.log(this.state.data)
    return (
      <>
       <span className={styles.addCustomers}>
      <KeepMountedModal Component={<AddCustomer/>} heading={"AddCustomer"}/>
        </span>   
        <div className={styles.customer}>
        <Box sx={{ height: 400, width: '100%' }}>
       {/* {console.log(this.rows)} */}
      <DataGrid
        rows={this.state.data}
        columns={this.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        // onCellClick={(id:any)=><KeepMountedModal Component={<Delete/>}heading={"Delete"} sx={{textAlign:"center"}}/>}
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        {/* <CustomizedTables /> */}
        </div>
        <div className={styles.pagination}>
        <Pagination/>
        </div>
        </>
    
    );
  }
}


