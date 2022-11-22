import React, { useContext, useState } from "react";
// import { Button } from "../Button/Button";
import styles from "./AgentProfile.module.scss";
// import { CgProfile } from "react-icons/cg";
// import { ResetPassword } from "../ResetPassword/ResetPassword";
// import { Modal } from "../Modal/Modal";
// import { AdminContext } from "../../Pages/Admin/Admin";
export const AgentProfile = () => {
  const [data,setData]=useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  
  return (
    <>
    <div>
      <div className={styles.icon}>
        {/* <CgProfile /> */}
      </div>
      <div className={styles.ProfileDetails}>
        <div className={styles.Profile}>
          Name:sampada Email:Sftfsxf2gmail.com Address:parvati nagar
          contact:123456789
        </div>
      </div>
      <div className={styles.Button}>
        {/* <Button 
        buttonText={"ResetPassword"}
        // onClick={()=>toggleModal(<ResetPassword/>)}
        /> */}
        {/* <Button buttonText={"Close"} /> */}
      </div>
      </div>
      <div className={styles.ResetPassword}>
      {/* {modal && <Modal modal={modal} setModal={toggleModal} Page={page}/>} */}
      </div>
    </>
  );
};
