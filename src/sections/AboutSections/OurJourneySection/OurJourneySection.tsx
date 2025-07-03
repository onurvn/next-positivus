"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

import vector from "@assets/images/testimonial_vector_green.png";
import circular_shapes from "@assets/images/abstract-circular-shape.svg";

function OurJourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const journeyItems = [
    {
      id: 1,
      date: "2019",
      title: "The Beginning",
      desc: "Positivus was founded to help businesses navigate the digital world and achieve online sucess.",
    },
    {
      id: 2,
      date: "2021",
      title: "Industry Recognition",
      desc: "Position was named among the top 50 global digital agencies, affirming our leadership.",
    },
    {
      id: 3,
      date: "2023",
      title: "Innovation and Growth",
      desc: "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.",
    },
    {
      id: 4,
      date: "2024",
      title: "Leading the future",
      desc: "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.",
    },
  ];

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-4 lg:flex-row"
      >
        <div className="text-custom-dark text-[32px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-3 py-1">
            Our Journey
          </span>
        </div>

        <p className="max-w-xl text-[16px] leading-[28px] text-black">
          From humble begginnings to industry leaders, discover how Positivus
          has evolved to drive success for businesses wordwide.
        </p>
      </motion.div>

      <div className="relative w-full py-10 text-start">
        <div className="absolute top-0 left-1/2 z-0 hidden h-full w-1 -translate-x-1/2 bg-lime-400 md:block" />

        <Image
          src={circular_shapes}
          alt="Shapes"
          className="absolute top-0 left-0 hidden h-auto w-[340px] -translate-x-1/2 object-cover lg:block"
        />

        <Image
          src={circular_shapes}
          alt="Shapes"
          className="absolute top-0 right-0 hidden h-auto w-[340px] translate-x-1/2 translate-y-1/2 object-cover lg:block"
        />

        <Image
          src={circular_shapes}
          alt="Shapes"
          className="absolute right-0 bottom-0 hidden h-auto w-[340px] translate-x-1/2 translate-y-1/2 object-cover lg:block"
        />

        <Image
          src={circular_shapes}
          alt="Shapes"
          className="absolute bottom-0 left-0 hidden h-auto w-[340px] -translate-x-1/2 object-cover lg:block"
        />

        <div className="relative z-10 flex flex-col gap-12 lg:gap-20">
          {journeyItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col items-center gap-4 md:flex-row md:gap-6 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex w-full px-4 md:w-1/2 ${
                    isEven ? "justify-start" : "justify-start md:justify-end"
                  }`}
                >
                  <h2 className="text-[32px] leading-none font-bold text-black">
                    {item.date}
                  </h2>
                </div>

                <div className="absolute top-4 left-0 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-lime-400 lg:top-1/2 lg:left-1/2 lg:block" />

                <div className="w-full px-4 md:w-1/2">
                  <div className="flex items-start gap-4 rounded-3xl bg-black p-6 shadow-lg">
                    <Image
                      src={vector}
                      alt="Vector"
                      className="mt-1 h-auto w-[24px] object-contain"
                    />

                    <div className="space-y-2">
                      <h3 className="text-[22px] font-semibold text-white md:text-[26px]">
                        {item.title}
                      </h3>

                      <p className="max-w-sm text-[14px] leading-relaxed text-white/80 md:text-[16px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurJourneySection;
