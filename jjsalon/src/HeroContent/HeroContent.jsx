import { useEffect } from "react";
import styles from "./HeroContent.module.css";
import logo from "./HeroLogo.jpg";

export function HeroContent() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className={styles.HeroWrapper}>
        <p>Odkryj swoje piękno ze mną</p>

        <img src={logo} alt="logo" className={styles.logo}></img>
      </div>
    </>
  );
}
