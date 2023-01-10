import { useEffect } from "react";
import styles from "./Me.module.css";
import myPhoto from "./IMG_2000.jpg";


function scrollToTop() {
    window.scrollTo(0, 0);
  }

export function Me() { 
        useEffect(() => {
          scrollToTop();
        }, []);
    return (
        <>
<div className={styles.emptyDiv}>'</div>
        <div className={styles.meWrapper}>
            <img className={styles.myPhoto} src={myPhoto} alt="myPhoto"></img>
            <p>Nazywam się Joanna Jaruszewska i jestem
z wykształcenia kosmetyczka oraz
certyfikowaną stylistką paznokci.
Od 6 lat prowadzę swój salon
kosmetyczny, który jest moim drugim
domem. Uwielbiam swoją pracę i kontakt z
klientem.
Cały czas podnoszę swoje kwalifikacje,
regularnie uczęszczam w szkoleniach,
pokazach i targach.
Bardzo zależy mi żebyście czuły się u mnie
w salonie wyjątkowo i bezpiecznie.</p>
        </div>



        </>
        )
        }