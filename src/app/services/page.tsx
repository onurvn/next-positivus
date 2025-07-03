"use client";

import { useRouter } from "next/navigation";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";

import HowWeWorkSection from "@sections/ServicesSection/components/HowWeWorkSection";

import discussion_equipe_image from "@assets/images/discussion-dequipe.svg";
import vector from "@assets/images/testimonial_vector_green.png";
import CaseStudiesSection from "@sections/CaseStudiesSection/CaseStudiesSection";
import robot_arm from "@assets/images/robot-arm.svg";

export default function Page() {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const cardIsInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const router = useRouter();

  return (
    <div className="w-full space-y-12 lg:space-y-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:bg-custom-grey flex w-full flex-col justify-between rounded-3xl bg-transparent p-0 text-start lg:flex-row lg:gap-10 lg:p-8"
      >
        <h2 className="block text-[43px] leading-none font-medium text-black lg:hidden lg:text-[60px]">
          Expert Digital Marketing Services
        </h2>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            src={discussion_equipe_image}
            alt="Collaboration Image"
            className="h-auto w-full max-w-xl object-cover"
          />
        </div>

        <div className="my-0 flex w-full flex-col items-start gap-6 lg:my-20 lg:w-1/2 lg:gap-12 xl:my-32">
          <h2 className="hidden text-[43px] leading-none font-medium text-black lg:block lg:text-[60px]">
            Expert Digital Marketing Services
          </h2>

          <p className="text-[16px] text-black lg:text-[18px]">
            Unlock your business&apos;s full potential with tailored strategies
            designed to drive growth and deliver results.
          </p>
        </div>
      </motion.div>

      <div className="flex w-full items-start">
        <button
          onClick={() => router.back()}
          className="group flex cursor-pointer items-center gap-2"
        >
          <ArrowUpLeft className="bg-custom-dark text-custom-green h-8 w-8 rounded-full p-2 transition-all duration-200 ease-out group-hover:-rotate-45 md:h-10 md:w-10" />

          <span className="text-[18px] font-medium text-black md:text-[26px]">
            Back
          </span>
        </button>
      </div>

      <div className="flex w-full flex-col items-start gap-6 rounded-3xl bg-black p-6 text-start md:gap-8 lg:flex-row lg:p-8">
        <div className="flex w-full items-start gap-4 md:gap-8">
          <Image
            src={vector}
            alt="vector"
            className="h-auto w-[24px] object-cover lg:w-[32px]"
          />

          <div className="text-custom-dark text-[24px] font-medium md:text-[32px]">
            <span className="bg-custom-green rounded-lg px-3 py-1">
              Search engine
            </span>
            <br />
            <span className="bg-custom-green rounded-lg px-3 py-1">
              optimization
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 md:gap-8">
          <p className="text-white">
            SEO is the process of improving your website&apos;s visibility on
            search engines like Google. By optimizing your content and site
            structure. We help your business rank higher in search results,
            driving more organic traffic and potential customers.
          </p>

          <button className="text-custom-dark hover:border-custom-dark w-full cursor-pointer rounded-lg bg-white px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white hover:opacity-90 lg:text-lg">
            Boost My Rankings
          </button>
        </div>
      </div>

      <HowWeWorkSection />

      <CaseStudiesSection />

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60 }}
        animate={cardIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border-custom-dark flex w-full flex-col justify-between gap-4 rounded-3xl border bg-white p-4 text-start shadow-[0px_4px_0px_0px_#000] md:items-center lg:flex-row lg:p-8"
      >
        <div className="flex w-full flex-col items-start gap-5 lg:w-1/2 lg:gap-6">
          <h3 className="text-[26px] font-medium text-black lg:text-[28px]">
            Ready Elevate Your Search Rankings?
          </h3>

          <div className="h-[1px] w-full bg-black"></div>

          <p className="text-[16px] text-black lg:text-[18px]">
            Our proven SEO strategies are designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            we&apos;re here to make it happen.
          </p>

          <p className="mt-3 text-[16px] font-semibold text-black lg:text-[18px]">
            Let&apos;s work together to grow your online presence.
          </p>

          <button className="bg-custom-green flex w-full cursor-pointer items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-medium text-black outline-none lg:py-5 lg:text-lg">
            Start My SEO Journey
          </button>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            src={robot_arm}
            alt="Robot Arm"
            className="h-auto w-full max-w-[400px] object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
