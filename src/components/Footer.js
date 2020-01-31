import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="tac">
      <p>
        We are leaders in 10 countries: <a href="">Poland</a>,{" "}
        <a href="">Turkey</a>, <a href="">Spain</a>, <a href="">Italy</a>,{" "}
        <a href="">Czech Republic</a>, <a href="">Mexico</a>,{" "}
        <a href="">Colombia</a>, <a href="">Brazil</a>,<a href="">Argentina</a>{" "}
        and <a href="">Chile</a>
      </p>

      <p class="m0">
        This site uses cookies to deliver services in accordance with this
        Privacy Policy. You can specify the conditions for storing or accessing
        cookies on your browser.
      </p>

      <p>www.docplanner.com © 2020</p>
    </footer>
  );
};

export default Footer;
