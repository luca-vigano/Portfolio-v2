import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Banner = () => {
  return (
    <div className="w-full min-h-[880px] h-full bg-banner bg-cover bg-center bg-no-repeat flex items-center justify-center relative">
      <div className="container mx-auto px-4 md:px-0">
        {/* Layout responsive: colonna su mobile, riga su desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Parte scritta */}
          <div className="max-w-[612px] w-full space-y-6 relative z-20 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl text-white font-josefin font-bold capitalize"
            >
              Ciao, sono Luca
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent"
            >
              front-end developer.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base md:text-lg text-[#e4e0de] font-josefin font-normal leading-7 md:leading-8"
            >
              Appassionato di tecnologia, ho trasformato questa passione in una
              professione frequentando il corso Epicode, dove ho acquisito
              competenze nello sviluppo IT. Grazie a un'esperienza decennale
              nella ristorazione, ho sviluppato capacità di lavoro in team,
              problem solving e organizzazione, che ora applico in ambito
              tecnologico.
            </motion.p>

            {/* Pulsante che scrolla alla sezione Contact */}
            <Link to="contact" smooth={true} duration={900}>
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] py-2 px-6 rounded-3xl text-lg text-white font-josefin font-semibold capitalize cursor-pointer"
              >
                Scrivimi qualcosa
              </motion.button>
            </Link>
          </div>

          {/* Immagine */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative md:absolute md:right-10 md:bottom-0 flex justify-center"
          >
            <img
              className="max-w-[400px] md:max-w-[750px] w-full min-h-[300px] md:min-h-[600px] h-full object-cover"
              src="/developer2.png"
              alt="devimg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
