import React from "react";

export const Confirmation = () => {
  return (
    <div>
      <h2 className="m-3">Néhány szó a konfirmációról</h2>
      <div style={{ textJustify: "inter-word", textAlign: "justify" }}>
        <p className="indent">
          Amikor egy korábban megkeresztelt (mindegy, milyen gyülekezetben)
          felnőtt szeretne belépni a reformátusok közösségébe, azaz reformátussá
          lenni, akkor kerül sor az illető konfirmációjára. A szó megerősítést
          jelent: elsősorban a hite megerősítését annak megvallása által a
          gyülekezet előtt, másodsorban szülei fogadalmának a megerősítését,
          amelyet még keresztelésekor tettek.
          <br />A konfirmáció nem szentség.
        </p>
        <p className="indent">
          <strong>Miért gyakoroljuk?</strong> Mert szeretnénk lehetőséget adni a
          református gyülekezetbe való hivatalos belépésre azoknak, akik
          felnőttek, s meg vannak keresztelve. Ezzel jogot nyernek az úrvacsorai
          közösségben való részvételre is (bár ennek vannak anomáliái).
        </p>
        <p className="indent">
          <strong>Kik konfirmálhatnak?</strong> Azon megkeresztelt felnőttek (14+ év), akik
          ezt szeretnék és a felkészítés folyamatát vállalják (
          <a href="https://regi.reformatus.hu/mutat/6216/" target="_blank">
            Heidelbergi Káté
          </a>{" "}
          alapján történő beszélgetés-sorozat), mely folyamat pár hónapig tart
          (előzetes ismeretek megléte folytán ez változó). A felkészülést a
          gyülekezet előtt tett hitvallás zárja le. <br />
          Azon gyermekek is konfirmálhatnak, akik meg vannak keresztelve, s a
          két évig tartó felkészítési folyamaton résztvesznek, amelynek végén
          vizsgát és hitvallást tesznek. A konfirmáció alsó korhatára ez esetben is 14 év.
          <br />A felkészülés módjában jelentkező anomália még feloldásra vár.
        </p>
        <p className="indent">
          <a
            href="https://reformatus.hu/documents/278/MRE-konfirmacio-rendje.pdf"
            target="_blank"
          >
            A konfirmációs liturgiát itt találják
          </a>
        </p>
      </div>
    </div>
  );
};
