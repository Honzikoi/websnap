import React from "react";
import PropTypes from "prop-types";
import styles from "./footer.module.css";
import logo from "../../assets/imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <>
    <div className={styles.Footer}>
      <div className={styles.FooterContent}>
        <div className={styles["footer-img"]}>
          <img src={logo} />

          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> +33 6 12 34 56 78
          </p>
        </div>
        <div className={styles.secCol}>
          <ul>
            <li className={styles["list-title"]}>Help</li>
            <li className={styles["list-element"]}>Terms of service</li>
            <li className={styles["list-element"]}>Troubleshooting</li>
          </ul>
        </div>
        <div className={styles.thrCol}>
          <ul>
            <li className={styles["list-title"]}>Reach out</li>
            <li className={styles["list-element"]}>About us</li>
            <li className={styles["list-element"]}>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <FontAwesomeIcon icon={faCopyright} />
        <p>WebSnap.Inc • All rights reserved</p>
      </div>
    </div>
  </>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
