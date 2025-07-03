"use client";

import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { ArrowUpRight } from "lucide-react";

interface Story {
  id: number;
  title: string;
  description: string;
}

const successStories: Story[] = [
  {
    id: 1,
    title: "E-commerce Fashion Brand",
    description:
      "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
  },

  {
    id: 2,
    title: "Healthcare Provider",
    description:
      "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
  },
  {
    id: 3,
    title: "Local Restaurant Chain",
    description:
      "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
  },
  {
    id: 4,
    title: "E-commerce Fashion Brand",
    description:
      "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
  },
  {
    id: 5,
    title: "Local Restaurant Chain",
    description:
      "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
  },
  {
    id: 6,
    title: "Healthcare Provider",
    description:
      "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
  },
];

function AllSuccesStories() {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const cardIsInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:gap-16 lg:text-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center justify-start gap-4 lg:flex-row"
      >
        <h3 className="text-[36px] font-medium text-black md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-2 py-0.5">
            All Success Stories
          </span>
        </h3>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Explore Real-Life Exemples of Our Proven Digital Marketing <br />
          Success through Our Case Studies
        </p>
      </motion.div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: 80 }}
        animate={cardIsInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid w-full grid-cols-1 flex-col gap-6 rounded-3xl border-0 bg-white p-0 text-start shadow-none md:grid-cols-2 lg:grid-cols-3 lg:flex-row lg:gap-0 lg:border-[1px] lg:border-black lg:p-8 lg:shadow-[0px_4px_0px_0px_#000]"
      >
        {successStories.map((story, index) => {
          return (
            <div
              key={story.id}
              className={`${index == 1 ? "border-0 lg:border-x-[1px]" : ""} ${
                index == 4 ? "border-0 lg:border-x-[1px]" : ""
              } ${
                index >= 3 ? "border-0 lg:border-t-[1px]" : ""
              } flex flex-col items-start gap-3 rounded-3xl border-[1px] border-black p-4 shadow-[0px_4px_0px_0px_#000] md:gap-4 lg:rounded-none lg:border-0 lg:p-6 lg:shadow-none`}
            >
              <h3 className="text-[26px] font-medium text-black md:text-[30px]">
                {story.title}
              </h3>

              <p className="text-sm text-black md:text-base">
                {story.description}
              </p>

              <button className="group mt-1 flex cursor-pointer items-center gap-2 lg:mt-1">
                <ArrowUpRight className="text-custom-dark bg-custom-green h-8 w-8 rounded-full p-1.5 transition-all duration-200 ease-out group-hover:rotate-45 md:h-10 md:w-10" />

                <span className="text-[16px] font-medium text-black md:text-[18px]">
                  Learn More
                </span>
              </button>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default AllSuccesStories;
