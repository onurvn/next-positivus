"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "use-count-up";

function ImpactSection() {
  const impactItems = [
    { id: 1, exp: 8, suffix: "+", desc: "Years of Experience" },
    { id: 2, exp: 50, suffix: "+", desc: "Experts" },
    { id: 3, exp: 100, suffix: "+", desc: "Successful Campaigns" },
    { id: 4, exp: 20, suffix: "+", desc: "Industry Awards" },
    { id: 5, exp: 500, suffix: "%", desc: "ROI for our clients" },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="text-custom-dark text-[32px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-3 py-1">
            Our Impact in Numbers
          </span>
        </div>

        <p className="max-w-xl text-[16px] leading-[28px] text-black">
          A snapshot of the milestones and achievements that drive our success
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="grid w-full grid-cols-2 gap-y-4 text-center sm:grid-cols-3 lg:grid-cols-5 lg:text-start">
          {impactItems.map((item, index) => (
            <div
              key={item.id}
              className="flex h-1/2 w-full flex-col items-center rounded-t-2xl border-x border-t border-t-black p-4 lg:items-start"
            >
              <span className="flex items-center gap-0.5 text-[36px] font-bold text-black md:text-[40px]">
                {hasStarted && (
                  <CountUp
                    isCounting
                    end={item.exp}
                    duration={2 + index * 0.25}
                  />
                )}

                <span>{item.suffix}</span>
              </span>

              <span className="text-[16px] text-black md:text-[18px]">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ImpactSection;
