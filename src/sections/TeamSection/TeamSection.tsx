"use client";

import Image from "next/image";

import { teamItems } from "@/constants";
import instagram_icon from "@assets/icons/instagram_icon.png";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

function TeamSection() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const isCardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-start gap-4 lg:flex-row"
      >
        <h3 className="text-custom-dark text-[36px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-2 py-0.5">Team</span>
        </h3>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </motion.div>

      <div className="">
        <div
          ref={cardRef}
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10"
        >
          {teamItems.map((item, index) => (
            <motion.div
              key={item.id}
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-custom-grey flex w-full flex-col items-start justify-between gap-4 rounded-3xl border border-black p-6 text-start shadow-[0px_4px_0px_#000] lg:gap-6"
            >
              <div className="flex w-full items-center justify-between">
                <Image
                  src={item.image}
                  alt="Team Members Picture"
                  className="h-auto w-[80px] object-cover lg:w-[100px]"
                />

                <div className="space-y-4">
                  <div className="flex w-full items-end justify-end">
                    <Image
                      src={instagram_icon}
                      alt="Instagram Icon"
                      className="h-auto w-[28px] object-cover lg:w-[34px]"
                    />
                  </div>

                  <div className="">
                    <h4 className="text-[18px] font-medium text-black lg:text-[20px]">
                      {item.name}
                    </h4>

                    <p className="text-[16px] text-black lg:text-[18px]">
                      {item.job}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-black"></div>

              <p className="text-[16px] text-black lg:text-[18px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full items-center justify-center lg:items-end lg:justify-end"
        >
          <button className="text-custom-grey hover:border-custom-dark hover:text-custom-dark mt-8 flex w-full cursor-pointer items-center justify-center rounded-lg bg-black px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white lg:w-fit lg:text-lg">
            See all team
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
