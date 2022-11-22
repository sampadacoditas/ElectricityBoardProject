
import { Button } from "@mui/material";
import { Formik } from "formik";
import { Component, createContext, useEffect, useState } from "react";
// import ButtonComponents from "../../Components/Button/Button";
import ButtonAppBar from "../../Components/Header/Header";
import EnableColorOnDarkAppBar from "../../Components/Header/Header";
import http from "../../Services/Services";
import styles from "./ForgotPassword.module.scss"
export default class ForgotPassword extends Component<any,any>{
  ForgotPasswordSchema: any;
  navigate:any
  initialValues: { email: string };
  constructor(props: any) {
    super(props);
    this.initialValues = { email: "" };
  }

  handleSubmit = async (values: any, setSubmitting: any) => {
    console.log(values);
    try {
      let forgotresponse = await http.post("auth/forgot-password", values);
      console.log(forgotresponse.data.token);
    } catch (e: any) {
      console.log("error")
    }
  };
  render() {
    
    return (
      <>
        <div className={styles.loginContainer}>
          <div className={styles.center}>
            {/* <div className={styles.image}>Image</div> */}
            <h1>ForgotPassword</h1>
            <Formik
              initialValues={this.initialValues}
              validationSchema={this.ForgotPasswordSchema}
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
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                    />
                    <span></span>
                    <label htmlFor="email">
                      Email{" "}
                      <span>
                        {errors.email && touched.email && errors.email}
                      </span>
                    </label>
                  </div>
                  <input type="submit" value="submit" />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </>
    );
  }
}

// import { Form, Formik } from 'formik'
// import React from 'react'
// import styles from "./ForgotPassword.module.scss"
// // import MyTextfield from '../Formik/InputMUI/InputMUI'
// import { Box, Button, Container, CssBaseline, Typography } from '@mui/material'
// import WithRouter from '../../WithRouter/WithRouter'
// import http from '../../Services/Services'
// class ForgotPassword extends React.Component<any, any> {
//     initialValues = {
//         password: "",
//         confirm_password: ""
//     }
//     onSubmit = async (values: any) => {
//         const token = this.props.router.params.id
//         console.log(token)
//         localStorage.setItem("token", token)
//         const { password } = values
//         const response = await http.put("auth/setNewPassword", { "password": password })
//         console.log(response)
//     }
//     render() {
//       return (
//         <>
//           <div className={styles.loginContainer}>
//             <div className={styles.center}>
//               {/* <div className={styles.image}>Image</div> */}
//               <h1>Login</h1>
//               <Formik
//                 initialValues={this.initialValues}
//                 // validationSchema={LoginSchema}
//                 onSubmit={(values, { setSubmitting }) =>
//                   this.onSubmit(values)
//                 }
//               >
//                 {({
                
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
                  
//                 }) => (
//                   <form className={styles.loginForm} onSubmit={this.onSubmit}>
//                     <div className={styles["text-field"]}>
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
                        
//                       />
//                       <span></span>
//                       <label htmlFor="password">
//                       password{" "}
//                         <span>
//                           {errors.password && touched.password && errors.password}
//                         </span>
//                       </label>
//                     </div>
//                     <div className={styles["text-field"]}>
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         required
//                       />
//                       <span></span>
//                       <label htmlFor="password">
//                         Password{" "}
//                         <span>
//                           {errors.password && touched.password && errors.password}
//                         </span>
//                       </label>
//                     </div>
//                     <input type="submit" value="Login" />
//                   </form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </>
//       );
//     }
// }
// export default WithRouter(ForgotPassword)

