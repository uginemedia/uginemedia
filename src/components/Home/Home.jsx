import React, { useState } from "react";
import styles from "./Home.module.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";
import logo5 from "../../assets/logo-5.png";
import logo6 from "../../assets/logo-6.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const [openNavigation, setOPenNavigation] = useState(false);

  const handleNavBarClick = () => {
    setOPenNavigation(!openNavigation);
    console.log(openNavigation);
  };

  return (
    <main className={styles.main_home}>
      <section className="app_section">
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.header_logo_div}>
            <a href="/" className={styles.header_logo}>
              <img src={logo} alt="logo" />
              <h1>media</h1>
            </a>
            <button onClick={handleNavBarClick}>
              {openNavigation ? <AiOutlineClose /> : <HiOutlineBars3 />}
            </button>
          </div>
          <div>
            <ul
              className={`${styles.header_link} ${
                openNavigation && styles.open_nav
              }`}
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonals</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className={styles.header_anchor}
              href="https://calendly.com/codingweb656/30min"
            >
              Let's Connect
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <div className={styles.hero_section}>
          <h1>
            Crafting Custom <span>Web Solutions</span> for Your Business
          </h1>
          <p className={styles.hero_description}>
            Expert development services by NYC-based freelancer for your website
            needs.
          </p>
          <div className={styles.hero_section_buttons}>
            <a href="https://calendly.com/codingweb656/30min">Let's Connect</a>
            <a href="#portfolio">Check my work</a>
          </div>
          <p className={styles.brand_p}>
            Proudly collaborated with some of the best brands
          </p>
          <div className={styles.hero_section_brands}>
            <img src={logo2} alt="logo-2" />
            <img src={logo3} alt="logo-3" />
            <img src={logo4} alt="logo-4" />
            <img src={logo5} alt="logo-5" />
            <img src={logo6} alt="logo-6" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
