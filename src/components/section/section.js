import React from "react";
import PropTypes from "prop-types";
import styles from "./section.module.css";

const Section = (props) => (
  <div
    className={`${styles["Section"]} ${styles["reversed"]}}`}
  >
    <div className={styles.leftside}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
    <div className={styles.rightside}>
      <img src={props.image} />
    </div>
  </div>
);

Section.propTypes = {};

Section.defaultProps = {};

export default Section;
