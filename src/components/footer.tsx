import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-10 lg:px-10 gap-10 h-[200px]">
      <div>
        Snooker Oracle
      </div>
      <div className="text-center mx-auto text-xs max-w-[700px]">
        Disclaimer: The information provided on this site is for reference purposes only.
        <br /><br />
        Whilst reasonable efforts are made to ensure the information is up to date and accurate, Snooker Orakel does not warrant, nor does it accept, any responsibility or liability for the accuracy or completeness of the content or for any loss which may arise from reliance on information contained in this site.
        <br /><br />
        Links to other sites are provided for your convenience, but Snooker Orakel accepts no responsibility or liability for the content of those sites or of any external sites which link to this site.
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-pink-600"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
