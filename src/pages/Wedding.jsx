import React from "react";

export const Wedding = () => {
  return (
    <div>
      <h2 className="m-3">Néhány szó a házasságkötésről</h2>
      <div style={{ textJustify: "inter-word", textAlign: "justify" }}>
        <p className="indent">
          Házasságkötési szertartásra kérés alapján kerül sor, általában egy
          külön istentisztelet keretében. Ennek során Isten áldását kérjük a
          házaspárra és közös életükre. Bár esküszöveg hangzik az
          istentiszteleten, a fő célja az áldáskérés, nem a házasság megkötése
          (az rendszerint az anyakönyvvezető előtt történik, jellemzően az
          egyházi esemény előtt). A házasság egyházunkban nem szentség.
        </p>
        <p className="indent">
          <strong>Miért van ilyen szertartás?</strong> Mert hisszük, hogy a
          férfi-nő társkapcsolatot Isten akarta. S mint ilyenre, még erősen
          megromlott állapotunkban is áldást szeretnénk kérni Istentől. <br />{" "}
          Az esküvői szertartás egy istentiszteleti forma, szóval aki ilyet
          szeretne, az számítson rá, hogy egy bibliai szakasz lesz a
          középpontban.
        </p>
        <p className="indent">
          <strong>Kikre kérjük Isten áldását?</strong> Arra, aki szeretné, hogy
          ez megtörténjen. E tekintetben nincs vallási megkötés, de felteszem,
          az szeretné, hogy református rend szerint kérjenek áldást a
          házasságára, akinek van református kötődése. <br />
          Ehhez az eseményhez tartozik egy 3 alkalomból álló felkészülési
          folyamat, amely leginkább a lelkész és a pár ismerkedését szolgálja,
          illetve az előbukkanó teológiai- és praktikus kérdések megtárgyalását.{" "}
          <br />A házasságkötés ún. stólaköteles szertartás, azaz fizetni kell
          érte (bár ez bármikor elengedhető). Jelen pillanatban a gyülekezethez
          nem tartozóktól 15.000,-Ft-ot (12.000,-Ft stóla, plusz 3.000,-Ft
          kántori díj) szoktunk elkérni. A gyülekezet tagjaitól nem kérünk semmit.
        </p>
      </div>
    </div>
  );
};
