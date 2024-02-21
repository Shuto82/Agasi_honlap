import React from "react";

export const Council = () => {
  return (
    <div>
      <h2 className="m-3">A gyülekezet vezetősége</h2>
      <div className="row justify-content-center">
        <div className="col-auto">
          <table className="table-bordered table-responsive sand">
            <thead >
              <tr >
                <th scope="col" >Név</th>
                <th scope="col">Tisztség</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>Adamek Norbert</td>
                <td>helyettes lelkész</td>
              </tr>
              <tr>
                <td>Polgár Péter Pál</td>
                <td>főgondnok</td>
              </tr>
              <tr>
                <td>Börönte-Polgár Nóra</td>
                <td>presbiter</td>
              </tr>
              <tr>
                <td>Hetényi Józsefné</td>
                <td>presbiter</td>
              </tr>
              <tr>
                <td>Tormásiné Balogh Aranka</td>
                <td>presbiter</td>
              </tr>
              <tr>
                <td>Ungor József</td>
                <td>presbiter</td>
              </tr>
              <tr>
                <td>Zombory Klára</td>
                <td>presbiter</td>
              </tr>
              <tr>
                <td>Polgár Ivetta</td>
                <td>pótpresbiter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
