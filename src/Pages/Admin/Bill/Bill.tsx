import { Button } from "@mui/material";
import { Component, createContext, MouseEvent, useEffect, useState } from "react";
// import CustomPaginationActionsTable  from "./CustomerTable/CustomerTable";
import styles from "./Bill.module.scss"
// import CustomizedTables from "./CustomerTable/CustomerTable";
// import KeepMountedModal from "./AddCustomer/AddCustomerModal/AddCustomerModal";
// import AddCustomer from "./AddCustomer/AddCustomer";
import KeepMountedModal from "../../../Components/Modal/Modal";
import http from "../../../Services/Services";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import DeleteCustomer from "./Delete/Delete";
import DeleteIcon from '@mui/icons-material/Delete';
export default class Bill extends Component<any,any> {
  

  constructor(props: any) {
    super(props);
    this.state = {
     data:[],
    };
  }

  async getData () 
  {
    try {
      const data = await http.get("posts");
      this.setState({data:data})
      console.log(data)
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
      { field: 'userId', headerName: 'ID' },
      {
        field: 'title',
        headerName: 'First name',
      },
      {
        field: 'delete',
        // renderCell:(cellValues)=>{
        //   return(
        //     <KeepMountedModal Component={<DeleteCustomer/>}heading={<DeleteIcon/>}/>
        //   )
        // } ,
      }
     
    ];
    
    //  rows = [
    //   { id: 1, lastName: 'Snow', firstName: 'Jon', },
    //   { id: 2, lastName: 'Lannister', firstName: 'Cersei'}
    // ];

  render() {
    return (
      <>
       <span className={styles.addCustomers}>
      {/* <KeepMountedModal Component={<AddCustomer/>} heading={"AddCustomer"}/> */}
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
        // onCellClick={(id:any)=><KeepMountedModal Component={<DeleteCustomer/>}heading={"Delete"} sx={{textAlign:"center"}}/>}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        {/* <CustomizedTables/> */}
        </div>
        </>
    
    );
  }
}
