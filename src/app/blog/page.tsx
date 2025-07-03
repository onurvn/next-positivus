"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import marketing_illustration from "@assets/images/marketing-illustration.png";
import vector from "@assets/images/vector_dark.svg";
import MoreInsightsSection from "@sections/BlogSections/MoreInsightsSection";

export default function Page() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const cardIsInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const textIsInView = useInView(textRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

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
            src={marketing_illustration}
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

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: -50 }}
        animate={cardIsInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center gap-2 lg:gap-4">
          <Image
            src={vector}
            alt="Vector"
            className="h-auto w-12 object-cover lg:w-18"
          />

          <div className="flex flex-col items-start gap-1.5">
            <h4 className="text-lg leading-none font-medium text-black lg:text-[20px]">
              Sarah Kim
            </h4>

            <span className="text-sm text-black lg:text-base">
              Content Creator
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <h4 className="text-[26px] font-medium text-black/40 uppercase lg:text-[30px]">
            A
          </h4>

          <h4 className="text-[26px] font-medium text-black uppercase lg:text-[30px]">
            A
          </h4>

          <h4 className="text-[26px] font-medium text-black/40 uppercase lg:text-[30px]">
            A
          </h4>
        </div>
      </motion.div>

      <div className="h-[2px] w-full bg-black"></div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: 50 }}
        animate={textIsInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto w-full max-w-full space-y-4 text-black lg:max-w-3xl lg:space-y-6 2xl:max-w-6xl"
      >
        <p className="text-[16px] lg:text-[18px]">
          In the ever-evolving digital landscape, businesses are faced with an
          important question: should they invest in pay-per-click (PPC)
          advertising or focus on organic marketing strategies? While both
          approaches have their merits, choosing the right one depends on your
          goals, budget, and timeline. Let&apos;s dive into the strengths,
          challenges, and real-world applications of PPC and organic marketing
          to help you make an informed decision.
        </p>

        <h3 className="text-[26px] font-medium lg:text-[30px]">
          The Challenge of Standing Out Online
        </h3>

        <p className="text-[16px] lg:text-[18px]">
          Every day, affiliate of businesses compete for visibility, online,
          making it increasingly difficult to capture the attention of potential
          customers. Organic sector teams are highly sought after, but winning a
          unique 2D Google titles will be not considered unfair. Meanwhile, PPC
          also provide instant visibility, but can quickly drain your budget if
          I&apos;m executed effectively.
        </p>

        <p className="text-[16px] lg:text-[18px]">
          For small businesses with limited resources, this dilemma can feel
          like an impossible balancing act. Do you play the long game with
          organic strategies or get for quick wins with PPC?
        </p>

        <h3 className="text-[26px] font-medium lg:text-[30px]">
          Comparing PPC and Organic Marketing
        </h3>

        <p className="text-[16px] lg:text-[18px]">
          Pray-per-click (PPC) and organic marketing each offer different
          advantages and challenges, making them effective for different
          business needs. PPC is designed to deliver immediate results by
          focusing on high levels of talent. In recent regions of social media
          platforms including businesses with best performing skills, we have
          been able to achieve competitive performance. However, offering
          flexibility is often hard and easy as needed. However, PPC can become
          expensive devices, particularly in competitive industries, and its
          results are short-ranged since traffic stops within the campaign mode.
        </p>

        <p className="text-[16px] lg:text-[18px]">
          In contrast, mobile marketing focuses on building a strong,
          sustainable presence through strategies like search engine
          optimization (SEO) and content creation. This approach builds trust
          and credibility over time, delivering consistent traffic without the
          need for ongoing set spend. While the results are thus trying to
          maximize our own team members lives, PPC, organic marketing provides
          long-term benefits that make it a valuable strategy for sustained
          growth.
        </p>

        <h3 className="text-[26px] font-medium lg:text-[30px]">
          Striking the Right Balance
        </h3>

        <p className="border-l-custom-green border-l-4 pl-4 text-[16px] lg:pl-6 lg:text-[18px]">
          &quot;PPC and organic marketing aren&apos;t rivals—they&apos;re
          teammates. The best strategies combine both to create a holistic
          approach to growth&quot; says a digital marketing expert.
        </p>

        <p className="text-[16px] lg:text-[18px]">
          For businesses, businesses might use PPC to generate quick traffic for
          a new product launch while building long-term organic authority
          through SEO and blogging. Exemplary those strategies ensures
          you&apos;re reaching your audience now while laying the groundwork for
          future success.
        </p>

        <p className="text-[16px] lg:text-[18px]">
          For small businesses with limited resources, this dilemma can feel
          like an impossible balancing act. Do you play the long game with
          organic strategies or get for quick wins with PPC?
        </p>
      </motion.div>

      <MoreInsightsSection />
    </div>
  );
}
