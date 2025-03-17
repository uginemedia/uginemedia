import React from "react";
import styles from "./Testimonial.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import user1 from "../../assets/user-1.jpg";
import user2 from "../../assets/user-2.jpg";
import user3 from "../../assets/user-3.jpg";
import user4 from "../../assets/user-4.jpg";

const Testimonial = () => {
  return (
    <main className={styles.testimonial_section} id="testimonials">
      <section className={`${styles.testimonial_information} app_section`}>
        <h2>See why they love my work</h2>
        <div className={styles.testimonials}>
          {/* Box 1 */}
          <div className={styles.box}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, doloremque rerum praesentium enim earum cumque?
            </p>
            <div className={styles.user}>
              <img src={user1} alt="user-1" />
              <span>Jessica</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className={styles.box}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, doloremque rerum praesentium enim earum cumque?
            </p>
            <div className={styles.user}>
              <img src={user2} alt="user-2" />
              <span>Edwards</span>
            </div>
          </div>

          {/* Box 3 */}
          <div className={styles.box}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, doloremque rerum praesentium enim earum cumque?
            </p>
            <div className={styles.user}>
              <img src={user3} alt="user-3" />
              <span>Miguel</span>
            </div>
          </div>

          {/* Box 4 */}
          <div className={styles.box}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, doloremque rerum praesentium enim earum cumque?
            </p>
            <div className={styles.user}>
              <img src={user4} alt="user-4" />
              <span>Lawrence</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
