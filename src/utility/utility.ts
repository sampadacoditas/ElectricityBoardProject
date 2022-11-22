import * as Yup  from "yup"
export const forgotPasswordLinkSchema=Yup.object({
    password:Yup.string().min(1).required("please enter your password"),
})


let store:{[key:string]:string} = {
};
const modifyStore = (key:string, payload:string) => {
    store = { ...store, [key]: payload };
    return store;
}
const getStore = (key:string) => {
    return store[key];
}
export default{
    modifyStore,
    getStore
}