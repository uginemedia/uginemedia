import React from "react";
import styles from "./About.module.css";
import manThinking from "../../assets/man-thinking.webp";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <main className={styles.about_section} id="about">
      <section className={`${styles.about_informations} app_section`}>
        <div className={styles.about_images}>
          <img src={manThinking} alt="man-thinking" />
          <div>
            <a target="_blank" href="https://www.instagram.com/uginemedia/">
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=61567097297991"
            >
              <FaFacebook />
            </a>
            <a target="_blank" href="https://www.youtube.com/@uginemedia">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className={styles.about_texts}>
          <p>
            We're U-GINE MEDIA. We're passionate about crafting exceptional
            websites. With a blend of design skills and coding expertise, we
            create unique online experiences that captivate users.
          </p>
          <p>
            Looking for a top-notch web developer to revamp your hotel’s
            website? Look no further than U-GINE MEDIA. With years of experience
            and a keen eye for design, U-GINE MEDIA can take your site to the
            next level, helping you attract more visitors and boost your
            bookings.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
