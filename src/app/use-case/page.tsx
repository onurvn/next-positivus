"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import AllSuccesStories from "@sections/UseCasesSections/AllSuccesStories";

import { ArrowUpRight } from "lucide-react";
import succes_stories_illustration from "@assets/images/success-stories-illustration-1.png";
import makeThingIllustration from "@assets/images/makeThingIllustration.png";

export default function Page() {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const cardIsInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const featuredItems = [
    { id: 1, perc: "200%", desc: "increase in organic traffic" },
    { id: 2, perc: "150%", desc: "rise in online sales" },
    { id: 3, perc: "75%", desc: "reduction in  cost-per-click (CPC)" },
    { id: 4, perc: "300%", desc: "improvment in  conversion rate" },
  ];

  return (
    <div className="w-full space-y-12 lg:space-y-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:bg-custom-grey flex w-full flex-col justify-between rounded-3xl bg-transparent p-0 text-start lg:flex-row lg:gap-10 lg:p-8"
      >
        <h2 className="block text-[43px] leading-none font-medium text-black lg:hidden lg:text-[60px]">
          Proven Success Stories
        </h2>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            src={succes_stories_illustration}
            alt="Succes Stories Illustration"
            className="h-auto w-full max-w-xl object-cover"
          />
        </div>

        <div className="my-0 flex w-full flex-col items-start gap-6 lg:my-20 lg:w-1/2 lg:gap-12 xl:my-32">
          <h2 className="hidden text-[43px] leading-none font-medium text-black lg:block lg:text-[60px]">
            Proven Success Stories
          </h2>

          <p className="text-[16px] text-black lg:text-[18px]">
            See how our innovative digital marketing strategies have transformed
            businesses. Whether through SEO, PPC, social media, or web design,
            these use cases highlight the tangible impact of our work. Explore
            the successes and envision what we can achieve together.
          </p>
        </div>
      </motion.div>

      <motion.section
        ref={cardRef}
        initial={{ opacity: 0, x: -80 }}
        animate={cardIsInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border-custom-dark bg-custom-dark flex w-full flex-col justify-between gap-4 rounded-3xl border p-6 text-start md:items-center lg:flex-row lg:p-10"
      >
        <div className="w-full space-y-6 lg:w-1/2 lg:space-y-8">
          <h3 className="text-[26px] font-medium lg:text-[30px]">
            <span className="bg-custom-green rounded-lg px-3 py-1">
              Featured Success
            </span>
            <br />
            <span className="bg-custom-green rounded-lg px-3 py-1">Story</span>
          </h3>

          <h4 className="text-[20px] font-medium text-white lg:text-[25px]">
            Scaling Success for a <br /> Leading E-commerce Brand
          </h4>

          <p className="text-[16px] text-white lg:text-[18px]">
            Trought a comprehensive SEO and PPC strategy, we helped this
            e-commerce brand increase visibility, drive traffic, and boost
            sales.
          </p>

          <button className="group flex cursor-pointer items-center gap-2">
            <ArrowUpRight className="text-custom-dark bg-custom-green h-8 w-8 rounded-full p-2 transition-all duration-200 ease-out group-hover:rotate-45 md:h-10 md:w-10" />

            <span className="text-custom-green text-[18px] font-medium md:text-[26px]">
              Read
            </span>
          </button>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-0 lg:w-fit lg:gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="flex h-auto w-full flex-col items-center justify-center gap-2 rounded-3xl bg-white p-4 text-center md:h-40 md:w-40"
            >
              <h4 className="text-lg font-semibold text-black">{item.perc}</h4>

              <p className="text-sm text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <AllSuccesStories />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-custom-green mt-0 flex h-auto w-full items-center justify-center rounded-3xl p-6 text-start md:justify-between lg:mt-4 lg:h-[347px] lg:p-8"
      >
        <div className="hidden h-auto md:block">
          <Image
            src={makeThingIllustration}
            alt="Illustration"
            className="h-auto w-full object-cover lg:h-[395px]"
          />
        </div>

        <div className="space-y-5 lg:space-y-6">
          <h3 className="text-[26px] font-medium text-black lg:text-[30px]">
            Let’s make things happen
          </h3>

          <p className="max-w-[500px] text-[16px] text-black lg:text-[18px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="text-custom-grey hover:border-custom-dark hover:text-custom-dark w-full cursor-pointer rounded-lg bg-black px-4 py-3 text-lg font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white md:w-fit">
            Get your free proposal
          </button>
        </div>
      </motion.div>
    </div>
  );
}
