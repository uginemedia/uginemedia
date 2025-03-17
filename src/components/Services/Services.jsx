import React from "react";
import styles from "./Services.module.css";
import service01 from "../../assets/service-01.png";
import service02 from "../../assets/service-02.png";
import service03 from "../../assets/service-03.png";

const Services = () => {
  return (
    <main className={styles.services_section} id="services">
      <section className={`${styles.services_information} app_section`}>
        <h2>Services</h2>

        {/* Service 01 */}
        <div className={styles.service}>
          <div className={styles.service_text}>
            <span>01</span>
            <h3>Front End</h3>
            <p>
              Our web developer is proficient in designing beautiful and
              intuitive interfaces that enhance user experience, making our
              hotel’s website a pleasure to navigate.
            </p>
            <ul>
              <li>
                We create seamless designs that are responsive and engaging for
                all users.
              </li>
              <li>
                Our team focuses on blending creativity with functionality to
                deliver high-quality results.
              </li>
              <li>
                We ensure every element of the site aligns with your brand’s
                identity and goals.
              </li>
            </ul>
          </div>
          <div className={styles.service_img}>
            <img src={service01} alt="service-01" />
          </div>
        </div>

        {/* Service 02 */}
        <div className={styles.service}>
          <div className={styles.service_text}>
            <span>02</span>
            <h3>Back End</h3>
            <p>
              Our web developer can handle complex server-side processes
              including database management, ensuring seamless functionality of
              the website.
            </p>
            <ul>
              <li>
                We ensure efficient data retrieval and secure transactions for
                users.
              </li>
              <li>
                Our team integrates advanced technologies to enhance website
                performance.
              </li>
              <li>
                We focus on creating robust back-end systems for scalability and
                reliability.
              </li>
            </ul>
          </div>
          <div className={styles.service_img}>
            <img src={service02} alt="service-02" />
          </div>
        </div>

        {/* Service 03 */}
        <div className={styles.service}>
          <div className={styles.service_text}>
            <span>03</span>
            <h3>Full Stack</h3>
            <p>
              Our full-stack web developer is a one-stop-shop for all web
              development needs - from creating visually stunning front-ends to
              handling complex back-end processes, making our hotel website run
              smoothly and efficiently.
            </p>
            <ul>
              <li>
                We optimize both front-end and back-end performance to ensure
                quick loading times.
              </li>
              <li>
                Our developer ensures a seamless user experience through
                responsive design and functionality.
              </li>
              <li>
                We build secure, scalable systems to support the growing needs
                of your business.
              </li>
            </ul>
          </div>
          <div className={styles.service_img}>
            <img src={service03} alt="service-03" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
