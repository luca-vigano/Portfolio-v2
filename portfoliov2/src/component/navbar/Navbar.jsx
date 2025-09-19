import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-none flex items-center justify-center absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-0">
        {/* desktop */}
        <nav className=" w-full flex items-center justify-center gap-10">
          <div className="md:hidden flex items-center justify-center">
            <h1 className="text-xl text-white font-josefin font-semibold capitalize">
              developer
            </h1>
          </div>

          <ul className="hidden md:flex items-center justify-center gap-10">
            {/* About */}
            <li>
              <Link
                to="about"
                smooth={true}
                duration={600}
                offset={50}
                className="text-lg text-white font-inter font-medium uppercase cursor-pointer"
              >
                about
              </Link>
            </li>

            {/* <li>
              <div className="trapezoid"></div>
            </li> */}

            {/* Work */}
            <li>
              <Link
                to="work"
                smooth={true}
                duration={600}
                offset={-50}
                className="text-lg text-white font-inter font-medium uppercase cursor-pointer"
              >
                work
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-50}
                className="text-lg text-white font-inter font-medium uppercase cursor-pointer"
              >
                contact
              </Link>
            </li>
          </ul>

          {/* mobile hamburger */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl font-semibold text-white bg-none cursor-pointer"
            >
              <MdMenuOpen />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <nav
          className={`md:hidden max-w-[350px] h-screen bg-[#18052d] fixed top-0 right-0  w-full flex items-center flex-col justify-center gap-10 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } translate-all duration-300 ease-in-out z-50`}
        >
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl font-semibold text-white bg-none cursor-pointer"
            >
              <RiCloseLargeLine />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center gap-10">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={600}
                offset={-50}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white font-inter font-medium uppercase cursor-pointer"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={600}
                offset={-50}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white font-inter font-medium uppercase cursor-pointer"
              >
                work
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-50}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white font-inter font-medium uppercase cursor-pointer"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
