import styles from "./Pictures.module.css"
import photo1 from "./IMG_1990.jpg"
import photo2 from "./IMG_1991.jpg"
import photo3 from "./IMG_1994.jpg"
import photo4 from "./IMG_1997.jpg"
import photo5 from "./IMG_2006.jpg"
import photo6 from "./IMG_2010.jpg"
import photo7 from "./IMG_2013.jpg"
import photo8 from "./IMG_2026.jpg"
import photo9 from "./IMG_2036.jpg"
import photo10 from "./IMG_2041.jpg"


export function Pictures() {
    return (
        <>
<div className={styles.masonry}>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo1} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo2} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo3} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo4} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo5} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo6} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo7} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo8} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo9} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo10} alt="cennik"></img>
        </div>


        </div>
        </>
        )
        }
        