import styles from "./GaleryContent.module.css"
import photo1 from "./IMG_1990.jpg"
import photo2 from "./IMG_1994.jpg"
import photo4 from "./IMG_2039.jpg"
import photo5 from "./IMG_2040.jpg"
import photo6 from "./IMG_2041.jpg"
import photo7 from "./IMG_2044.jpg"
import photo8 from "./IMG_2046.jpg"
import photo9 from "./paznok1.jpg"
import photo10 from "./paznok2.jpg"
import photo11 from "./paznok3.jpg"
import photo12 from "./paznok4.jpg"
import photo13 from "./paznok5.jpg"
import photo14 from "./paznok6.jpg"
import photo15 from "./paznok7.jpg"
// import photo16 from "./paznok2.jpg"
import { Box } from "@mui/material"


export function Pictures() {
    return (
        <>
<Box className={styles.masonry}>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo1} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo2} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo4} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo5} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo6} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo7} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo8} alt="cennik"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo9} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo10} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo11} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo12} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo13} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo14} alt="nails"></img>
        </div>
        <div className={styles.picturesWrapper}>
            <img className={styles.pictures} src={photo15} alt="nails"></img>
        </div>
        </Box>
        </>
        )
        }
        