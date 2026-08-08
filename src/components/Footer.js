import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          Cartifi
        </h2>

        <p className="footer-description">
          A modern React E-Commerce web application
          developed using React, Context API,
          React Router, useReducer and FakeStore API.
        </p>

        <div className="footer-links">

          <span>Home</span>

          <span>Products</span>

          <span>Cart</span>

        </div>

        <hr className="footer-line" />

        <p className="footer-copy">
          © {currentYear} Cartifi.
          All Rights Reserved.
        </p>

        <p className="footer-team">
          Developed by Team Cartifi
        </p>

      </div>

    </footer>
  );
};

export default Footer;