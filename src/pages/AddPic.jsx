import React, { useContext, useState } from "react";
import { FileInput } from "../components/FileInput";
import { Button } from "@mui/material";
import { addPic, uploadFile } from "../utilities/crudUtility";
import { UserContext } from "../context/UserContext";
import { NotFound } from "./NotFound";
import { Loader } from "../components/Loader";
import { Alerts } from "../components/Alerts";


export const AddPic = () => {
  const { user, admin } = useContext(UserContext);
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!user || !admin) return <NotFound />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUploaded(false);
    try {
      const photoUrl = await uploadFile("pictures", image);
      await addPic(photoUrl, );
      setUploaded(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }; 

  return (
    <>
      <div>
        <h1 className="m-3">Itt képeket tudsz feltölteni a Galériába</h1>
        <FileInput setImage={setImage} setUploaded={setUploaded} />
        <Button
          type="submit"
          disabled={!image}
          variant="contained"
          onClick={handleSubmit}
        >
          Feltöltés
        </Button>
        {loading && <Loader />}
        {uploaded && <Alerts msg="Sikeres mentés!" severity="success" />}
      </div>
    </>
  );
};
