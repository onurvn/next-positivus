"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const cases = [
  {
    id: 1,
    content:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    content:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 3,
    content:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

function CaseCarrousel() {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={cardRef}
      className="flex w-full flex-col items-center justify-between gap-4 text-start lg:hidden"
    >
      {cases.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          className="space-y-4 rounded-3xl bg-black p-6"
        >
          <p className="text-[16px] text-white">{item.content}</p>

          <a
            href="#"
            className="text-custom-green flex items-center gap-2 text-[18px] hover:underline"
          >
            Learn more
            <ArrowUpRight className="size-6" />
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export default CaseCarrousel;
