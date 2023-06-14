import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 bg-gray-800 text-white">
        <div className="mb-6 md:mb-0 w-full">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <h3 className="text-white font-bold">Athleti Camp</h3>
          </div>
          <p className="text-sm mt-2">
            Athleti Camp is a summer camp school where students learn various
            sports and engage in exciting activities. Our goal is to promote
            physical fitness, teamwork, and personal growth through fun and
            educational programs.
          </p>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/classes" className="hover:text-gray-500">
                Classes
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>1234 Street, City</p>
          <p>State, Country</p>
          <h3 className="text-white mt-4 mb-2">Contact</h3>
          <p>Email: info@athleticamp.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div>
          <span className="footer-title">Follow us on social media:</span>
          <ul className="text-gray-400 text-center">
            <li className="inline-block mx-2">
              <FaFacebook />
            </li>
            <li className="inline-block mx-2">
              <FaTwitter />
            </li>
            <li className="inline-block mx-2">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-gray-800 text-white">
        <div>
          <p>&copy; {new Date().getFullYear()} Athleti Camp. All rights
              reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
