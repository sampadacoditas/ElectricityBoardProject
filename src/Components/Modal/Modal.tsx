import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import AddUser from '../AddUser/AddUser';
// import styles from "./AddUserModal.module.scss"
import styles from "./Modal.module.scss"
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({Component,heading,color}:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.button}>
      <Button onClick={handleOpen} sx={{height:"2rem",textAlign:"center",
      marginLeft:"0rem",color:"black",paddingLeft:"1rem",padding:"1rem",marginTop:"1rem"}}>{heading}</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2"sx={{textAlign:'center',marginTop:"0",paddingTop:"0"}}>
          {Component}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
