import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

import robot_arm from "@assets/images/robot-arm.svg";
import connecting_team from "@assets/images/connectiong-team.svg";

function CoreValuesSection() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const isCardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const coreItems = [
    {
      id: 1,
      title: "Client Success First",
      desc: "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success",
      image: null,
    },
    {
      id: 2,
      title: "Innovation",
      desc: "We constantly strive to stay ahead of industry trends.",
      image: robot_arm,
    },
    {
      id: 3,
      title: "Collaboration",
      desc: "We belive in the power of teamwork and partnership.",
      image: connecting_team,
    },
    {
      id: 4,
      title: "Transparency",
      desc: "Open and honest communication is key to our success. We keep our informed every step of the way to ensure trust and clarity.",
      image: null,
    },
  ];

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-4 lg:flex-row"
      >
        <div className="text-custom-dark text-[32px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-3 py-1">
            Core Values
          </span>
        </div>

        <p className="max-w-xl text-[16px] leading-[28px] text-black">
          At the heart of everything we do are our core values.
        </p>
      </motion.div>

      <div
        ref={cardRef}
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
      >
        {coreItems.map((card, index) => (
          <motion.div
            key={card.id}
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="border-custom-dark flex w-full flex-col items-center gap-2 rounded-3xl border p-4 text-start shadow-[0px_4px_0px_0px_#000] md:gap-4 lg:flex-row lg:items-start lg:p-6"
          >
            <div className="space-y-3 md:space-y-5">
              <h3 className="text-custom-dark max-w-sm space-y-3 text-[20px] font-medium md:text-[26px] lg:text-[30px]">
                {card.title}
              </h3>

              <div className="h-[1px] w-full bg-black"></div>

              <p className="text-[16px] text-black md:text-[18px]">
                {card.desc}
              </p>
            </div>

            {card.image && (
              <Image
                src={card.image}
                alt="Card Image"
                className="h-auto w-[160px] object-cover md:w-[210px]"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CoreValuesSection;
