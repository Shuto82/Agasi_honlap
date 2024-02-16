import { useState, useEffect } from "react";
import {Button,Box} from "@mui/material"
import { Alerts } from "./Alerts";


export const FileInput = ({setImage, hook}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [err, setErr]=useState(null)



  useEffect(() => {
    if(selectedImage){
      setImageUrl(URL.createObjectURL(selectedImage));
      setImage(selectedImage);
    }
  }, [selectedImage]);

  const handleChange=(event)=>{
    setImageUrl(null)
    setErr(null)
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size > 1 * 2000 * 2048) {
        setErr("Csak 4MB méret alatti fájlok engedélyezettek!");
        return false;
      }
    setSelectedImage(event.target.files[0])
    }
}
console.log(err);

  return (
    <Box sx={{display:'flex'}}>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={handleChange}
        required
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="info" sx={{margin:2}}component="span" >
          Válassz képet
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={4} mb={4}
        textAlign="center">
         {hook ? 
          <img src={imageUrl} alt={selectedImage.name} height="100px" style={{borderRadius:'5px'}} /> : 
          <img src={imageUrl} alt={selectedImage.name} height="300px" style={{borderRadius:'5px'}} />
        }
        </Box>
      )}
     { err && <Alerts msg={err} severity="error" /> }
    </Box>
  );
};