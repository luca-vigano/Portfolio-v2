import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const RecentWork = () => {
  return (
    <div
      id="work"
      className="w-full py-[70px] bg-[#18052d] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-0">
        {/* recent work header wrapper */}
        <div className="flex items-center justify-center flex-col gap-6 mb-10">
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent"
          >
            progetti recenti
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-[#fafafa] font-josefin font-normal"
          >
            Raccolta di progetti a cui ho lavorato.
          </motion.p>
        </div>

        <div className="flex flex-col item-center justify-center gap-10">
          <div className="md:flex item-center justify-between gap-8 space-y-8 md:space-y-0">
            {/* text wrapper */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full space-y-6"
            >
              <h4 className="text-base text-[#5dffff] font-josefin font-semibold capitalize">
                project
              </h4>
              <h2 className="text-3xl text-white font-josefin font-bold capitalize mt-4">
                meteo app
              </h2>
              <div className="mt-6 p-4 bg-gradient-to-r from-[#dc00d3] to-[#3baac8] rounded-lg text-base text-[#fafafa] font-josefin font-normal">
                <p>
                  Meteo web app per visualizzare info sul meteo in tempo reale
                  con numerose informazioni aggiuntive come temperatura,
                  temperatura percepita, visibilità, vento, umidità, alba e
                  tramonto con la possibilità di cambiare in tempo reale i gradi
                  °C/°F. In aggiunta mostra comodamente le previsioni dei
                  prossimi 5 giorni della località scelta.
                </p>
              </div>
              {/* social link */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  className="text-white text-2xl"
                  href="https://github.com/luca-vigano/weather-app"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-white text-2xl"
                  href="https://lucaweatherapp.netlify.app/"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full max-h-[341px] h-full shadow-lg shadow-[#000000] rounded-lg"
            >
              <img
                className="w-full max-h-[341px] h-full object-cover rounded-lg"
                src="/work_1.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="md:flex item-center justify-between gap-8 space-y-8 md:space-y-0">
            {/* image wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full max-h-[341px] h-full shadow-lg shadow-[#000000] rounded-lg"
            >
              <img
                className="w-full max-h-[341px] h-full object-cover rounded-lg"
                src="/work_2.jpg"
                alt=""
              />
            </motion.div>
            {/* text wrapper */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full space-y-6"
            >
              <h4 className="text-base text-[#5dffff] font-josefin font-semibold capitalize">
                project
              </h4>
              <h2 className="text-3xl text-white font-josefin font-bold capitalize mt-4">
                movie app
              </h2>
              <div className="mt-6 p-4 bg-gradient-to-r from-[#dc00d3] to-[#3baac8] rounded-lg text-base text-[#fafafa] font-josefin font-normal">
                <p>
                  Movie app per cercare i tuoi film preferiti o i tuoi prossimi
                  film da vedere. Consente di aggiungere e rimuovere i film ai
                  tuoi preferiti e di visualizzarli anche in una pagina dedicata
                </p>
              </div>
              {/* social link */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  className="text-white text-2xl"
                  href="https://github.com/luca-vigano/react-movie"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-white text-2xl"
                  href="https://lucamovieapp.netlify.app/"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="md:flex item-center justify-between gap-8 space-y-8 md:space-y-0">
            {/* text wrapper */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full space-y-6"
            >
              <h4 className="text-base text-[#5dffff] font-josefin font-semibold capitalize">
                project
              </h4>
              <h2 className="text-3xl text-white font-josefin font-bold capitalize mt-4">
                to-do list
              </h2>
              <div className="mt-6 p-4 bg-gradient-to-r from-[#dc00d3] to-[#3baac8] rounded-lg text-base text-[#fafafa] font-josefin font-normal">
                <p>
                  una to-do list con design semplice, pulito e minimal che
                  permette in semplicità di segnare e gestire tutte le task di
                  cui hai bosogno e avere tutto sotto controllo.
                </p>
              </div>
              {/* social link */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  className="text-white text-2xl"
                  href="https://github.com/luca-vigano/todo-list"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-white text-2xl"
                  href="https://lucatodolist.netlify.app/"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
            {/* image wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full max-h-[341px] h-full shadow-lg shadow-[#000000] rounded-lg"
            >
              <img
                className="w-full max-h-[341px] h-full object-cover rounded-lg"
                src="/work_3.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="md:flex item-center justify-between gap-8 space-y-8 md:space-y-0">
            {/* image wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full max-h-[341px] h-full shadow-lg shadow-[#000000] rounded-lg"
            >
              <img
                className="w-full max-h-[341px] h-full object-cover rounded-lg"
                src="/work_4.jpg"
                alt=""
              />
            </motion.div>
            {/* text wrapper */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 w-full space-y-6"
            >
              <h4 className="text-base text-[#5dffff] font-josefin font-semibold capitalize">
                project
              </h4>
              <h2 className="text-3xl text-white font-josefin font-bold capitalize mt-4">
                work in progress
              </h2>
              <div className="mt-6 p-4 bg-gradient-to-r from-[#dc00d3] to-[#3baac8] rounded-lg text-base text-[#fafafa] font-josefin font-normal">
                <p>
                  Ogni lavoro concluso apre la strada al prossimo.Non ci si
                  ferma mai e ogni progetto è un passo in più per crescere,
                  imparare e realizzare nuove idee.
                </p>
              </div>
              {/* social link */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  className="text-white text-2xl"
                  href="https://github.com/luca-vigano"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-white text-2xl"
                  href="https://github.com/luca-vigano"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
