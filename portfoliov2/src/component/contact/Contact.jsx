import React, { useRef, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mrbawylq");
  const formRef = useRef(null);

  // reset form quando l'invio ha successo
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <div
      id="contact"
      className="w-full py-[60px] bg-[#18052d] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center justify-center flex-col gap-6 mb-10">
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-josefin capitalize font-semibold bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] bg-clip-text text-transparent"
          >
            Contact
          </motion.h3>
        </div>
        <div className="md:flex justify-between gap-10 space-y-10 md:space-y-0">
          {/* text wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full space-y-6"
          >
            <h3 className="text-4xl text-[#5dffff] font-josefin font-semibold capitalize">
              Inviami un messaggio
            </h3>
            <p className="text-lg text-[#fafafa] font-josefin font-normal leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              alias odit quisquam dolores. Omnis architecto, harum expedita modi
            </p>

            {/* contact box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white">
                  <BsFillTelephoneFill />
                </div>
                <p className="text-base text-[#fafafa] font-josefin font-normal">
                  +39 393 6245467
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white">
                  <FaMailBulk />
                </div>
                <p className="text-base text-[#fafafa] font-josefin font-normal">
                  luca.vigano@hotmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white">
                  <IoLocationSharp />
                </div>
                <p className="text-base text-[#fafafa] font-josefin font-normal">
                  Verano Brianza (MB)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/luca-vigan%C3%B2-58302b269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white">
                    <FaLinkedin />
                  </div>
                  <p className="text-base text-[#fafafa] font-josefin font-normal">
                    Linkedin
                  </p>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/luca-vigano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white">
                    <FaGithub />
                  </div>
                  <p className="text-base text-[#fafafa] font-josefin font-normal">
                    Github
                  </p>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/CV_Luca.pdf"
                  download
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] w-[45px] h-[45px] flex items-center justify-center rounded-xl text-lg text-white">
                    <FaRegFilePdf />
                  </div>
                  <p className="text-base text-[#fafafa] font-josefin font-normal">
                    Download Curriculum
                  </p>
                </a>
              </div>
            </div>
          </motion.div>

          {/* contact form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 w-full flex flex-col gap-6 p-6 mt-8 shadow-xl shadow-[#fafafa] rounded-3xl"
          >
            {/* Nome */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="name"
                className="text-base text-white font-josefin font-medium capitalize"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Nome"
                className="w-full h-[48px] border border-[#fafafa] bg-transparent pl-3 rounded-3xl placeholder-white text-white font-josefin font-medium"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="email"
                className="text-base text-white font-josefin font-medium capitalize"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full h-[48px] border border-[#fafafa] bg-transparent pl-3 rounded-3xl placeholder-white text-white font-josefin font-medium"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Messaggio */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="message"
                className="text-base text-white font-josefin font-medium capitalize"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Come posso aiutarti?"
                className="w-full min-h-[100px] pt-3 border border-[#fafafa] bg-transparent pl-3 rounded-3xl placeholder-white text-white font-josefin font-medium"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Bottone */}
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-gradient-to-r from-[#5dffff] to-[#ae0ca7] px-6 py-3 rounded-3xl text-white font-josefin font-semibold shadow-md transition-transform hover:scale-105 disabled:opacity-50"
            >
              {state.submitting ? "Invio..." : "Invia"}
            </button>

            {/* Messaggio di successo */}
            {state.succeeded && (
              <p className="text-green-400 font-josefin text-lg mt-4">
                ✅ Messaggio inviato con successo, ti risponderò presto!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};
