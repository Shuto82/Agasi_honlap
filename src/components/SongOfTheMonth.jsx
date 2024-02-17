import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import { readDatas } from "../utilities/crudUtility";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`animation: 4s ${keyframes `${fadeIn}`}`;

export const SongOfTheMonth = () => {
const [song, setSong] = useState([]);

useEffect(() => {
readDatas(setSong, "songs");
},[])

const songNum = song.map(obj => obj.val);

console.log(song)

  return (
    <>
      <div className="container text-center">
        <FadeIn><div style={{fontFamily: "Yellowtail", fontSize: "2.5rem"}}>Üdvözöljük gyülekezetünk honlapján!</div></FadeIn>
        <div className="fs-4 m-3">A hónap éneke</div>
        <div className="fs-1">{songNum}</div>
        <div className="fs-5 mt-4">
        <a href={`https://enekeskonyv.reformatus.hu/digitalis-reformatus-enekeskonyv/enekek/?szam=${songNum}&q=`}
        style={{textDecoration: "none", color: 'black'}} target="_blank">A református énekeskönyvet itt találják</a>
      </div>
      </div>
    </>
  );
};
