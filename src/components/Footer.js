import React from "react";
import { FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 mt-6 h-50">
      <section className="grid grid-cols-1 place-items-center">
        <nav className="flex items-center justify-center gap-4 sm:mt-8 mt-6">
          <a
            href="https://www.instagram.com/simplytogether.e/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-lg text-md bg-white/50 p-2 rounded-full flex items-cente text-zinc-700"
          >
            <FaInstagram className="inline-block" />
          </a>
          <a
            href="https://www.pinterest.com/simplytogetherevents/_created/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-lg text-md bg-white/50 p-2 rounded-full flex items-center text-zinc-700"
          >
            <FaPinterest className="inline-block" />
          </a>
          <a
            href="mailto:simplytogetherevents@gmail.com"
            className="sm:text-lg text-md bg-white/50 p-2 rounded-full flex items-center text-zinc-700"
          >
            <FaEnvelope className="inline-block" />
          </a>
        </nav>

        <span className="border-b-[1px] border-white/50 w-20 my-4"></span>

        <p className="sm:mb-8 mx-4 mb-6 text-white/50 text-xs sm:text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} Simply Togehter Events LLC
          - All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
