"use client";

import { motion, useInView } from "motion/react";
import ServiceCard from "./components/ServiceCard";
import { useRef } from "react";

import { serviceCardItems } from "@/constants";
import LetsMakeThingsHappen from "@/sections/ServicesSection/components/LetsMakeThingsHappen";

function ServicesSection() {
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
        <div className="bg-custom-green text-custom-dark rounded-lg px-2 py-0.5 text-[36px] font-medium md:text-[40px]">
          Services
        </div>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </motion.div>

      <div
        ref={cardRef}
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
      >
        {serviceCardItems.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              ref={cardRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <ServiceCard
                bg={card.bg}
                color={card.color}
                text={card.text}
                btn_bg={card.btn_bg}
                btn_color={card.btn_color}
                link_color={card.link_color}
                image={card.image}
              />
            </motion.div>
          );
        })}
      </div>

      <LetsMakeThingsHappen />
    </section>
  );
}

export default ServicesSection;
