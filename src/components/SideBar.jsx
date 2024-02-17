import React, { useState } from "react";
import { editSong } from "../utilities/crudUtility";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NotFound } from "../pages/NotFound";

export const SideBar = () => {
  const { user } = useContext(UserContext);
  const [song, setSong] = useState(null)

  if (!user || user.uid !== "XjjdcxlAOwgfcJ2cSNpUPgNSYZM2") return <NotFound />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = "0POdGKvNgb4HikIj9IPl"

    await editSong(id, song, "songs/");
  }

  return (
    <div className="row">
      <form action="">
        <label className="d-block" htmlFor="ének">Énekszám</label>
        <input className="mx-auto d-block m-1 p-1" name="ének" type="text" maxLength="3" onChange={(e) => setSong(e.target.value)} />
        <button className="btn btn-light m-2" type="submit" onClick={handleSubmit}>Élesít</button>
      </form>
    </div>
  );
};
