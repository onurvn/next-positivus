"use client";

import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { ArrowUpRight } from "lucide-react";

interface Insight {
  id: number;
  title: string;
  description: string;
}

const insightItems: Insight[] = [
  {
    id: 1,
    title: "10 SEO Myths You Need to Stop Believing",
    description:
      "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
  },
  {
    id: 2,
    title: "Maximizing ROI with Social Media Advertising",
    description:
      "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.",
  },
  {
    id: 3,
    title: "How Content Marketing Fuels Long-Term Growth",
    description:
      "Content isn't just king—it's the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.",
  },
  {
    id: 4,
    title: "The Art of A/B Testing: Perfecting Your Campaigns",
    description:
      "From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.",
  },
  {
    id: 5,
    title: "Understanding Google's Latest Algorithm Update",
    description:
      "Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
  },
  {
    id: 6,
    title: "5 Ways AI is Changing Digital Marketing",
    description:
      "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.",
  },
];

const MoreInsightsSection = () => {
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
            Explore More
          </span>
          <br />
          <span className="bg-custom-green rounded-lg px-2 py-0.5">
            Insights
          </span>
        </h3>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Discover expert tips, strategies, and stories to keep you ahead in the
          digital landscape.
        </p>
      </motion.div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: 80 }}
        animate={cardIsInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid w-full grid-cols-1 flex-col gap-6 rounded-3xl border-0 bg-white p-0 text-start shadow-none md:grid-cols-2 lg:grid-cols-3 lg:flex-row lg:gap-0 lg:border-[1px] lg:border-black lg:p-8 lg:shadow-[0px_4px_0px_0px_#000]"
      >
        {insightItems.map((story, index) => {
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
};

export default MoreInsightsSection;
