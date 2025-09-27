import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-[1043px] py-[60px] h-full flex items-center justify-center bg-[#18052d]"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center flex-col justify-center">
          {/* header wrapper */}
          <div className="flex items-center justify-center flex-col gap-6 mb-10">
            <motion.h3
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent"
            >
              about me
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-[#fafafa] font-josefin font-normal leading-7 max-w-[800px] w-full"
            >
              Sono uno junior front-end developer in cerca di nuove opportunità
              in un ambiente stimolante e dinamico, dove poter crescere
              professionalmente e contribuire con entusiasmo ai progetti del
              team. Ho frequentato un corso intensivo di 6 mesi come Full-stack
              web developer presso Epicode, dove ho acquisito competenze in
              HTML, CSS, JavaScript, React, Redux, Bootstrap, Java, PostgreSQL e
              Spring Framework, sviluppando una forte attenzione all’usabilità e
              alla cura dei dettagli. Mi piace affrontare le sfide con spirito
              di problem solving e considero la collaborazione un valore
              fondamentale per raggiungere obiettivi comuni.
            </motion.p>
          </div>
          {/* skill wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[895px] w-full md:min-h-[657px] h-full"
          >
            <img
              className="w-full h-full object-cover"
              src="/skills.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
