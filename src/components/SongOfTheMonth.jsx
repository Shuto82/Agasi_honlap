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

  return (
    <>
      <div className="container text-center" style={{fontFamily: "Yellowtail"}}>
        <FadeIn><div >Üdvözöljük gyülekezetünk honlapján!</div></FadeIn>
        <hr />
        <div className="m-2">A hónap éneke:</div>
        <div className="fs-1">{songNum}</div>
        <div className="mt-2">
        <a href={`https://enekeskonyv.reformatus.hu/digitalis-reformatus-enekeskonyv/enekek/?szam=${songNum}&q=`}
        style={{textDecoration: "none", color: 'black'}} target="_blank">A református énekeskönyvet itt találják</a>
      </div>
      </div>
    </>
  );
};
