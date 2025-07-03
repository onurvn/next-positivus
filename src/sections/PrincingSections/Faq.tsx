"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import { faqItems } from "@/constants";

import plus_icon from "@assets/icons/plus_icon.png";
import minus_icon from "@assets/icons/minus_icon.png";

function Faq() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const [openCardId, setOpenCardId] = useState<number | null>(1);

  const toggleCard = (id: number) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  const ExpandableContent = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight + 10);
      }
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-start gap-4 lg:flex-row"
      >
        <h3 className="text-custom-dark text-[36px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-2 py-0.5">
            Frequently Asked
          </span>
          <br />
          <span className="bg-custom-green rounded-lg px-2 py-0.5">
            Question
          </span>
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex w-full flex-col items-start gap-6"
      >
        {faqItems.map((card) => {
          const isOpen = openCardId === card.id;
          return (
            <motion.div
              layout
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className={`${
                isOpen ? "bg-custom-green" : "bg-custom-grey"
              } flex w-full cursor-pointer flex-col gap-2 rounded-3xl border border-black p-6 text-start shadow-[0px_4px_0px_#000]`}
            >
              <div className="flex w-full items-center justify-between gap-1.5">
                <span className="text-[18px] font-medium text-black md:text-[18px] lg:text-[30px]">
                  {card.question}
                </span>

                <Image
                  src={isOpen ? minus_icon : plus_icon}
                  alt="Toggle Icon"
                  className={`${
                    isOpen ? "rotate-180" : "rotate-0"
                  } h-[42px] w-[42px] object-cover transition-all duration-300 select-none lg:h-[52px] lg:w-[52px]`}
                />
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <ExpandableContent key={card.id}>
                    <div className="my-3 h-[1px] w-full bg-black" />

                    <p className="text-[16px] text-black lg:text-[18px]">
                      {card.answer}
                    </p>
                  </ExpandableContent>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Faq;
