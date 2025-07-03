"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

import { ArrowUpRight } from "lucide-react";
import CaseCarrousel from "@/sections/CaseStudiesSection/components/CaseCarrousel";

function CaseStudiesSection() {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const isCardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px  0px",
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
        <h3 className="bg-custom-green text-custom-dark rounded-lg px-2 py-0.5 text-[36px] font-medium md:text-[40px]">
          Case Studies
        </h3>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </motion.div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="hidden w-full items-center justify-between gap-6 rounded-3xl bg-black p-8 text-start lg:flex lg:p-10"
      >
        <div className="flex h-[210px] flex-col items-start justify-between gap-6">
          <p className="text-[16px] text-white lg:text-[18px]">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>

          <a
            href="##"
            className="text-custom-green flex items-center gap-2 text-[18px] hover:underline lg:text-[20px]"
          >
            Learn more
            <span>
              <ArrowUpRight className="size-6 lg:size-8" />
            </span>
          </a>
        </div>

        <div className="hidden h-auto w-px bg-white lg:block" />

        <div className="flex h-[210px] flex-col items-start justify-between gap-6 border-x border-x-white px-12">
          <p className="text-[16px] text-white lg:text-[18px]">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>

          <a
            href="##"
            className="text-custom-green flex items-center gap-2 text-[18px] hover:underline lg:text-[20px]"
          >
            Learn more
            <span>
              <ArrowUpRight className="size-6 lg:size-8" />
            </span>
          </a>
        </div>

        <div className="hidden h-auto w-px bg-white lg:block" />

        <div className="flex h-[210px] flex-col items-start justify-between gap-6">
          <p className="text-[16px] text-white lg:text-[18px]">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>

          <a
            href="##"
            className="text-custom-green flex items-center gap-2 text-[18px] hover:underline lg:text-[20px]"
          >
            Learn more
            <span>
              <ArrowUpRight className="size-6 lg:size-8" />
            </span>
          </a>
        </div>
      </motion.div>

      <CaseCarrousel />
    </section>
  );
}

export default CaseStudiesSection;
