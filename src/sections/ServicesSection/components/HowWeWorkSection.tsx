"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

import vector_black from "@assets/images/vector_dark.svg";

const workItem = [
  {
    id: 1,
    num: "01",
    title: "Website Audit & Analysis",
    desc: "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
  },
  {
    id: 2,
    num: "02",
    title: "Keyword Research & Strategy",
    desc: "Our team researches the most  relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
  },
  {
    id: 3,
    num: "03",
    title: "On-Page Optimization",
    desc: "We optimize your website's structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
  },
  {
    id: 4,
    num: "04",
    title: "Content Creation & Optimization",
    desc: "Hight-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
  },
  {
    id: 5,
    num: "05",
    title: "Link Building",
    desc: "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
  },
  {
    id: 6,
    num: "06",
    title: "Monotoring & Reporting",
    desc: "We continuously  monitor performance, track rankings, and provide detailed reports, making data-driven adjustements to maintain and improve your results.",
  },
];

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
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
          How We Work: SEO Process
        </div>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Our step-by-step SEO ensures your website ranks higher, attracts more
          traffic, and drives lasting results.
        </p>
      </motion.div>

      <div className="flex w-full flex-col items-start gap-6 lg:gap-8">
        {workItem.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            className="bg-custom-grey flex w-full items-start gap-8 rounded-3xl p-6 text-start lg:items-center lg:gap-10 lg:p-8"
          >
            <div
              style={{
                backgroundImage: `url(${vector_black.src})`,
              }}
              className="relative flex h-[20px] w-[20px] items-center justify-center bg-cover bg-center p-6 lg:h-[100px] lg:w-[100px] lg:p-8"
            >
              <span className="text-custom-green text-[22px] font-medium lg:text-[40px]">
                {item.num}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-[26px] leading-none font-medium text-black lg:text-[30px]">
                {item.title}
              </h3>

              <p className="text-base text-black lg:text-lg">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorkSection;
