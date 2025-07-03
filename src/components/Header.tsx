"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { linkItems } from "../constants";
import logo from "@assets/logos/logo.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  const navMotion = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
      },
    },

    hidden: {
      y: "-150vw",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  } as const;

  const logoVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const navLinksVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.7 },
    }),
  };

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between">
        <motion.div
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          className="cursor-pointer"
        >
          <Link href="/" prefetch={true}>
            <Image
              src={logo}
              alt="Logo"
              className="h-auto w-[150px] object-cover lg:w-[210px]"
            />
          </Link>
        </motion.div>

        <ul className="hidden items-center gap-[20px] lg:flex">
          {linkItems.map((link, index) => (
            <motion.li
              key={link.id}
              custom={index}
              variants={navLinksVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Link
                href={link.path}
                prefetch={true}
                className={`text-custom-dark text-[20px] leading-[28px] font-[400] ${
                  pathname === link.path
                    ? "bg-custom-green rounded-lg px-4 py-2.5"
                    : "hover:border-b-custom-green pb-1 hover:border-b-[3px]"
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}

          <motion.button
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-custom-dark border-custom-dark hover:bg-custom-dark flex cursor-pointer items-center justify-center rounded-lg border bg-white px-4 py-3 text-base transition-all duration-300 ease-in-out hover:text-white lg:text-lg"
          >
            Request a quote
          </motion.button>
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex lg:hidden"
          onClick={handleToggled}
        >
          <span> {toggled ? <X size={34} /> : <Menu size={34} />} </span>
        </motion.div>

        <AnimatePresence>
          {toggled && (
            <div className="fixed z-30 overflow-hidden lg:hidden">
              <motion.div
                initial="hidden"
                animate="visible"
                exit={{ y: "-100%", opacity: 0 }}
                variants={navMotion}
                translate="no"
                className="fixed top-0 left-0 z-40 hidden h-full w-full flex-col items-center bg-white p-4 text-center max-lg:flex"
              >
                <div className="flex w-full items-center justify-between">
                  <motion.div
                    variants={logoVariant}
                    initial="hidden"
                    animate="visible"
                    className="z-50 cursor-pointer"
                  >
                    <Link href="/">
                      <Image
                        src={logo}
                        alt="Logo"
                        className="h-auto w-[150px] object-cover lg:w-[210px]"
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="z-50 flex lg:hidden"
                    onClick={handleToggled}
                  >
                    <span>
                      <X size={34} />
                    </span>
                  </motion.div>
                </div>

                <ul className="flex h-full w-full flex-col items-center justify-center gap-[30px] md:gap-[40px]">
                  {linkItems.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={link.path}
                        onClick={handleToggled}
                        className={`text-custom-dark text-[18px] leading-[28px] font-[400] md:text-[28px] ${
                          pathname === link.path
                            ? "bg-custom-green rounded-lg px-4 py-2.5"
                            : "hover:border-b-custom-green pb-1 hover:border-b-[3px]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}

                  <button className="text-custom-dark border-custom-dark hover:bg-custom-dark flex cursor-pointer items-center justify-center rounded-lg border bg-white px-4 py-3 text-[18px] transition-all duration-300 ease-in-out hover:text-white md:text-[28px]">
                    Request a quote
                  </button>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
