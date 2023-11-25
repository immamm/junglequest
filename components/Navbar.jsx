'use client';

import { motion, useCycle } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navLinks = [
    { text: 'About', href: '#about' },
    { text: 'Events', href: '#getstarted' },
    { text: 'Socials', href: '#footer' },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white pl-4">
          Jungle-Quest
        </h2>
        <div className="flex items-center">
          {isOpen ? (
            <button
              type="button"
              onClick={() => toggleOpen()}
              className="block md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => toggleOpen()}
              className="block md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M21 12c0 .552-.45 1-1 1H4c-.55 0-1-.448-1-1s.45-1 1-1h16c.55 0 1 .448 1 1zm0-5c0 .552-.45 1-1 1H4c-.55 0-1-.448-1-1s.45-1 1-1h16c.55 0 1 .448 1 1zm0 10c0 .552-.45 1-1 1H4c-.55 0-1-.448-1-1s.45-1 1-1h16c.55 0 1 .448 1 1z"
                />
              </svg>
            </button>
          )}
          <ul
            className={`md:flex md:gap-4 md:items-center ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 px-4 text-white hover:text-gray-400 transition duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          {isOpen && (
            <button
              type="button"
              onClick={() => toggleOpen()}
              className="block md:hidden text-white focus:outline-none ml-2"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707 19.707a1 1 0 01-1.414 0L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;