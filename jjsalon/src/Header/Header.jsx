import React, { useState, useEffect} from "react";
import { useMediaQuery } from "@mui/material";
import styles from "./Header.module.css";
import logo from "./logoPoziome111.png"
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive'
import { Box } from "@mui/system";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export function Header() {
  // const [navColor, setnavColor] = useState(false);
  const [navDisplay, setDisplay] = useState("flex");
  const [navGridTemplateRows, setGridTemplateRows] = useState("5vw 14vw");
  const [PaddingTopMobile, setPaddingTopMobile] = useState("5vw");
  const [navBtnWrapper, setBtnWrapper] = useState("1vw")
  const [navLogoWidth, setLogoWidth] = useState("35vw");
  const [navLogoWidthMobile, setLogoWidthMobile] = useState("45vw");
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setDisplay("none") : setDisplay("flex");
    window.scrollY > 10 ? setPaddingTopMobile("0vw") : setPaddingTopMobile("5vw");
    window.scrollY > 10 ? setLogoWidthMobile ("20vw") : setLogoWidthMobile("45vw");
    window.scrollY > 10 ? setGridTemplateRows("0vw 7vw") : setGridTemplateRows("5vw 14vw");
    window.scrollY > 10 ? setLogoWidth ("20vw") : setLogoWidth("30vw");
    window.scrollY > 10 ? setBtnWrapper ("0") : setBtnWrapper("1vw")
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


    return (
            <>
          
    <div className={styles.headerWrapper} style={{
    gridTemplateRows: navGridTemplateRows,
    }}>

     

<div className={styles.HeaderDataWrapper} style={{
          display: navDisplay,
  }}>
    <div className={styles.adressWrapper}>
      
        <div className={styles.openHouer}>
    <p>pn-pt 9:00 - 20:00 | sb 9:00 - 15:00</p>
    </div> 
      
      <div>
    <p>tel: 536 998 007</p>
      </div> 
      <div>
    <p>Rynarzewo, ul. Kalinowa 10</p>
    </div>
    </div>

  <div className={styles.btnHeaderDataWrapper}>
    <Link to="/kontakt">
    <button className={styles.btn}>Umów wizytę</button>
    </Link>
  </div>
</div>
<div className={styles.logoWrapper}>

<Link to="/">
<MediaQuery query='(min-width: 768px)'>
  {matches =>
    matches ? (
        <img className={styles.logo} src={logo} alt="dfsf"
        style={{width: navLogoWidth}}
        ></img>
        ) : ( 
          <img className={styles.logo} src={logo} alt="dfsf"
          style={{width: navLogoWidthMobile,
                  paddingTop: PaddingTopMobile}}></img>
          )
        }
        </MediaQuery>

</Link>

     </div>
     {/* <BurgerMenu/> */}
     <div className={styles.btnWrapper} style={{
          paddingTop: navBtnWrapper}}>
            
            <Link to="/"><button className={styles.button55}>Home</button></Link>
            <Link to="/omnie"><button className={styles.button55}>O mnie</button> </Link>
            <Link to="/cennik"><button className={styles.button55}>Cennik</button></Link>
            <Link to="/galeria"><button className={styles.button55}>Galeria</button></Link>
            <Link to="/kontakt"><button className={styles.button55}>Kontakt</button></Link>

            </div>
            <BurgerMenu/>
        </div>
        {/* <BurgerMenu/> */}
        </>
        )
    }
    











// import styles from "./Header.module.css"
// import { Link } from 'react-router-dom'
// // import logo from "../Pictures/logoHeader.svg"
// import logo from "../Pictures/logoBaner.svg"


// export function Header() {
//     return (
//         <>
// <div className={styles.headerWrapper}>
//     {/* <img className={styles.logo} src={logo} alt="dfsf"/> */}
//     <img className={styles.logo} src={logo} alt="dfsf"/>

//  <div className={styles.navigation}>
        
//         <button className={styles.button55}>Home</button> 
//         <button className={styles.button55}>O mnie</button> 
//         <button className={styles.button55}>Cennik</button> 
//         <button className={styles.button55}>Kontakt</button>
// </div>
//         <div className={styles.socialMedia}>
//         <button className={styles.btnBack}>Zaloguj się</button> 

//         </div>


//     </div>
//     </>
//     )
// }


// export function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//       logo.style.width = "30px";
//     } else {
//       logo.style.width = "90px";
//     }
//   }

