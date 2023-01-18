import { useEffect } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

export function MainPage() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className={styles.MainWrapper}>
        <Box className={styles.reservationWrapper}>
          <p>Doradzę i pomogę w wyborze zabiegu.</p>
          <span>
            Salon JJ w Rynarzewie to miejsce w którym możesz skorzystać z
            kompleksowych usług kosmetycznych oraz zasięgnąć fachowych porad z
            zakresu pielęgnacji.
          </span>
          <div className={styles.btnReservation}>
            <Link to="/kontakt">
              <button className={styles.btnReservationWrapper}>Umów się</button>
            </Link>
          </div>
        </Box>
      </div>
    </>
  );
}
