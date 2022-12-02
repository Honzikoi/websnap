import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = () => (
  <div className={styles.Contact}>
    <h1>Contact Us</h1>
    <form>
      <label>Name : </label>
      <input type="text" />
      <label>Email : </label>
      <input type="email" />
      <label>Message : </label>
      <textarea />
    </form>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
