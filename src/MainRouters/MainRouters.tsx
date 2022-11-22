// import { Route, Switch } from "react-router";

//  export const MainRouters  = ({ array }: any) => {
//   // const recursiveRoutes = (routes: any) => {
//   //   return (
//   //     <>
//   //       {routes.map((route: any) => {
//   //         const path = route.path;
//   //         const component = route.component;
//   //         return (
//   //           <Route   path={path} exact component={component}>
//   //             {route.children ? recursiveRoutes(route.children) : <></>}
//   //           </Route>
//   //         );
//   //       })}
//   //     </>
//   //   );
//   // };
  
//   return (
//     <>
//     <Switch>
//         {array.map((route: any) => {
//           const path = route.path;
//           const component = route.component ;
//           return (
//             <Route path={path} element={component}>
//               {route.children
//                 ? route.children.map((e:any) => {
//                     const path = e.path;
//                     const component = e.component;
//                     return <Route path={path}  element={component}> </Route>;
//                   })
//                 : null}
//             </Route>
//           );
//         })}
//       </Switch>
//     {/* <Switch>
//         {array.map((route: any) => {
//           const path = route.path;
//           const component = route.component;
//           return (
//             <Route  path={route.path}  exact component={component }>
//               {route.children
//                 ? recursiveRoutes(route.children) : <></>}
//             </Route>
//           );
//         })}
//       </Switch> */}
//     </>
//   );
// };

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { routes } from "../Admin/Admin.data";

// export const MainRouters = ({ array }: any) => {
//   return (
//     <Routes>
//       {array.map((route: any) => {
//         const path = route.path;
//         const Element = route.component;
//         return (
//           <Route path={path} element={<Element />}>
//             {route.children
//               ? route.children.map((e: any) => {
//                   const path = e.path;
//                   const Element = e.component;
//                   return (
//                     <Route path={path} element={<Element />}>
//                       {e.children
//                         ? e.children.map((e: any) => {
//                             const path = e.path;
//                             const Element = e.component;
//                             return (
//                               <Route path={path} element={<Element />}></Route>
//                             );
//                           })
//                         : null}
//                     </Route>
//                   );
//                 })
//               : null}
//           </Route>
//         );
//       })}
//     </Routes>
//   );
// };



import { Route, Routes } from "react-router-dom";
 export const MainRouters  = ({ array }: any) => {
  const recursiveRoutes = (routes: any) => {
    return (
      <>
        {routes.map((route: any) => {
          const path = route.path;
          const Element = route.component;
          return (
            <Route  path={path} element={<Element />}>
              {route.children ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </>
    );
  };
  
  return (
    <>
    <Routes>
        {array.map((route: any) => {
          const path = route.path;
          const Element = route.component;
          return (
            <Route path={path} element={<Element />}>
              {route.children
                ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};
