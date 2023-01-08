import styles from "./Treatments.module.css"
import { useEffect } from "react"

function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  export function RetixC() {
    useEffect(() => {
      scrollToTop();
    }, []);
    return (
    <>
    <div className={styles.treatmentsPageWrapper}>.</div>
    <div className={styles.treatmentsWrapper}>

    <h2>Retix C</h2>
    
    <p>Intensywna kuracja odmładzająca i odbudowująca skórę z retinolem, witaminą C i antyoksydantami. </p>

<ul><b>WSKAZANIA:</b>
<li>fotostarzenie</li>
<li>melasma</li>
<li>wiotka skóra</li>
<li>niedoskonałości</li>
<li>rozstępy</li>
</ul>

<ul><b>Czas na listę korzyści:</b>
<li>stymulacja procesu odnowy komórkowej</li>
<li>odbudowa włókien kolagenu i elastyny</li>
<li>wygładzenie skóry, rozjaśnianie plam pigmentacyjnych i redukcja niedoskonałości</li>
<li>poprawa gęstości i napięcia skóry</li>
<li>wzrost poziomu nawilżenia skóry</li>
<li>ochrona przed fotouszkodzeniami i zwiększenie naturalnej bariery ochronnej skóry</li>
</ul>
    </div>
    </>)
}