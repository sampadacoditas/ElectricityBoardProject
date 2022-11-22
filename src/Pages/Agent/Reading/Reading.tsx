import { Button } from "@mui/material";
import { Component, createContext, MouseEvent, useEffect, useState } from "react";
 
import styles from "./Reading.module.scss"
// import CustomizedTables from "./CustomerTable/CustomerTable";
// import KeepMountedModal from "./AddCustomer/AddCustomerModal/AddCustomerModal";
// import AddCustomer from "./AddCustomer/AddCustomer";
import KeepMountedModal from "../../../Components/Modal/Modal";
import http from "../../../Services/Services";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import Delete from "./Delete/Delete";
import DeleteIcon from '@mui/icons-material/Delete';
// import EditCustomer from "./EditCustomer/EditCustomer";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import Delete from "../../../Components/DeletePage/Delete";
import UploadReading from "./UploadReading/UploadReading";
import CloudUploadSharpIcon from '@mui/icons-material/CloudUploadSharp';
import Reason from "./Reason/Reason";
export default class Reading extends Component<any,any> {
  

  constructor(props: any) {
    super(props);
    this.state = {
     data:[],
    };
  }

  async getData () 
  {
    try {
      const data = await http.get("users/");
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
      },
      {
        field: 'delete',
        renderCell:(props:any)=>{
          const cellValues=props.row
          console.log(props.row.id)
          return(
            <KeepMountedModal Component={<Delete id={props.row.id} url={"users/"}/>}heading={<DeleteIcon/>}/>
          )
        } ,
      },
      {
        field: 'Edit',
        renderCell:(props:any)=>{
          const cellValues=props.row
          console.log(props.row.id)
          return(
            // <KeepMountedModal Component={<EditCustomer id={props.row.id} />}heading={<ModeOutlinedIcon/>}/>
            <div className={styles.UploadReading}>
                {/* <Button variant="contained" sx={{fontSize:"1rem"}}>Upload</Button> */}
                <KeepMountedModal Component={<UploadReading />}heading={<CloudUploadSharpIcon/>}/>
            </div>
          )
        } ,
      },
      {
        field: 'Reason',
        renderCell:(props:any)=>{
          const cellValues=props.row
          console.log(props.row.id)
          return(
            // <KeepMountedModal Component={<EditCustomer id={props.row.id} />}heading={<ModeOutlinedIcon/>}/>
            <div className={styles.UploadReading}>
                {/* <Button variant="contained" sx={{fontSize:"1rem"}}>Upload</Button> */}
                <KeepMountedModal Component={<Reason/>}heading={"Reason"}/>
            </div>
          )
        } ,
      }
     
    ];
    
    

  render() {
    console.log(this.state.data.data)
    return (
      <>
       {/* <span className={styles.addCustomers}>
      <KeepMountedModal Component={<AddCustomer/>} heading={"AddCustomer"}/>
        </span>    */}
        <div className={styles.customer}>
        <Box sx={{ height: 400, width: '80%', paddingLeft:"4rem",paddingRight:"6rem"}}>
       {/* {console.log(this.rows)} */}
      <DataGrid
        rows={this.state.data}
        columns={this.columns}
        pageSize={5}
        rowsPerPageOptions={[5,10,15]}
        checkboxSelection
        disableSelectionOnClick
        // onCellClick={(id:any)=><KeepMountedModal Component={<Delete/>}heading={"Delete"} sx={{textAlign:"center"}}/>}
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        {/* <CustomizedTables /> */}
        </div>
        </>
    
    );
  }
}
