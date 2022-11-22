// import {useNavigate,useParams} from "react-router-dom";
// const WithRouter = (Component: any) => {
//     const ComponentWithRouterProp = (props: any) => {
//          let navigate = useNavigate();
//          let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{navigate, params }}
//             />
//         );
//     }
//     return ComponentWithRouterProp;
// }
// export default WithRouter


import {useNavigate,useParams} from "react-router-dom";
const WithRouter = (Component: any) => {
    const ComponentWithProp = (props: any) => {
         let navigate = useNavigate();
         let params = useParams()
        
        return (
            <Component navigate={{navigate, params}} {...props}/>   
        );
    }
    return ComponentWithProp;
}
export default WithRouter










