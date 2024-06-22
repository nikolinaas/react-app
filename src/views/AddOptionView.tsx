import { Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddModal from "./AddModal";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchForm";

const AddOptionView = (onSearch:any) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 350,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
    return(
        
<div className="addDiv">
<SearchBar />
<Button className="buttonAdd" onClick={handleOpen}><AddIcon></AddIcon>Add</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <AddModal/>
  </Box>
</Modal>
</div>

    );

};
export default AddOptionView