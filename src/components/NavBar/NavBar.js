import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import logo from "../../assets/imgs/logo.png";

const Navbar = () => (
  <div className={styles.Navbar}>
    <div className={styles.logo}>
      <img src={logo} />
    </div>
    <div className={styles.items}>
      <ul>
        <li className={styles.item}><a href="#"> Home</a></li>
        <li className={styles.item}><a href="#"> Projects</a></li>
        <li className={styles.item}><a href="#"> About Us</a></li>
        <li className={styles.item}><a href="#"> Contact</a></li>
      </ul>
    </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
