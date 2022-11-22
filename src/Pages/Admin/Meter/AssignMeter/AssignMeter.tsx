import { Button } from "@mui/material";
import styles from "./AssignMeter.module.scss"
import { Formik } from "formik";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../../../../Services/Services";
export default class AssignMeter extends Component<any,any> {

    loginResponse: any;
    data:any;
    meterData:any
    customer:any;
    initialValues: { customerId: string; meterType: string};
    EditUserSchema:any;
    constructor(props: any) {
      super(props);
      this.initialValues = { customerId: "", meterType: ""};
      this.meterData=[];
      this.customer=[];
    }
  handleSubmit = async (values: any, setSubmitting: any) => {
    // e.preventDefault();
    console.log(values);
    try {
      
    
      let customer = await http.get(`customer/${this.props.id}`);
      console.log(customer);
      

    } catch (e: any) {
      console.log("error", e);
    }
  };

  async getData () 
  {
    try {
      const meterData = await http.get("meter/");
      this.setState({data:meterData.data})
      console.log(meterData)
    } catch (e:any) {
      console.log("error", e);
    }
  }
    componentDidMount():void
    {
      this.getData()
     
    }

  render() {
    return(
        <>
          <div className={styles.center}>
            <h1 >AssignMeter</h1>
            <Formik
              initialValues={this.initialValues}
              validationSchema={this.EditUserSchema}
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
                  <label htmlFor="customerId">customerId</label>
                    <input
                      type="customerId"
                      name="customerId"
                      id="customerId"
                      value={values.customerId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span></span>
                      <span>
                        {errors.customerId && touched.customerId && errors.customerId}
                      </span>
                  </div>
                  <div className={styles["text-field"]}>
                  <label htmlFor="meterType">meterType</label>
                    <input
                      type="meterType"
                      name="meterType"
                      id="meterType"
                      value={values.meterType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span>
                      <span>
                        {errors.meterType && touched.meterType && errors.meterType}
                      </span>
                  </div>
                  <input type="submit" value="submit" />
                </form>
              )}
            </Formik>
          </div>
        {/* </div> */}
        </>
    )
  }
}
