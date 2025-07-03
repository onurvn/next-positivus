import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import makeThingIllustration from "@assets/images/makeThingIllustration.png";

function LetsMakeThingsHappen() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-custom-grey mt-0 flex h-auto w-full items-center justify-center rounded-3xl p-6 text-start md:justify-between lg:mt-4 lg:h-[347px] lg:p-8"
    >
      <div className="space-y-5 lg:space-y-6">
        <h3 className="text-[26px] font-medium text-black lg:text-[30px]">
          Let’s make things happen
        </h3>

        <p className="max-w-[500px] text-[16px] text-black lg:text-[18px]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <button className="text-custom-grey hover:border-custom-dark hover:text-custom-dark w-full cursor-pointer rounded-lg bg-black px-4 py-3 text-lg font-medium transition-all duration-300 ease-in-out hover:border hover:bg-white md:w-fit">
          Get your free proposal
        </button>
      </div>

      <div className="hidden h-auto md:block">
        <Image
          src={makeThingIllustration}
          alt="Illustration"
          className="h-auto w-full object-cover lg:h-[395px]"
        />
      </div>
    </motion.div>
  );
}

export default LetsMakeThingsHappen;
