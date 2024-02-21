import { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { deleteData, readDatas } from "../utilities/crudUtility";
import Popover from "@mui/material/Popover";
import { UserContext } from "../context/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export const Carousell = () => {
  const {user, admin} = useContext(UserContext);
  const [index, setIndex] = useState(0);
  const [pics, setPics] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleEnlarge = () => {
    setAnchorEl(pics[index].photoUrl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleDelete = async () => {
    if (user.email === admin) {
      await deleteData(pics[index].id, anchorEl, "images");
      handleClose();
      navigate('/gallery');
    }
  }

  console.log(pics)

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    readDatas(setPics, "images");
  }, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {pics.map((obj) => (
          <Carousel.Item key={obj.id} >
            <img
              src={obj.photoUrl}
              style={{ maxWidth: "50vw", maxHeight: "50vh" }} onClick={handleEnlarge}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <img
          src={anchorEl}
          alt=""
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        />
        {user.email === admin && <DeleteIcon titleAccess="Törlés" style={{color: 'red', fontSize: '2rem', 
        cursor: 'pointer'}} 
         onClick={handleDelete}></DeleteIcon>}
      </Popover>
    </>
  );
};
