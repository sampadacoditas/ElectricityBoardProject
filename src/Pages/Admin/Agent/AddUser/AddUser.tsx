import { Button } from "@mui/material";

import styles from "./AddUser.module.scss";
import { Formik } from "formik";

import React, { Component, createContext } from "react";
// import { loginReducer } from "./LoginReducer/Login.reducer";
import { Link } from "react-router-dom";
import { AddUserSchema } from "./AddUserSchema";
import http from "../../../../Services/Services";

export default class AddUser extends Component<
  {},
  { name: string; email: any; roleId: any }
> {
  loginResponse: any;
  initialValues: { name: string; email: string; roleId: string };
  AddUserSchema: any;
  constructor(props: any) {
    super(props);
    this.initialValues = { name: "", email: "", roleId: "" };
  }

  handleSubmit = async (values: any, setSubmitting: any) => {

    console.log(values);
    try {
      let loginResponse = await http.post("auth/addUser", values);
      console.log(loginResponse);
    } catch (e: any) {
      console.log("error", e);
    }
  };

  render() {
    return (
      <>
        <div className={styles.center}>
          <h1>AddUser</h1>
          <Formik
            initialValues={this.initialValues}
            validationSchema={this.AddUserSchema}
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
                  <span>{errors.name && touched.name && errors.name}</span>
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
                  <span>{errors.email && touched.email && errors.email}</span>
                </div>

                <div className={styles["text-field"]}>
                  <label htmlFor="roleId">Role</label>
                  <div className={styles.role}>
                  <select
                    name="roleId"
                    value={values.roleId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="1" label="Select">
                      Select{" "}
                    </option>
                    <option value="1" label="Admin">
                      {" "}
                      Admin
                    </option>
                    <option value="2" label="Agent">
                      {" "}
                      Agent
                    </option>
                    </select>
                  </div>
                  
                    {/* <select name="roleId" id="roleId"> */}
                    {/* <option value={values.roleId()}onChange={handleChange}
                      onBlur={handleBlur}>Admin</option>
                    <option value={"2"} onChange={handleChange}
                      onBlur={handleBlur}>Agent</option>
                  </select> */}
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
    );
  }
}
