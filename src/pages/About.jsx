import React from "react";

export const About = () => {
  return (
    <div>
      <h2 className="m-3">Tudnivalók a gyülekezetről</h2>
      <div style={{ textJustify: "inter-word", textAlign: "justify" }}>
        <p className="indent">
          Az Ágasegyházi Református Egyházközség hivatalosan 1953-ban alakult.
          Már előtte is létezett a településen református gyülekezet, de ahhoz
          még nem volt elég erős, hogy önálló lehessen: ennek az ideje jött el
          1953-ban, éppen Sztálin halálának évében.
        </p>
        <p className="indent">
          Azóta sok víz lefolyt a Dunán. Az elmúlt években szépen-lassan
          kevesebben lettünk. Ez akár aggodalommal is eltölthetne minket, de mi
          inkább Krisztusra szeretnénk nézni, s Pál apostollal mondani: "ami
          mögöttem van, azt elfelejtve, ami pedig előttem van, annak
          nekifeszülve futok egyenest a cél felé, Isten mennyei elhívásának
          Krisztus Jézusban adott jutalmáért."{" "}
          <a href="https://szentiras.hu/UF/Fil3,14" target="_blank">
            Fil. 3,14
          </a>
        </p>{" "}
        <p className="indent">
          Ezt a pályát szeretnénk befutni, s azért reméljük, közben futótársakra
          is találunk majd, Krisztus nagyobb dicsőségére!
        </p>
      </div>
    </div>
  );
};
