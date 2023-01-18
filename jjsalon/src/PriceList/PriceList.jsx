import { useEffect } from "react";
import styles from "./PriceList.module.css";

export function PriceList() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.priceListWrapper}>
          <tr>
            <th>Nazwa zabiegu </th>
            <th> Cena zł </th>
          </tr>
          <tr>
            <td> Peeling kawitacyjny </td>
            <td> 130 </td>
          </tr>
          <tr>
            <td> Sonoforeza </td>
            <td> 130 </td>
          </tr>
          <tr>
            <td> Mikrodermabrazja </td>
            <td> 140 </td>
          </tr>
          <tr>
            <td> Mikrodermabrazja + oczyszczenie manualne </td>
            <td> 160 </td>
          </tr>
          <tr>
            <td> Mikrodermabrazja + kwas </td>
            <td> 170 </td>
          </tr>
          <tr>
            <td> Architect Peel: oczyszczenie porów i wygładzenie skóry </td>
            <td> 200 </td>
          </tr>
          <tr>
            <td> Depigen Peel - przebarwienia (twarz) </td>
            <td> 190 </td>
          </tr>
          <tr>
            <td> Depigen Peel (twarz, szyja, dekolt) </td>
            <td> 230 </td>
          </tr>
          <tr>
            <td> PQ Age (lifting, redukcja blizn) </td>
            <td> 250 </td>
          </tr>
          <tr>
            <td> PQ Age + Dermapen </td>
            <td> 330 </td>
          </tr>
          <tr>
            <td> Retix C: silne odmłodzenie </td>
            <td> 250 </td>
          </tr>
          <tr>
            <td> Kwasy medyczne: peeling Mission - z użyciem dwóch kwasów </td>
            <td> 150 </td>
          </tr>
          <tr>
            <td> Kwasy medyczne: peeling Mission - z użyciem trzech kwasów </td>
            <td> 160 </td>
          </tr>
          <tr>
            <td> Mezoterapia igłowa </td>
            <td> 350 </td>
          </tr>
          <tr>
            <td> Modelowanie ust: 0.5 ml/1 ml </td>
            <td> 290/580 </td>
          </tr>
          <tr>
            <td> Sensiskin Garden Ceremony: Purles </td>
            <td> 130 </td>
          </tr>
          <tr>
            <td> X-Peel: skóra dojrzała z przebarwieniami </td>
            <td> 190 </td>
          </tr>
          <tr>
            <td> Manicure klasyczny bez malowania </td>
            <td> 45 </td>
          </tr>
          <tr>
            <td> Manicure hybrydowy </td>
            <td> 80 </td>
          </tr>
          <tr>
            <td> Ściągnięcie hybrydy </td>
            <td> 20 </td>
          </tr>
          <tr>
            <td> Żel na naturalnej płytce </td>
            <td> 100 </td>
          </tr>
          <tr>
            <td> Przedłużenie żelem na formie </td>
            <td> 120 </td>
          </tr>
          <tr>
            <td> Uzupełnienie żelu </td>
            <td> 100 </td>
          </tr>
          <tr>
            <td> Naprawa 1 paznokcia żelem </td>
            <td> 10 </td>
          </tr>
          <tr>
            <td> Ściągnięcie żelu bez wykonania manicure </td>
            <td> 40 </td>
          </tr>
          <tr>
            <td> Baby Boomer/ French </td>
            <td> +10 </td>
          </tr>
          <tr>
            <td> IBX System (1 zabieg) bez manicure </td>
            <td> 50 </td>
          </tr>
          <tr>
            <td> IBX System (kolejny zabieg) bez manicure </td>
            <td> 40 </td>
          </tr>
          <tr>
            <td> Pedicure frezarkowy </td>
            <td> 90 </td>
          </tr>
          <tr>
            <td> Pedicure frezarkowy hybryda </td>
            <td> 110 </td>
          </tr>
          <tr>
            <td> Pedicure hybrydowy </td>
            <td> 90 </td>
          </tr>
          <tr>
            <td> Rekonstrukcja 1 paznokcia </td>
            <td> +10 </td>
          </tr>
          <tr>
            <td> Cyrkonia 1 szt. </td>
            <td> +0.5</td>
          </tr>
          <tr>
            <td> Folia, pyłki, drobne zdobienia</td>
            <td> +1 </td>
          </tr>
          <tr>
            <td> Inne zdobienia</td>
            <td> </td>
          </tr>
        </table>
      </div>
    </>
  );
}
