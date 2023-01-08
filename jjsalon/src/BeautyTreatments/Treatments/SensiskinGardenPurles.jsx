import styles from "./Treatments.module.css"
import { useEffect } from "react"


function scrollToTop() {
    window.scrollTo(0, 0);
  }
export function SensiskinGardenPurles() {

    useEffect(() => {
      scrollToTop();
    }, []);

    return (
    <>
    <div className={styles.treatmentsPageWrapper}>.</div>
    <div className={styles.treatmentsWrapper}>

    <h2>Sensiskin Garden Purles!</h2> 

<p>Zabieg dla skóry wrażliwej i naczyniowej.</p> 

<ul><b>Procedura zabiegowa:</b>
<li>demakijaż i przygotowanie skóry </li>
<li>peeling, puder z bambusa z ekstraktami z papai, morwy, winogron. Jego głównym działaniem jest wygładzenie i rozświetlenie cery oraz usunięcie martwego naskórka. </li>
<li>sonoforeza z użyciem ampułki z wit. C, która zregeneruje skórę, rozjaśni, wyrówna koloryt, zadziała uszczelniająco i wzmacniająco na ściany naczyń krwionośnych. </li>
<li>maska z ekstraktem z brązowych alg, skwalanem, gliceryną - maska nawilży, odbuduje płaszcz hydrolipidowy, zmiejszy zaczerwienie.</li>
<li>krem z ekstraktem z kasztanowca, wit. E, aloesem, z azulenem - redukuje on rumień, nawilża, nadaje miękkość oraz wzmacnia ściany naczyń krwionośnych. </li>
</ul>

<p><b>Sugerowana seria zabiegów od 3-6</b></p>
    </div>
    </>)
}



