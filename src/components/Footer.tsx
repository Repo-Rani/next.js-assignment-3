import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer-bottom-container">
        <Link href="https://github.com/Repo-Rani">
          <i className="bx bxl-github footer-icon"></i>
        </Link>
        <Link href="ranimiss968@gmail.com">
          <i className="bx bxl-gmail footer-icon"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/rani-miss-4baa712ba/">
          <i className="bx bxl-linkedin footer-icon"></i>
        </Link>
      </div>
      <div className="footer-bottom-container">
        <div className="footer">
          &copy; 2024 Rani Creations, All Right Reserved
        </div>
      </div>
    </>
  );
};
export default Footer;
