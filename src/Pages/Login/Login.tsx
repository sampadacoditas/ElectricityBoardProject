import { Formik } from "formik";
import React, { Component } from "react";
import styles from "./Login.module.scss";
import { Link,useNavigate } from "react-router-dom";
import http from "../../Services/Services";
import utility from "../../utility/utility";
import { LoginSchema } from "./LoginSchema"
import history from '../../History/history';
import WithRouter from "../../WithRouter/WithRouter"
interface  ILoginProps
{
 history:any,
 navigate:any
}
class LoginComponent extends Component<ILoginProps,{},{ email: string; password: any } > {

  loginResponse: any;
  navigate:any
  initialValues: { email: string; password: string };
  LoginSchema:any;
  constructor(props: any) {
    super(props);
    this.initialValues = { email: "", password: "" };
  }

  handleSubmit = async (values: any, setSubmitting: any) => {
    console.log(values);
    try {
      let loginResponse = await http.post("auth/login", values);
      console.log(loginResponse.data.token);
      // utility.modifyStore("token", loginResponse.data.token)
      utility.modifyStore("token", loginResponse.data.accessToken)
      // if( loginResponse.data.roleId==="ADMIN")//1
      // {
      //   this.props.navigate("/admin")
       
      // }
      if( loginResponse.data.role==="ADMIN")//1
      {
        this.props.navigate("/admin")
       
      }
      else{
        console.log("else")
       
      }
   
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
            <h1>Login</h1>
            <Formik
              initialValues={this.initialValues}
              validationSchema={LoginSchema}
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
                  <div className={styles["text-field"]}>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span></span>
                    <label htmlFor="password">
                      Password{" "}
                      <span>
                        {errors.password && touched.password && errors.password}
                      </span>
                    </label>
                  </div>
                  <div>
                    
                     <Link 
                    to="/forgotPassword" 
                    className={styles.forgotPassword}>Forgot Password?</Link> 
                  </div> 
                  <input type="submit" value="Login" />
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className={styles.image}>
        </div>
      </>
    );
  }
}

export default WithRouter(LoginComponent)

// // const { email, password } = this.state
// return (
//   <div className={styles.loginContainer}>
//     <div className={styles.center}>
//       <h1>Login</h1>
//       <Formik
//         initialValues={this.initialValues}
//         validate={values => this.validate(values)}
//         onSubmit={(e) => this.onSubmit(e)} >
//         <form className={styles.loginForm} onSubmit={this.onSubmit}>
//         {
//           ({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             onSubmit,
//             isSubmitting,
//           }) =>
//             (
//           //   <div className={styles["text-field"]}>
//           //   <input
//           //     type="email"
//           //     name="email"
//           //     id="email"
//           //     value={email}
//           //     onChange={(e) => {
//           //       // this.setState({email:e.target.value})
//           //     }}
//           //     required
//           //   />
//           //   <span></span>
//           //   <label htmlFor="email">Email</label>
//           //   </div>
//           //  <div className={styles["text-field"]}>
//           //  <input
//           //     type="password"
//           //     name="password"
//           //     id="password"
//           //     value={password}
//           //     onChange={(e) => {
//           //       // this.setState({password:e.target.value})
//           //     }}
//           //     required
//           //   />
//           //   <span></span>
//           //   <label htmlFor="password">Password</label>
//           //   </div>
//           //   <div>
//           //   {/* <Link to="/forgotPassword" className={styles.forgotPassword}>Forgot Password?</Link> */}
//           //   </div>
//           //  <input type="submit" value="Login" />
//             </Formik>

//     </div>
//   </div>

// )
//   }

//     );
//  }
// };
