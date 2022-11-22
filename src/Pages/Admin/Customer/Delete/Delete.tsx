import { Button } from "@mui/material";

// import styles from "./AddUser.module.scss"
import { Formik } from "formik";

import React, { Component, createContext } from "react";
// import { loginReducer } from "./LoginReducer/Login.reducer";
import { Link } from "react-router-dom";
// import { AddUserSchema } from "./AddUserSchema"
import styles from "./Delete.module.scss"
import http from "../../../../Services/Services";


export default class Delete extends Component<any,any> {
    // loginResponse: any;
    // constructor(props: any) {
    //   super(props);
    //   // this.state = {
    //   //   id:number
    //   // };
      
    // }
    async handleButton(buttonText:any)
    {
      if(buttonText==="Yes")
      {
        // console.log(id)
        // const response=await http.delete(`user/${this.props.id}`)
        // const response=await http.delete(`customer/${this.props.id}`)
        const response=await http.delete(`${this.props.url}/${this.props.id}`)
        console.log(response)
        
      }
    }
  render() {
    // console.log(this.props.id)
    return(
        <>
        <div>
         Do you Really want to Delete
         </div>
        
         {
          <Button variant="contained" onClick={()=>this.handleButton("Yes")}>Yes</Button>
         }
         <span>  </span>
         { <Button variant="contained">No</Button>}
        </>
    )
  }
}
