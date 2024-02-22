import React from "react";

export const Funeral = () => {
  return (
    <div>
      {" "}
      <h2 className="m-3">Néhány szó a temetésről</h2>
      <div style={{ textJustify: "inter-word", textAlign: "justify" }}>
        <p className="indent">
          Temetési szertartásra kérés alapján kerül sor, búcsúztató keretében,
          tipikusan a temetőben. Ennek során igyekszünk az elhunyttól búcsúzni
          és vigasztalást kérni a gyászolók számára Istentől. <br />A temetés
          egyházunkban nem szentség.
        </p>
        <p className="indent">
          <strong>Miért van ilyen szertartás?</strong> Mert nem tagadjuk meg
          azoktól a lehetőséget, akik Krisztusban bízva, éppen református
          szertartás szerint szeretnének búcsúzni elhunyt szerettüktől.
          <br /> A temetési szertartás is egy istentiszteleti forma, így aki ezt
          választja, az számítson rá, hogy Isten szava lesz majd a középpontban,
          az lesz magyarázva, s a feltámadás krisztusi örömüzenete lesz
          hirdetve:{" "}
          <a
            href="https://hu.wiktionary.org/wiki/nekrol%C3%B3g"
            target="_blank"
          >
            nekrológ
          </a>{" "}
          nem hangzik majd el.
        </p>
        <p className="indent">
          <strong>Mik a temetési szertartás feltételei?</strong>
        </p>
        <ul>
          <li>
            A hozzátartozók református szertartás szerint szeretnének búcsúzni
            szerettüktől.
          </li>{" "}
          <li>
            Az elhunyt gyülekezetünk területén élt (ágasegyházi lakcím). Ha nem,
            úgy gyülekezetek közötti egyeztetésre van szükség, de nem
            megoldhatatlan.
          </li>{" "}
          <li>
            Továbbá az elhunyt református volt. Bár ez utóbbi feltétel
            tekintetében is van kivétel, de ez felekezetek közötti egyeztetést
            igényel, amely egy cseppet problémásabb.
          </li>
        </ul>{" "}
        <p className="indent">
          A temetés ún. stólaköteles szertartás, azaz fizetni kell érte (bár ez
          bármikor elengedhető). Amennyiben az elhunyt nem tartozott
          gyülekezetünkhöz, úgy 20.000,-Ft-nyi gyülekezeti hozzájárulást
          szoktunk elkérni. Amennyiben az elhunyt gyülekezetünk tagja volt, úgy
          nem kérünk semmit.
        </p>
        <p className="indent">
          <a
            href="https://reformatus.hu/documents/277/MRE-a-temetesi-istentisztelet-rendje.pdf"
            target="_blank"
          >
            A temetési szertartás liturgiáját itt találják
          </a>
        </p>
      </div>
    </div>
  );
};
