"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import Faq from "@sections/PrincingSections/Faq";

const pricingItems = [
  {
    id: 1,
    plan: "Basic Plan",
    price: "$500",
    color: "text-black",
    bg: "bg-white",
    btn_1: { color: "text-white", bg: "bg-black" },
    btn_2: { color: "text-black", bg: "bg-white" },
    options: [
      "Website optimization",
      "Social media setup and management(1 plateform)",
      "Monthly progress report",
      "Email support",
      "Basic competitor analysis",
      "Initial SEO audit",
    ],
    popular: false,
  },
  {
    id: 2,
    plan: "Pro Plan",
    price: "$1000",
    color: "text-white",
    bg: "bg-black",
    btn_1: { color: "text-black", bg: "bg-custom-green" },
    btn_2: { color: "text-white", bg: "bg-black" },
    options: [
      "Includes all from the Basic Plan",
      "Social media setup and  management (up to 3 plateforms)",
      "PPC ad campaign management",
      "Email and phone support",
      "On-page SEO improvements",
      "Monthly content recommendations",
    ],
    popular: true,
  },
  {
    id: 3,
    plan: "Elite Plan",
    price: "$2000",
    color: "text-black",
    bg: "bg-white",
    btn_1: { color: "text-white", bg: "bg-black" },
    btn_2: { color: "text-black", bg: "bg-white" },
    options: [
      "Includes all from the Pro Plan",
      "Website design and developement",
      "Comprehensive SEO strategy",
      "Social media setup management (up to 5 plateforms)",
      "Content marketing strategy and implementation",
      "In-depth analytics and reporting",
    ],
    popular: false,
  },
];

export default function Page() {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const cardIsInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div className="mt-0 w-full space-y-12 lg:mt-6 lg:space-y-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full space-y-2 lg:space-y-4"
      >
        <h1 className="text-[43px] leading-none font-medium text-black lg:text-[60px]">
          Pricing
        </h1>

        <p className="max-w-full text-[18px] text-black lg:max-w-[600px] lg:text-[20px]">
          Elevate Your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>
      </motion.div>

      <div
        ref={cardRef}
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {pricingItems.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={cardIsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.3,
            }}
            className={`flex w-full flex-col items-start gap-2 rounded-3xl border-[1px] border-black p-6 shadow-[0px_4px_0px_0px_#000] ${card.bg}`}
          >
            <div className="flex w-full items-center justify-between">
              <h4
                className={`text-[26px] font-medium ${card.color} lg:text-[30px]`}
              >
                {card.plan}
              </h4>

              {card.popular && (
                <div className="bg-custom-green rounded-full px-2 py-1.5 text-sm font-semibold text-black">
                  Popular
                </div>
              )}
            </div>

            <h3
              className={`flex items-center gap-2 text-[36px] font-medium ${card.color} lg:text-[40px]`}
            >
              {card.price}
              <span className="mt-2 text-sm font-normal lg:text-base">
                /month
              </span>
            </h3>

            <div className="flex w-full flex-col items-start gap-4">
              <button
                className={`${card.btn_1.bg} ${card.btn_1.color} border-[1.5px] border-${card.btn_1.color} w-full cursor-pointer rounded-lg px-4 py-3 text-base font-medium lg:text-lg`}
              >
                Get Started
              </button>

              <button
                className={`${card.btn_2.bg} ${card.btn_2.color} border-[1.5px] border-${card.btn_2.color} w-full cursor-pointer rounded-lg px-4 py-3 text-base font-medium lg:text-lg`}
              >
                Request a quote
              </button>
            </div>

            <div
              className={`my-4 h-[2px] w-full ${
                card.color === "text-white" ? "bg-white" : "bg-black"
              } lg:my-6`}
            ></div>

            <div className="flex w-full flex-col items-start gap-3 lg:gap-4">
              {card.options.map((opt, index) => (
                <div key={index} className="flex items-start gap-2.5 lg:gap-4">
                  <span className="bg-custom-green flexitems-center justify-center rounded-full p-1 text-black lg:p-1.5">
                    <Check className="size-3 lg:size-4" />
                  </span>

                  <p className={`${card.color} text-sm lg:text-base`}>{opt}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Faq />
    </div>
  );
}
