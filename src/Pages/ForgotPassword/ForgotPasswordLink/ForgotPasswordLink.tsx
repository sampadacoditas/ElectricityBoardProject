import { Formik, Form, Field } from 'formik'
import React from 'react'
import {forgotPasswordLinkSchema} from '../../../utility/utility'
import WithRouter from '../../../WithRouter/WithRouter'
class ForgotPasswordLink extends React.Component<any,any>{

    params = this.props.navigate.params

    initialValues = {
        password: "",
        newPassword: ""
    }
    onSubmit = () => {
        const token=this.props.router.params.id

        

    }
    render(): React.ReactNode {
       
        return(
            <>
            <Formik
                initialValues={this.initialValues}
                validationSchema={forgotPasswordLinkSchema}
                onSubmit={this.onSubmit}
            />
            {
                
                
            }
           </>
        )
    }
}


export default WithRouter(ForgotPasswordLink)