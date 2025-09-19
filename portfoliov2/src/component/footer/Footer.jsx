import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Footer = () => {
  const date = new Date();
  const completeDate = date.getFullYear();

  return (
    <div className="w-full pt-10 bg-[#18052d] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between gap-10 w-full border-t border-[#fafafa] py-10">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base text-white font-josefin font-normal"
          >
            {completeDate}. All rights reserved
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <a className="text-white text-2xl" href="">
              <FaGithub />
            </a>
            <a className="text-white text-2xl" href="">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
