"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { footerItems } from "../constants";
import logo from "@assets/logos/footer_logo.svg";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex w-full flex-col items-center gap-8 rounded-t-4xl bg-black p-6 text-center lg:items-start lg:gap-14 lg:p-10 lg:text-start"
    >
      {footerItems.map((item) => (
        <div key={item.contactInfos.email} className="w-full space-y-10">
          <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
            <Image
              src={logo}
              alt="Logo"
              className="h-auto w-[140px] object-cover lg:w-[180px]"
            />

            <ul className="flex flex-col items-center gap-4 no-underline lg:flex-row lg:gap-6 lg:underline">
              {item.links.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-[16px] text-white md:text-[18px]"
                >
                  {link.name}
                </Link>
              ))}
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              {item.socialMedia.map((social) => (
                <Image
                  key={social.id}
                  src={social.icon}
                  alt={social.alt}
                  className="h-auto w-[24px] object-cover lg:w-[30px]"
                />
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="w-full space-y-6 lg:w-1/3">
              <h4 className="text-custom-dark text-[18px] font-medium md:text-[20px]">
                <span className="bg-custom-green rounded-lg px-2 py-0.5">
                  Contact us:
                </span>
              </h4>

              <ul className="flex flex-col items-center gap-3 text-center text-[16px] text-white md:text-[18px] lg:items-start lg:text-start">
                <li>{`Email: ${item.contactInfos.email}`}</li>
                <li>{`Phone: ${item.contactInfos.phone}`}</li>
                <li>{`Address: ${item.contactInfos.address}`}</li>
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full flex-col items-start gap-4 rounded-xl bg-[#292A32] px-6 py-10 lg:w-2/3 lg:flex-row lg:items-center lg:px-8 lg:py-16"
            >
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white bg-transparent px-4 py-2 text-[18px] text-[#898989] outline-none placeholder:text-[18px] md:px-6 md:py-3"
              />

              <button
                type="submit"
                className="bg-custom-green flex w-full cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-base font-medium text-black lg:text-lg"
              >
                Subscribe to news
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center gap-3 lg:hidden">
            {item.socialMedia.map((social) => (
              <Image
                key={social.id}
                src={social.icon}
                alt={social.alt}
                className="h-auto w-[24px] object-cover"
              />
            ))}
          </div>

          <div className="h-[1px] w-full bg-white"></div>

          <div className="flex w-full flex-col items-center justify-start gap-4 text-center lg:flex-row lg:items-start lg:gap-8 lg:text-start">
            <p className="text-[16px] text-white md:text-[18px]">
              © 2025 Positivus. All Rights Reserved.
            </p>

            <Link
              href="#"
              className="text-[16px] text-white underline md:text-[18px]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      ))}
    </motion.footer>
  );
};

export default Footer;
