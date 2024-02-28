import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextEditor } from "./TextEditor";
import {
  addPic,
  deletePic,
  editPost,
  uploadFile,
} from "../utilities/crudUtility";
import { Box, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FileInput } from "./FileInput";

export const EditPost = ({ open, setOpen, id, desc, t, p }) => {
  const [title, setTitle] = React.useState(t);
  const [description, setDescription] = React.useState(desc);
  const [image, setImage] = useState(p);
  const navigate = useNavigate();
  let photoUrl = p;

  const handleSave = async () => {
    if (photoUrl != image) {
      deletePic(photoUrl);
      try {
        photoUrl = await uploadFile("uploads", image);
      } catch (err) {
        console.log(err);
      }
    }

    await editPost({ id, description, title, photoUrl });
    navigate("/");
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Módosítás</DialogTitle>
        <DialogContent>
          <div className="my-2">
            <img src={image} style={{ maxWidth: "50%" }} />
          </div>
        </DialogContent>
        <DialogContent>
          <Box className="d-flex w-100 p-2">
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
          <FormControl
            sx={{ minHeight: "3rem", width: "100%", display: "flex" }}
          >
            <TextEditor story={description} setStory={setDescription} />
          </FormControl>
        </DialogContent>
        <DialogContent>
          <FileInput setImage={setImage} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button>
          <Button onClick={handleSave}>Mentés</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
