// class Http {
//     // baseURL="https://jsonplaceholder.typicode.com/"

    
//     // baseURL="http://192.168.2.116:3000/auth/login";
//      baseURL="http://192.168.2.116:3000/";
//     // 192.168.1.10
//     jwtToken = "";
//     async send(url: string, options = {}) {
//       try {
//         const response = await fetch(`${this.baseURL}${url}`, options);
//         const data = await response.json();
//         console.log(data);
//         if (url === "auth/login") {
//           this.jwtToken = data.token;
//           console.log( this.jwt)
//         }
//         return data;
//       } catch (e) {
//         console.log("Something Went Wrong", e);
//       }
//     }
//     get(url: string) {
//       return this.send(url, {
//         method: "GET",
//         headers: {
//           authorization: `${this.jwtToken}`,
//         },
//       });
//     }
  
//     post(url: string, data: any) {
//       if (url === "auth/login") {
//         return this.send(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         });
//       } else {
//         return this.send(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "authorization": `${this.jwtToken}`,
//           },
//           body: JSON.stringify(data),
//         });
//       }
//     }
  
//     delete(url: string) {
//       return this.send(url, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "authorization": `${this.jwtToken}`,
//         },
//       });
//     }
//     put(url: string, data: any) {
//       return this.send(url, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "authorization": `${this.jwtToken}`,
//         },
//         body: JSON.stringify(data),
//       });
//     }
//   }
  
// //   export const http = new Http();
// const http = new Http();
// export default http;
  

import utility from "../utility/utility";

class Http {
   
    // baseURL="http://192.168.144.51:7000/";
    baseURL="http://192.168.15.99:3000/";
   
    // baseURL="http://localhost:3000/";
    // baseURL="https://jsonplaceholder.typicode.com/"
    
    async send(url: string, options = {}) {
        try {
            console.log(options)
            const response = await fetch(`${this.baseURL}${url}`, options);
            console.log(response)
            const data = await response.json();
            console.log(data)
            // console.log(data.data.token)
            if (!response.ok)
            {
                throw data.error;
            }
            console.log(data)
            return data;
        }
        catch(e:any) {
            return e.message;
        }
    }
    get(url:string) {
        return this.send(url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': utility.getStore("token"),
        },
        });
      }
    post(url: string, data: {}) {
        console.log(utility.getStore("token"))
        return this.send(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': utility.getStore("token"),
            },
            body: JSON.stringify(data)
        })
    }
    put(url:string,data:{}){
        return this.send(url,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                'Authorization':  utility.getStore("token") ,
            },
            body:JSON.stringify(data),
        })
    }
    delete(url: string) {
        return this.send(url, {
            method:"Delete",
            headers:{
                "Content-Type": "application/json",
                'Authorization':  utility.getStore("token") ,
            },
        })
    }
   
}
const http = new Http();
export default http;

