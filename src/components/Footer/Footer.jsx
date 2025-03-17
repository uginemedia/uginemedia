import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <main className={styles.footer_section}>
      <section className={`${styles.footer_information} app_section`}>
        <p>&copy; {new Date().getFullYear()} U-GINE MEDIA</p>
      </section>
    </main>
  );
};

export default Footer;
