import React, { useState } from "react";
import { editSong, readDatas } from "../utilities/crudUtility";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NotFound } from "../pages/NotFound";
import { useEffect } from "react";

export const SideBar = () => {
  const { user, admin } = useContext(UserContext);
  const [song, setSong] = useState([])
  const [currentSong, setCurrentSong] = useState(null);
 
  useEffect(() => {
    readDatas(setSong, "songs");
  },[])
  
if (!user || !admin) return <NotFound />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editSong(song[0].id, currentSong, "songs/");
  }
  
  return (
    <div className="row">
      <form action="">
        <label className="d-block" htmlFor="ének">Énekszám</label>
        <input className="mx-auto d-block m-1 p-1" name="ének" type="text" maxLength="3" onChange={(e) => setCurrentSong(e.target.value)} />
        <button className="btn btn-light m-2" type="submit" onClick={handleSubmit}>Élesít</button>
      </form>
    </div>
  );
};