import { Link } from "react-router-dom";
import styles from "./AboutMe.module.css";
import zdjecie6 from "./IMG_2033.jpg";

export const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutMeWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={zdjecie6} alt="zdjecie"></img>
        </div>
        <div className={styles.aboutMeDescription}>
          <p>
            Salon kosmetyczny Joanna Jaruszewska <br></br> specjalizuje się w
            stylizacji paznokci oraz zabiegach pielęgnacyjnych twarzy, szyi i
            dekoltu. Do każdego klienta podchodzę indywidualnie. W salonie
            stawiam na bezpieczeństwo zabiegów i profesjonalizm. Salon
            kosmetyczny Joanna Jaruszewska to przytulny salon z dwoma gabinetami
            i komfortową recepcją, ma dobry dojazd i darmowe miejsca parkingowe.
          </p>
          <div>
            <Link to="/cennik">
              <button className={styles.btn}>Zobacz cennik</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
