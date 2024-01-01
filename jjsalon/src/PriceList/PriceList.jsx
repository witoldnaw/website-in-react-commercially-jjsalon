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
          <h2>Zabiegi na twarz</h2>
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
          <h2>Manicure</h2>
          <tr>
            <td> Manicure klasyczny bez malowania </td>
            <td> 50 </td>
          </tr>
          <tr>
            <td> Manicure hybrydowy </td>
            <td> 100 </td>
          </tr>
          <tr>
            <td> Ściągnięcie hybrydy </td>
            <td> 20 </td>
          </tr>
          <tr>
            <td> Żel na naturalnej płytce </td>
            <td> 120 </td>
          </tr>
          <tr>
            <td> Przedłużenie żelem na formie </td>
            <td> 140 </td>
          </tr>
          <tr>
            <td> Uzupełnienie żelu </td>
            <td> 120 </td>
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
          <h2>Pedicure</h2>
          <tr>
            <td> Pedicure frezarkowy </td>
            <td> 90 </td>
          </tr>
          <tr>
            <td> Pedicure frezarkowy hybryda </td>
            <td> 130 </td>
          </tr>
          <tr>
            <td> Pedicure hybrydowy </td>
            <td> 90 </td>
          </tr>
          <tr>
            <td> Rekonstrukcja 1 paznokcia </td>
            <td> +10 </td>
          </tr>
          <h2>Zdobienia</h2>
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
          <h2>Stylizacja rzęs</h2>
          <tr>
            <td> Stylizacja rzęs 2-3 D</td>
            <td> 180/190 </td>
          </tr>
          <tr>
            <td> Stylizacja rzęs 4-6 D</td>
            <td> 190/170 </td>
          </tr>
          <tr>
            <td> Stylizacja rzęs 6-8 D</td>
            <td> 200/180 </td>
          </tr>
          <h2>Stylizacja brwi</h2>
          <tr>
            <td> Regulacja brwi</td>
            <td> 30 </td>
          </tr>
          <tr>
            <td> Henna klasyczna</td>
            <td> 40 </td>
          </tr>
          <tr>
            <td> Koloryzacja farbką</td>
            <td> 80 </td>
          </tr>
          <tr>
            <td> Henna pudrowa</td>
            <td> 90 </td>
          </tr>
          <tr>
            <td> Laminacja</td>
            <td> 110 </td>
          </tr>
          <tr>
            <td> Laminacja + farbka</td>
            <td> 130 </td>
          </tr>
          <tr>
            <td> Stylizacja rzęs 2-3 D</td>
            <td> 180/190 </td>
          </tr>
          <h2>Makjaz permanentny</h2>
          <tr>
            <td> Brwi</td>
            <td> 600 </td>
          </tr>
          <tr>
            <td> Uzupełnienie do 2 miesięcy</td>
            <td> 150 </td>
          </tr>
          <tr>
            <td> Korekta brwi do roku</td>
            <td> 400 </td>
          </tr>
          <tr>
            <td> Korekta brwi do 2 lat</td>
            <td> 500 </td>
          </tr>
          <tr>
            <td> Usta</td>
            <td> 600 </td>
          </tr>
          <tr>
            <td> Uzupełnienie do 2 miesięcy</td>
            <td> 150 </td>
          </tr>
          <tr>
            <td> Korekta ust do 2 lat</td>
            <td> 500 </td>
          </tr>
        </table>
      </div>
    </>
  );
}
