"use client";

import { motion } from "motion/react";
import Image from "next/image";

import hero_image from "@assets/images/hero_image.png";
import LogoMarquee from "@components/LogoMarquee";

function HeroSection() {
  return (
    <section className="flex w-full flex-col items-start gap-6">
      <div className="flex w-full flex-col items-start justify-between gap-6 text-start lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full space-y-4 lg:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-custom-dark text-[43px] leading-tight font-medium lg:text-[60px] lg:leading-[70px]"
          >
            Navigating the digital landscape for success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden text-[18px] leading-[28px] font-normal text-black lg:block lg:text-[20px]"
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-custom-grey hover:border-custom-dark hover:text-custom-dark mt-8 hidden w-full cursor-pointer rounded-lg bg-black px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white lg:block lg:w-fit lg:text-lg"
          >
            Book a consultation
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <Image
            src={hero_image}
            alt="Hero Image"
            className="h-auto max-h-[400px] w-full object-contain md:max-h-[500px] xl:max-h-[800px]"
          />
        </motion.div>

        <div className="block lg:hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[16px] leading-[28px] font-normal text-black"
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-custom-grey hover:border-custom-dark hover:text-custom-dark my-8 w-full cursor-pointer rounded-lg bg-black px-4 py-3 text-lg font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white"
          >
            Book a consultation
          </motion.button>
        </div>
      </div>

      <LogoMarquee direction="left" />

      <div className="block lg:hidden">
        <LogoMarquee direction="right" />
      </div>
    </section>
  );
}

export default HeroSection;
