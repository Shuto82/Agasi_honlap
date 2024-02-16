import React, { useEffect, useState } from "react";
import { readDatas } from "../utilities/crudUtility";

export const SongOfTheMonth = () => {
const [song, setSong] = useState([]);

useEffect(() => {
readDatas(setSong, "songs");
},[])

console.log(song)

  return (
    <>
      <div className="container text-center">
        <div>Üdvözöljük gyülekezetünk honlapján!</div>
        <div className="fs-4 m-3">A hónap éneke</div>
        <div className="fs-3">{song.map(obj => obj.val)}</div>
      </div>
    </>
  );
};
