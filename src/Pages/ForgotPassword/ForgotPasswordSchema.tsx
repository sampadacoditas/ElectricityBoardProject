import * as Yup  from "yup"
export const ForgotPasswordSchema=Yup.object({
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(1).required("please enter your password"),
})
