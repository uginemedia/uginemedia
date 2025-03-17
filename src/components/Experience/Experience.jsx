import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <main className={styles.experience_section}>
      <section className={`${styles.experience_information} app_section`}>
        <div>
          <span>10</span>
          <span>Years of experience</span>
        </div>
        <div>
          <span>120</span>
          <span>Successful projects</span>
        </div>
        <div>
          <span>25</span>
          <span>Happy clients</span>
        </div>
        <div>
          <span>1</span>
          <span>Award own</span>
        </div>
      </section>
    </main>
  );
};

export default Experience;
