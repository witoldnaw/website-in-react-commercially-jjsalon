import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ListOfTreatments.module.css";
import zdjecie1 from "./zdj01.jpg";
import zdjecie2 from "./Zdjecie2.jpg";
import zdjecie3 from "./Zdjecie3.jpg";
import zdjecie4 from "./sensiskin.jpg";
import zdjecie5 from "./zdjecie5.jpg";

export const ListOfTreatments = () => {
  const beautyTreatments = [
    {
      id: 1,
      name: "Retix C",
      description:
        "Intensywna kuracja odmładzająca i odbudowująca skórę z retinolem, witaminą C i antyoksydantami.",
      photo: zdjecie1,
      link: "retixc",
    },
    {
      id: 2,
      name: "Mikrodermabrazja",
      description:
        "To zabieg pielęgnacyjny skóry polegający na mechanicznym ścieraniu martwego naskórka.",
      photo: zdjecie3,
      link: "mikrodermabrazja",
    },
    {
      id: 3,
      name: "Peeling kawitacyjny",
      description:
        "To zabieg polegający na oczyszczeniu skóry za pomocą ultradźwięków. Usuwanie zanieczyszczeń oraz martwych komórek przebiega bezpiecznie i bezboleśnie.",
      photo: zdjecie2,
      link: "peelingkawitacyjny",
    },
    {
      id: 4,
      name: "Sensiskin Garden Purles",
      description: "Zabieg dla skóry wrażliwej i naczyniowej.",
      photo: zdjecie4,
      link: "sensiskingardenpurles",
    },
    {
      id: 5,
      name: "PQ AGE",
      description:
        "to peeling z właściwościami ujędrniająco- liftingującymi, zapewniający głęboką stymulację skóry.",
      photo: zdjecie5,
      link: "PQAGE",
    },
  ];

  const [display, setHover] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleMouseEnter = (id) => {
    setHover(true);
    setSelected(id);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const hoverStyle = {
    display: display ? "block" : "none",
  };

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
        <span>
          Wybierz usługę, którą jesteś zainteresowana i dowiedz się więcej:
        </span>
      </div>
      <div className={styles.faqWrapper}>
        {beautyTreatments.map((e, index) => {
          return (
            <div key={e.id} className={styles.imageWrapper}>
              <img
                id={styles.image}
                src={e.photo}
                alt="zdjecie"
                onMouseEnter={() => handleMouseEnter(e.id)}
                onMouseLeave={() => handleMouseLeave(e.id)}
              ></img>

              <div>
                <Link to={e.link}>
                  <button
                    className={styles.btnName}
                    id={styles.btnTreatments}
                  >
                    {e.name}
                  </button>
                </Link>
              </div>
              <Box
                key={index}
                className={styles.containerWrapper}
                onMouseEnter={() => handleMouseEnter(e.id)}
                onMouseLeave={() => handleMouseLeave(e.id)}
              >
                {selected === e.id && (
                  <div className={styles.box} style={hoverStyle}>
                    <div>
                      <span>{e.description}</span>
                      <br></br>
                      <br></br>
                      <Link
                        style={{ color: "rgba(44, 44, 44, 1)" }}
                        className={styles.linkStyle}
                        to={e.link}
                      >
                        <p>
                          <b>Szczegóły...</b>
                        </p>{" "}
                      </Link>
                    </div>
                  </div>
                )}
              </Box>
            </div>
          );
        })}
      </div>
    </>
  );
};
