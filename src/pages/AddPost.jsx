import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NotFound } from "./NotFound";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { TextEditor } from "../components/TextEditor";
import { FileInput } from "../components/FileInput";

import { addPost, uploadFile } from "../utilities/crudUtility";
import { Loader } from "../components/Loader";
import { Alerts } from "../components/Alerts";
import { serverTimestamp } from "firebase/firestore";

export const AddPost = () => {
  const { user, admin } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const hook = "Feri";

  if (!user || !admin) return <NotFound />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const photoUrl = await uploadFile("uploads", image);
      await addPost({
        title,
        photoUrl,
        userId: user.uid,
        description: story,
      });
      setUploaded(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="createPost">
      <h3 style={{ textAlign: "center" }}>Hír hozzáadása</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
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
        <FormControl sx={{ width: "100%", display: "flex" }}>
          <TextEditor story={story} setStory={setStory} />
        </FormControl>
        <FileInput setImage={setImage} hook={hook} />
        <Button
          type="submit"
          disabled={title.length == 0 || story.length == 0 || !image}
          variant="contained"
        >
          Feltöltés
        </Button>
      </Box>
      {loading && <Loader />}
      {uploaded && <Alerts msg="Sikeres mentés!" severity="success" />}
    </div>
  );
};