import { Button } from "@mui/material";
import styles from "./AddMeter.module.scss"
import { Formik } from "formik";
import React, { Component, createContext } from "react";
import { Link } from "react-router-dom";
// import { AddCustomerSchema } from "./AddCustomerSchema"
import http from "../../../../Services/Services";


export default class AddMeter extends Component<{},{ meterType: string; faultTolerance: any,costPerUnit:any,numberOfReading:any}> {
    loginResponse: any;
    initialValues: { meterType: string; faultTolerance: string,costPerUnit:string,numberOfReading:string };
    AddCustomerSchema:any;
    constructor(props: any) {
      super(props);
      this.initialValues = {meterType:"",faultTolerance:"",costPerUnit:"",numberOfReading:""}
    }

  handleSubmit = async (values: any, setSubmitting: any) => {
    console.log(values);
    try {
      
      let loginResponse = await http.post("meter/", values);
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
            <h1>Add Meter</h1>
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
                <form className={styles.Form} onSubmit={handleSubmit}>
                  <div className={styles["text-field"]}>
                  <label htmlFor="meterType">meterType</label>
                    <input
                      type="meterType"
                      name="meterType"
                      id="meterType"
                      value={values.meterType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span></span>
                      <span>
                        {errors.meterType && touched.meterType && errors.meterType}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="faultTolerance">faultTolerance</label>
                    <input
                      type="faultTolerance"
                      name="faultTolerance"
                      id="faultTolerance"
                      value={values.faultTolerance}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.faultTolerance && touched.faultTolerance && errors.faultTolerance}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="costPerUnit">costPerUnit</label>
                    <input
                      type="costPerUnit"
                      name="costPerUnit"
                      id="costPerUnit"
                      value={values.costPerUnit}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.costPerUnit && touched.costPerUnit && errors.costPerUnit}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="numberOfReading">numberOfReading</label>
                    <input
                      type="numberOfReading"
                      name="numberOfReading"
                      id="numberOfReading"
                      value={values.numberOfReading}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span> 
                      <span>
                        {errors.numberOfReading && touched.numberOfReading && errors.numberOfReading}
                      </span>
                  </div>
                  <input type="submit" value="Submit" />
                </form>

              
            //     <form onSubmit={(e)=>submitForm(e)}>
            //     <div className={styles.AddCustomers}>
            //       <label htmlFor="name">Name</label>
            //       <input
            //       type="text"
            //       name="name"
            //       value={data.name}
            //       id="name"
            //       onChange={(e)=>handleOnChange(e)}
            //       required />
            //       <label htmlFor="email">email</label>
            //       <input type="text"
            //       name="email"
            //       value={data.email}
            //       id="email"
            //       onChange={(e)=>handleOnChange(e)}
            //       required/>
            //        <label htmlFor="shippingAddress">shippingAddress</label>
            //       <input type="text"
            //       name="shippingAddress"
            //       value={data.shippingAddress}
            //       id="shippingAddress"
            //       onChange={(e)=>handleOnChange(e)}
            //       required/>
            //       <label htmlFor="state">State</label>
            //       <input type="text"
            //       name="state"
            //       value={data.state}
            //       id="state"
            //       onChange={(e)=>handleOnChange(e)}
            //       required/>
            //       <button>Submit</button>
            //     </div>
            //    </form>
              )}
            </Formik>
          </div>
        {/* </div> */}
        </>
    )
  }
}
