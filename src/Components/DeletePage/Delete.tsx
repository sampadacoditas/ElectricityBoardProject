import { Button } from "@mui/material";

// import styles from "./AddUser.module.scss"
import { Formik } from "formik";

import React, { Component, createContext } from "react";
// import { loginReducer } from "./LoginReducer/Login.reducer";
import { Link } from "react-router-dom";
import http from "../../Services/Services";
// import { AddUserSchema } from "./AddUserSchema"
import styles from "./Delete.module.scss"



export default class Delete extends Component<any,any> { 
  
    async handleButton(buttonText:any)
    {
      if(buttonText==="Yes")
      {
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
