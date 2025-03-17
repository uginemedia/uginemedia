import React from "react";
import styles from "./Chevron.module.css";
import { IoChevronUpOutline } from "react-icons/io5";

const Chevron = () => {
  return (
    <a className={styles.chevron} href="#">
      <IoChevronUpOutline />
    </a>
  );
};

export default Chevron;
