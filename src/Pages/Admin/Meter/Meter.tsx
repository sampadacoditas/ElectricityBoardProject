import { Button } from "@mui/material";
import {
  Component,
  createContext,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import styles from "./Meter.module.scss";
import KeepMountedModal from "../../../Components/Modal/Modal";
import http from "../../../Services/Services";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import Delete from "../../../Components/DeletePage/Delete";
import AddMeter from "./AddMeter/AddMeter";
import AssignMeter from "./AssignMeter/AssignMeter";
import ElectricMeterSharpIcon from "@mui/icons-material/ElectricMeterSharp";
export default class Meter extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async getData() {
    try {
      const data = await http.get("meter/");
      this.setState({ data: data.data });
      console.log(data);
    } catch (e: any) {
      console.log("error", e);
    }
  }
  componentDidMount(): void {
    this.getData();
  }

  columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "meterType",
      headerName: "MeterType",
    },
    {
      field: "faultTolerance",
      headerName: "FaultTolerance",
    },
    {
      field: "costPerUnit",
      headerName: "CostPerUnit",
    },
    {
      field: "numberOfReading",
      headerName: "NumberOfReading",
    },

    {
      field: "delete",
      renderCell: (props: any) => {
        const cellValues = props.row;
        console.log(props.row.id);
        return (
          <KeepMountedModal
            Component={<Delete id={props.row.id} url={"meter/"} />}
            heading={<DeleteIcon />}
          />
        );
      },
    },
    {
      field: "AssignMeter",
      renderCell: (props: any) => {
        const cellValues = props.row;
        console.log(props.row.id);
        return (
          <KeepMountedModal
            Component={<AssignMeter/>}
            heading={<ElectricMeterSharpIcon />}
          />
        );
      },
    },
    // {
    //   field: 'Edit',
    //   renderCell:(props:any)=>{
    //     const cellValues=props.row
    //     console.log(props.row.id)
    //     return(
    //       <KeepMountedModal Component={<EditCustomer id={props.row.id} />}heading={<ModeOutlinedIcon/>}/>
    //     )
    //   } ,
    // }
  ];

  render() {
    console.log(this.state.data.data);
    return (
      <>
        <span className={styles.addCustomers}>
          <KeepMountedModal Component={<AddMeter />} heading={"AddMeter"} />
        </span>
        <div className={styles.customer}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={this.state.data}
              columns={this.columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </Box>
        </div>
      </>
    );
  }
}
