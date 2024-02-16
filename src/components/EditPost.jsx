import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextEditor } from './TextEditor';
import { editPost } from '../utilities/crudUtility';
import { Box, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const EditPost = ({open, setOpen, id, desc, t}) => {
  const [title, setTitle] = React.useState(t);
  const [description, setDescription] = React.useState(desc);
  const navigate = useNavigate();

  const handleSave = () => {
    editPost(id, description, title);
    navigate('/');
    handleClose();
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Módosítás</DialogTitle>
        <DialogContent>
        <Box className='d-flex w-100 p-2'>
          <TextField
            id="outlined-basic"
            label="Poszt címe"
            autoFocus
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </Box>
        </DialogContent>
        <DialogContent>
        <FormControl sx={{ width: "100%", display: "flex" }}>
          <TextEditor story={description} setStory={setDescription}  />
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button> 
          <Button onClick={handleSave}>Mentés</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}