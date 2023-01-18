import styles from "./Treatments.module.css"
import { useEffect } from "react"

function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  export function PeelingKawitacyjny() {
    useEffect(() => {
      scrollToTop();
    }, []);
  
    return (
    <>
    <div className={styles.treatmentsWrapper}>.</div>
    <div className={styles.treatments}>

    <h2>Peeling kawitacyjny</h2>
    <p>To zabieg polegający na oczyszczeniu skóry za pomocą ultradźwięków.
Usuwanie zanieczyszczeń oraz martwych komórek przebiega bezpiecznie i bezboleśnie.

Peeling kawitacyjny pozwala na dokładne usunięcie nadmiaru sebum z porów i mieszków włosowych, pozbycie się zrogowaciałego naskórka, zaskórników, wągrów i bakterii. 

Może być stosowany przy skórze bardzo wrażliwej, delikatnej oraz cienkiej, skłonnej do podrażnień i rozszerzonych naczynek, a także jako bezinwazyjny zabieg oczyszczający dla skóry trądzikowej i przetłuszczającej się.

Bardzo dobre efekty uzyskuje się łącząc peeling kawitacyjny z sonoforezą (ultradźwiękami). 
Fale emitowane masują skórę i wprowadzają substancje aktywne wgłąb do skóry właściwej. </p>

<ul><b>Efekty:</b>
<li>oczyszczenie skóry</li>
<li>ujędrnienie tkanek (mikromasaż)</li>
<li>leczenie trądziku</li>
<li>usuwanie martwych komórek, zaskórników</li>
<li>stymulacja metabolizmu komórek</li>
<li>efekt rozjaśnienia skóry</li>
</ul>
    </div>
    </>)
}