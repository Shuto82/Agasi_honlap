import React from "react";

export const Worship = () => {
  return (
    <>
      <div>
        <h2 className="m-3">Néhány szó az istentiszteletről</h2>
        <div style={{ textJustify: 'inter-word', textAlign: "justify" }}>
          <p className="indent">
            A református istentisztelet fő célja - nevéből adódóan - Isten
            gyülekezeti, közösségi tisztelete. Ennek számos formája van, mi
            rendszerint énekkel és imádsággal tesszük ezt, valamint a fizikai
            valónkkal, pl. amikor bibliai rész hangzik, akkor felállunk a
            helyünkről. <br />
            Központi eleme az <strong>igeolvasás (bibliai szakasz)</strong> és
            az{" "}
            <strong>
              igehirdetés (bibliai szakasz magyarázata, ún. prédikáció).
            </strong>
          </p>
          <p className="indent">
            Az istentisztelet menete és tartalma elsőre furának hat, hiszen
            kulturális szempontból egy évszázados hagyományba csöppen az ember:
            ismeretlenek az énekek, az imádság, talán a bibliai szakaszok is,
            nem beszélve arról, hogy felállunk-leülünk-felállunk-leülünk...{" "}
            <br /> A rossz hírem az, hogy ez csak a megismerés által változik
            meg, mint minden más esetben is. <br />A jó hír, hogy emiatt nem
            kell senkinek szégyenkeznie - mi is fejlődünk, alakulunk, úgyhogy
            ezen az úton mind együtt járunk.
          </p>
          <p className="indent"><strong>Az istentiszteletek menete egy átlagos vasárnapon:</strong></p>
          <ul>
            <li>Köszöntés (bibliai szakasz), állva</li>
            <li>Kezdőének, állva</li>
            <li>Főének, ülve</li>
            <li>Ima, ülve</li>
            <li>Igeolvasás (bibliai szakasz), állva</li>
            <li>Ima, ülve</li>
            <li>Köztes ének, ülve</li>
            <li>Igeolvasás (bibliai szakasz), állva</li>
            <li>Igehirdetés, ülve</li>
            <li>Imádság, ülve</li>
            <li>Miatyánk (bibliai szakasz), állva</li>
            <li>Hirdetések, ülve</li>
            <li>Záróének, ülve</li>
            <li>Áldáskérés (bibliai szakasz), állva</li>
          </ul>
          <p className="indent">Szeretettel látjuk Önt is, ha nem ijedt meg nagyon, persze akkor is, ha igen!</p>
        </div>
      </div>
    </>
  );
};
