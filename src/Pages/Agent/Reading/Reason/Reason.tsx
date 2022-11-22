import { Button } from "@mui/material";

import styles from "./Reason.module.scss"
import { Formik } from "formik";

import React, { Component, createContext } from "react";
import { Link } from "react-router-dom";
// import { AddCustomerSchema } from "./AddCustomerSchema"
import http from "../../../../Services/Services";


export default class UploadReading extends Component<{},{ type: string; reason: any,photo:any}> {
    loginResponse: any;
    initialValues: { type: string; reason: string,photo:string };
    AddCustomerSchema:any;
    constructor(props: any) {
      super(props);
      this.initialValues = {type:"",reason:"",photo:""}
    }

  handleSubmit = async (values: any, setSubmitting: any) => {
    console.log(values);
    try {
      
      let loginResponse = await http.post("customer/", values);
      console.log(loginResponse);
      if(!loginResponse.ok)
      {
        console.log("first")
        
      }
      else{
        console.log("else")
       
      }

    } catch (e: any) {
      console.log("error", e);
    }
  };

  render() {
    return(
        <>
        {/* <div className={styles.loginContainer}> */}
          <div className={styles.center}>
            <h1>Add Customer</h1>
            <Formik
              initialValues={this.initialValues}
              validationSchema={this.AddCustomerSchema}
              onSubmit={(values, { setSubmitting }) =>
                this.handleSubmit(values, setSubmitting)
              }
            >
              {({
              
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                
              }) => (
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                  <div className={styles["text-field"]}>
                  <label htmlFor="type">Type</label>
                    <input
                      type="type"
                      name="type"
                      id="type"
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span></span>
                      <span>
                        {errors.type && touched.type && errors.type}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="reason">Reason</label>
                    <input
                      type="reason"
                      name="reason"
                      id="reason"
                      value={values.reason}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.reason && touched.reason && errors.reason}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="photo">photo</label>
                    <input
                      type="photo"
                      name="photo"
                      id="photo"
                      value={values.photo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.photo && touched.photo && errors.photo}
                      </span>
                  </div>
                  <input type="submit" value="Submit" />
                </form>
              )}
            </Formik>
          </div>
        
        </>
    )
  }
}
