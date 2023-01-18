import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import { FaFacebookMessenger, FaInstagram, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import MapInteractive from "../MapGoogle/MapGoogle";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztqn2ir",
        "template_vf13502",
        form.current,
        "pXsK-iqklQ6WCvS9w"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [overMessenger, setOverMessenger] = useState(false);
  const [overInstagram, setOverInstagram] = useState(false);
  

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.formWrapper}>
          <form ref={form} onSubmit={sendEmail}>
            <p>Wyślij wiadomość</p>
            <input type="text" placeholder="Imię" name="user_name" />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <input type="text" placeholder="Tytuł" />
            <input type="text" placeholder="Wiadomość" name="messeage" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className={styles.registerSocialMedia}>
          <p>Zapisz się:</p>
          <div className={styles.contactPhone}>
            <div>
              <FaPhoneAlt size={30} />
              <span>536 998 007</span>
            </div>
            <div>
              <FaEnvelope size={30} />
              <span>kontakt@jjsalon.pl</span>
            </div>
          </div>
          <div className={styles.iconContactWrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://m.me/salon.kosmetyczny.jj/"
            >
              <FaFacebookMessenger
                onMouseEnter={() => setOverMessenger(true)}
                onMouseLeave={() => setOverMessenger(false)}
                size={70}
                style={overMessenger ? { color: "#006AFF" } : {}}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/direct/t/340282366841710300949128315893040444225"
            >
              <FaInstagram
                onMouseEnter={() => setOverInstagram(true)}
                onMouseLeave={() => setOverInstagram(false)}
                size={70}
                style={overInstagram ? { color: "8134AF" } : {}}
              />
            </a>
          </div>
        </div>
      </div>
      <MapInteractive />
    </>
  );
}
