import React from "react";
import styles from "./Feature.module.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import feature01 from "../../assets/feature-01.jpg";
import feature02 from "../../assets/feature-02.jpg";
import feature03 from "../../assets/feature-03.jpg";
import feature04 from "../../assets/feature-04.jpg";
import feature05 from "../../assets/feature-05.jpg";

const Feature = () => {
  return (
    <main className={styles.feature_section} id="portfolio">
      <section className={`${styles.feature_information} app_section`}>
        <h2>Featured Work</h2>
        <div className={styles.feature_01}>
          <img src={feature01} alt="feature-01" />
          <div>
            <span>Full-Stack</span>
            <h4>Nientex Website Redesign</h4>
            <p>
              Revamp your online presence with a modern and user-friendly
              Nientex website redesign that showcases your hotel's luxury
              amenities and increases bookings.
            </p>
            <a target="_blank" href="#">
              <span>Project Details</span>
              <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
        <div className={styles.features}>
          {/* Feature 2 */}
          <div>
            <img src={feature02} alt="feature-02" />
            <div>
              <span>ecommerce</span>
              <a target="_blank" href="#">
                Brittany & Co Front Store
              </a>
            </div>
          </div>

          {/* Feature 3 */}
          <div>
            <img src={feature03} alt="feature-03" />
            <div>
              <span>frontend</span>
              <a target="_blank" href="#">
                neuroapp landing page
              </a>
            </div>
          </div>

          {/* Feature 4 */}
          <div>
            <img src={feature04} alt="feature-04" />
            <div>
              <span>full-stack</span>
              <a target="_blank" href="#">
                ozone esport platform
              </a>
            </div>
          </div>

          {/* Feature 5 */}
          <div>
            <img src={feature05} alt="feature-05" />
            <div>
              <span>backend</span>
              <a target="_blank" href="#">
                ny hospital crm
              </a>
            </div>
          </div>
        </div>
        <a target="_blank" href="https://calendly.com/codingweb656/30min">
          Let's talk about your project
        </a>
      </section>
    </main>
  );
};

export default Feature;
