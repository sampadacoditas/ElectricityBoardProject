import { Button } from "@mui/material";

import styles from "./UploadReading.module.scss"
import { Formik } from "formik";

import React, { Component, createContext } from "react";
import { Link } from "react-router-dom";
// import { AddCustomerSchema } from "./AddCustomerSchema"
import http from "../../../../Services/Services";


export default class UploadReading extends Component<{},{ name: string; email: any,address:any}> {
    loginResponse: any;
    initialValues: { name: string; email: string,address:string };
    AddCustomerSchema:any;
    constructor(props: any) {
      super(props);
      this.initialValues = {name:"",email:"",address:""}
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
                  <label htmlFor="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span></span>
                      <span>
                        {errors.name && touched.name && errors.name}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.email && touched.email && errors.email}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="address">Address</label>
                    <input
                      type="address"
                      name="address"
                      id="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.address && touched.address && errors.address}
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
