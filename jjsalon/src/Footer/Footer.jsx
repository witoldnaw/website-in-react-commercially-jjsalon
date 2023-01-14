import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone, FaMap } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import logo from "./logoHeader.svg";

export function Footer() {
    return (
        <>
            <div className={styles.FooterWrapper}>
                <div className={styles.socialMedia}>
                    <h5>Social Media</h5>
                    <div className={styles.iconWrapper}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/salon.kosmetyczny.jj"
                        >
                            <FaFacebook className={styles.icon} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/salon_kosmetyczny_jj"
                        >
                            <FaInstagram className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.btn22}>
                    <Link to="/kontakt">
                        <button className={styles.btn}>Umów się</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.kontaktWrapper}>
                    <img className={styles.footerLogo} src={logo} alt="logo"></img>
                    <div className={styles.kontakt}>
                        <div>
                            <FaPhone className={styles.iconPhone} />
                            <span>536 998 007</span>
                        </div>

                        <div>
                            <FaMap className={styles.iconMap} />
                            <span>
                                Rynarzewo <br></br>Kalinowa 10
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.HouersWrapper}>
                    <h5>Godziny otwarcia</h5>
                    <div className={styles.kontakt}>
                        <p>Poniedziałek - Piątek: 10 - 18</p>
                        <p>Sobota: 10 - 16</p>
                        <p>Niedziela: nieczynne</p>
                    </div>
                </div>
            </div>
            <div className={styles.copyrightWrapper}>
                <p>Witold Nawrot © 2023 All Rights Reserved</p>
            </div>
        </>
    );
}
