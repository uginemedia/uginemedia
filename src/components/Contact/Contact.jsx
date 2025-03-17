import React from "react";
import styles from "./Contact.module.css";
// import bg from "../../assets/bg.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <main className={styles.contact_section}>
      <section className={`${styles.contact_information} app_section`}>
        <div className={styles.contact_text}>
          <p>Let's connect and create something awesome together!</p>
          <a href="">uginemedia@gmail.com</a>
        </div>
        <div className={styles.contact_icons}>
          <a
            target="_blank"
            href="https://web.facebook.com/profile.php?id=61567097297991"
          >
            <FaFacebook />
          </a>
          <a target="_blank" href="https://www.instagram.com/uginemedia/">
            <AiFillInstagram />
          </a>
          <a target="_blank" href="https://www.youtube.com/@uginemedia">
            <FaYoutube />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
