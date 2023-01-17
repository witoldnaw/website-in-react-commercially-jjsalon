import styles from "./Treatments.module.css"
import { useEffect } from "react"
    
    function scrollToTop() {
        window.scrollTo(0, 0);
      }
      
      export function PQAGE() {
        useEffect(() => {
          scrollToTop();
        }, []);
      
    return (
    <>
    <div className={styles.treatmentsPageWrapper}>.</div>
    <div className={styles.treatmentsWrapper}>
        
    <h2>PQ AGE</h2>
    
    <p> to peeling z właściwościami ujędrniająco- liftingującymi, zapewniający głęboką stymulację skóry.  </p>
<br></br>
    <ul>
    <li>Zabieg daje podobny efekt do mezoterapii. Gładsza i młodsza skóra jest widoczna zaraz po zabiegu. </li>
    <li>Kuracja może być wykonywana o każdej porze roku – również latem – oraz łączona z innymi procedurami mezoterapii - polecam połączyć go z dermapen . 
</li>
</ul>

<p>Zastosowanie:</p>
<ul>
    <li>usuwanie przebarwień</li>
    <li>usuwanie blizn</li>
    <li>leczenie skóry trądzikowej</li>
    <li>usuwanie zaskórniki</li>
    <li>usuwanie rozstępów</li>
    <li>poprawianie elastyczności i napięcia skóry</li>
    </ul>
    <p><b>Preparat zawiera:</b></p>
    <ul>
    <li>Kwas trójchlorooctowy 33% (TCA), który usuwa przebarwienia i drobne blizny, wygładza skórę, redukuje zaskórniki, wpływa na syntezę kolagenu.
Kwas kojowy 10% o działaniu antybakteryjnym i przeciwgrzybiczym oraz zwalczającym przebarwienia. </li>
    <li>Kwas migdałowy właściwości rozjaśniające, wspomaganie leczenia trądziku oraz ujędrnianie skóry,</li>
    <li>Nadtlenek mocznika 5% o właściwościach rozjaśniających,</li>
    <li>Koenzym Q10 5% posiadający działanie antyoksydacyjne</li>
    </ul>
    <p><b>Zabieg daje natychmiastowe silne napięcie i ujędrnianie skóry !
</b></p>
    <p><b>Jest przyjemny, skuteczny i bezpieczny ! </b></p>
    
    </div>
    </>)
}