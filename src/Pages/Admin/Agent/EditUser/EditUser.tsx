import { Button } from "@mui/material";

import styles from "./EditUser.module.scss"
import { Formik } from "formik";

import React, { Component, createContext } from "react";
// import { loginReducer } from "./LoginReducer/Login.reducer";
import { Link } from "react-router-dom";
// import { EditUserSchema } from "./EditUserSchema"
// import {EditUserSchema} from "./EditUserSchema"
import http from "../../../../Services/Services";
export default class EditUser extends Component<any,any> {

    loginResponse: any;
    initialValues: { name: string; email: string,roleId:string};
    EditUserSchema:any;
    constructor(props: any) {
      super(props);
      this.initialValues = { name: "", email: "",roleId:"" };
    }
  handleSubmit = async (values: any, setSubmitting: any) => {
    // e.preventDefault();
    console.log(values);
    try {
      
      let loginResponse = await http.put(`user/${this.props.id}`,values);
      console.log(loginResponse);
     
      

    } catch (e: any) {
      console.log("error", e);
    }
  };

  render() {
    return(
        <>
          <div className={styles.center}>
            <h1 >EditUser</h1>
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
                    {/* <label htmlFor="name">
                      Email{" "} */}
                      <span>
                        {errors.name && touched.name && errors.name}
                      </span>
                    {/* </label> */}
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
                  <label htmlFor="roleId">Role</label>
                    <input
                      type="text"
                      name="roleId"
                      id="roleId"
                      value={values.roleId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span>
                    
                      <span>
                        {errors.roleId && touched.roleId && errors.roleId}
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
