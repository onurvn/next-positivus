"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import work_together_image from "@assets/images/collaboration_image.png";
import ImpactSection from "@sections/AboutSections/ImpactSection/ImpactSection";
import OurJourneySection from "@sections/AboutSections/OurJourneySection/OurJourneySection";
import CoreValuesSection from "@sections/AboutSections/CoreValuesSection/CoreValuesSection";
import business_discussion from "@assets/images/business-discussion.svg";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div ref={ref} className="w-full space-y-12 lg:space-y-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:bg-custom-grey flex w-full flex-col justify-between rounded-3xl bg-transparent p-0 text-start lg:flex-row lg:gap-10 lg:p-8"
      >
        <h2 className="block text-[43px] leading-none font-medium text-black lg:hidden lg:text-[60px]">
          Together for Success
        </h2>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            src={work_together_image}
            alt="Collaboration Image"
            className="h-auto w-full max-w-xl object-cover"
          />
        </div>

        <div className="my-0 flex w-full flex-col items-start gap-6 lg:my-20 lg:w-1/2 lg:gap-12 xl:my-32">
          <h2 className="hidden text-[43px] leading-none font-medium text-black lg:block lg:text-[60px]">
            Together for Success
          </h2>

          <p className="text-[16px] text-black lg:text-[18px]">
            At Positivus, we help businesses grow by combining creativity,
            innovationl, and data-driven strategies. Together, we build a future
            of shared success.
          </p>
        </div>
      </motion.div>

      <ImpactSection />

      <OurJourneySection />

      <CoreValuesSection />

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-custom-dark bg-custom-green mt-6 flex w-full flex-col items-center justify-between gap-2 rounded-3xl border p-6 text-start shadow-[0px_4px_0px_0px_#000] md:mt-8 md:gap-4 lg:flex-row lg:p-10"
      >
        <div className="w-full space-y-4 lg:w-1/2">
          <h3 className="text-[26px] font-medium text-black md:text-[30px]">
            Join OUr Team
          </h3>

          <p className="max-w-[600px] text-[16px] text-black lg:text-[18px]">
            At Positivus, we thrive on innovation and collaboration. We&apos;re
            always looking for passionate individuals to join our team and help
            businesses grow. Ready to make an impact?
          </p>

          <button className="text-custom-grey hover:border-custom-dark hover:text-custom-dark mt-2 w-full cursor-pointer rounded-lg bg-black px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white lg:mt-0 lg:w-fit lg:text-lg">
            Explore Careers
          </button>
        </div>

        <Image
          src={business_discussion}
          alt="Business Discussion Illustration"
          className=""
        />
      </motion.div>
    </div>
  );
}
