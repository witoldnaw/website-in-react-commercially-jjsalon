import styles from "./Treatments.module.css"
import { useEffect } from "react"
    
    function scrollToTop() {
        window.scrollTo(0, 0);
      }
      
      export function Mikrodermabrazja() {
        useEffect(() => {
          scrollToTop();
        }, []);
      
    return (
    <>
    <div className={styles.treatmentsPageWrapper}>.</div>
    <div className={styles.treatmentsWrapper}>
        
    <h2>Mikrodermabrazja</h2>
    
    <p> to zabieg pielęgnacyjny skóry polegający na mechanicznym ścieraniu martwego naskórka. </p>
<br></br>
    <p><b>Wskazania do zabiegu:</b></p>
    <ul>
    <li>poszarzała, zmęczona, pozbawiona witalności skóra</li>
    <li>postępujący proces starzenia się skóry</li>
    <li>przebarwienia, blizny i rozstępy</li>
    <li>trądzik, rozszerzone pory i zaskórniki</li>
    <li>uszkodzenia posłoneczne</li>
    <li>szorstki, zrogowaciały naskórek</li>
    </ul>
    <p><b>Przeciwwskazania:</b></p>
    <ul>
    <li>stany zapalne skóry</li>
    <li>trądzik różowaty, aktywny</li>
    <li>ropny trądzik</li>
    <li>skłonność do bliznowców</li>
    <li>płytko unaczyniona skóra</li>
    <li>infekcje skórne</li>
    <li>nowotwory skóry</li>
    </ul>
    <p><b>Zabieg jesienno - zimowy </b></p>
    <p><b>Po zabiegu należy używać kremów z filtrem 50.</b></p>
    
    </div>
    </>)
}