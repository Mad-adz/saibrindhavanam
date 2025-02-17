import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ssbfLogo } from "../assets/images";
import { footerLinks, socialMediaLinks } from "../utils/data/footer";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-amber-900">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="px-4 py-12">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <Link to="/">
                    <div className="flex items-center space-x-4 text-2xl font-medium">
                      <span>
                        <img src={ssbfLogo} alt="AI Logo" className="size-20 drop-shadow-logo" />
                      </span>
                      <span className="text-white text-xl">
                        Shri Sai Brindhavanam
                        <br />
                        Foundation
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="max-w-sm lg:pr-16 text-md text-white">
                  Serving with compassion, uplifting lives, and fostering
                  spiritual harmony.
                </div>
                <div className="flex space-x-3">
                  {socialMediaLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className="text-white text-xl font-semibold hover:text-orange-500 transition-colors duration-300"
                    >
                      <span className="sr-only">{item.name}</span>
                      {React.createElement(item.icon)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:col-span-2 xl:mt-0">
                {footerLinks.map((section) => (
                  <div key={section.id}>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      {section.title}
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {section.links.map((link) => (
                        <li key={link.id}>
                          <Link
                            to={link.path}
                            className="text-md leading-6 text-gray-300 hover:text-gray-50"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
              <div className="text-md text-center text-white mb-2">
                Copyright © 2025 - Shri Sai Brindhavanam Foundation. All Rights
                Reserved.
              </div>
              <div className="text-md text-center text-white">
                Designed with 🧡 by Mad Adz.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
