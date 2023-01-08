import styles from "./FAQ.module.css";
import zdjecie1 from "./zdj01.jpg";
import zdjecie2 from "./Zdjecie2.jpg";
import zdjecie3 from "./Zdjecie3.jpg";
import zdjecie4 from "./sensiskin.jpg";
import zdjecie5 from "./Zdjecie5.jpg";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Mikrodermabrazja } from "../BeautyTreatments/Treatments/Mikrodermabrazja";


export const FAQ = () => {

      
      const beautyTreatments = [
            {id: 1, name: 'Retix C', description: 'Intensywna kuracja odmładzająca i odbudowująca skórę z retinolem, witaminą C i antyoksydantami.', photo: zdjecie1, link:"retixc"},
            {id: 2, name: 'Mikrodermabrazja', description: 'To zabieg pielęgnacyjny skóry polegający na mechanicznym ścieraniu martwego naskórka.', photo: zdjecie2, link:"mikrodermabrazja"},
            {id: 3, name: 'Peeling kawitacyjny', description: 'To zabieg polegający na oczyszczeniu skóry za pomocą ultradźwięków. Usuwanie zanieczyszczeń oraz martwych komórek przebiega bezpiecznie i bezboleśnie.', photo: zdjecie3, link:"peelingkawitacyjny"},
            {id: 4, name: 'Sensiskin Garden Purles', description: 'Zabieg dla skóry wrażliwej i naczyniowej.', photo: zdjecie4, link:"sensiskingardenpurles"},
            {id: 5, name: 'Mikro', description: 'lubudubuduvudu', photo: zdjecie5,},
          ];



      const [display, setHover] = useState(false);
      const [selected, setSelected] = useState(null);


      const handleMouseEnter = (id) => {
            setHover(true);
            setSelected(id);
      }
      const handleMouseLeave = () => {
            setHover(false)
      }
      
      const hoverStyle = {
            display: display ? "block" : "none", }


            function scrollToTop() {
                  window.scrollTo(0, 0);
                }
                
                  useEffect(() => {
                    scrollToTop();
                  }, []);

  return (
    <>
    <div className={styles.textWrapper}>
      <h4>Zabiegi</h4>
    <span>Wybierz usługę, którą jesteś zainteresowana i dowiedz się więcej:</span>
    </div>
    <div className={styles.faqWrapper}>
      {beautyTreatments.map((e, index) => {
      return (
      <div key={e.id} className={styles.imageWrapper}>
            
            
            <img id={styles.image} src={e.photo} alt="zdjecie"
            onMouseEnter={() => handleMouseEnter(e.id)}
            onMouseLeave={() => handleMouseLeave(e.id)}></img>
            
            <div className={styles.description}>
            <Link to={e.link}><button className={styles.btnNameZabiegi} id={styles.btnZabiegi}>{e.name}</button></Link>
            </div>
                        <Box key={index} className={styles.containererWrapper}
                        onMouseEnter={() => handleMouseEnter(e.id)}
                        onMouseLeave={() => handleMouseLeave(e.id)}>

                              {selected === e.id && (
                        <div className={styles.containerer} style={hoverStyle}>
                              <div className={styles.descriptionWrapper}>
                              <span>{e.description}</span>
                              <br></br>
                              <br></br>
                              <Link to={e.link}><p><b>Szczegóły...</b></p></Link>
                        </div>
                        </div>
                              )}
                        </Box>
      </div>
      )})
      }
      </div>
    </>
  );
};

