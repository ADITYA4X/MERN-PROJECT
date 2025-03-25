/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-700">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div className="flex flex-col gap-3">
            <div className="font-medium font-serif text-4xl mb-2 text-white">
              {" "}
              Art-X
            </div>
            <ul className="flex flex-col gap-2 text-stone-100">
              <li>Address : Pune, Maharastra, 440022, India</li>
              <li>Phone : +(91) 98765 43210</li>
              <li>Email : support-art-x@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="w-5/12 lg:w-8/12 sm:w-full">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div>
              <h2 className="font-bold text-lg mb-2 text-white">
                Information{" "}
              </h2>
              <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                <ul className="flex flex-col gap-2 text-stone-300 text-sm font-semibold">
                  <li>
                    <Link>About Us </Link>
                  </li>
                  <li>
                    <Link>About Art Gallery </Link>
                  </li>
                  <li>
                    <Link>Delivery Information </Link>
                  </li>
                  <li>
                    <Link>Privacy Policy </Link>
                  </li>
                  <li>
                    <Link>Blogs </Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-2 text-stone-300 text-sm font-semibold">
                  <li>
                    <Link>Our Service </Link>
                  </li>
                  <li>
                    <Link>Company Profile</Link>
                  </li>
                  <li>
                    <Link>Terms of service </Link>
                  </li>
                  <li>
                    <Link>Contact Us </Link>
                  </li>
                  <li>
                    <Link>Track your Order </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5 text-stone-300">
            <h2 className="font-bold text-lg mb-2 text-white">Join Our Shop</h2>
            <span>
              Get Email updates about tour latest and shop specials offers
            </span>
            <div className="h-[50px] w-full bg-white  relative">
              <input
                className="h-full bg-transparent w-full px-3 outline-0"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="h-full absolute right-0 bg-stone-900 text-white uppercase px-4 font-bold text-sm">
                Subscribe
              </button>
            </div>
            <ul className="flex justify-start items-center gap-3">
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-black  hover:text-white text-stone-800 flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaInstagram />{" "}
                </a>
              </li>

              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-black  text-stone-800 hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaTwitter />{" "}
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-black hover:text-white text-stone-800 flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaLinkedin />{" "}
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-black text-stone-800 hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaGithub />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] flex flex-wrap justify-center items-center text-stone-200 mx-auto py-5 text-center">
        <span>Copiright @ 2025 All Rights Reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
