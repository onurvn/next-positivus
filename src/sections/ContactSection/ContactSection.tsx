"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import contact_mask from "@assets/images/contact_mask.png";

function ContactSection() {
  const [selectedOption, setSelectedOption] = useState("say-hi");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center gap-6 overflow-hidden text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center justify-start gap-4 lg:flex-row"
      >
        <h3 className="text-custom-dark text-[36px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-2 py-0.5">
            Contact Us
          </span>
        </h3>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="bg-custom-grey flex w-full items-center justify-between rounded-3xl p-6 text-start lg:justify-between lg:p-14"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full space-y-6 lg:w-1/2"
        >
          <div className="flex items-center gap-6">
            {["say-hi", "get-quote"].map((opt) => (
              <div
                key={opt}
                className="flex cursor-pointer items-center gap-2"
                onClick={() => setSelectedOption(opt)}
              >
                <div
                  className={`rounded-full border border-black bg-white p-1`}
                >
                  <div
                    className={`h-3 w-3 rounded-full lg:h-4 lg:w-4 ${
                      selectedOption === opt
                        ? "bg-custom-green"
                        : "bg-transparent"
                    }`}
                  ></div>
                </div>

                <label className="text-[16px] text-black lg:text-[18px]">
                  {opt === "say-hi" ? "Say Hi" : "Get a Quote"}
                </label>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-start gap-4 lg:gap-6">
            {["Name", "Email*", "Message*"].map((label, i) => (
              <div className="w-full" key={i}>
                <label
                  htmlFor={label.toLowerCase()}
                  className="text-[16px] text-black"
                >
                  {label}
                </label>

                {label === "Message*" ? (
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Message"
                    className="mt-2 w-full rounded-xl border border-black bg-white px-6 py-3 text-[18px] text-[#898989] outline-none placeholder:text-[18px]"
                  />
                ) : (
                  <input
                    type="text"
                    id={label.toLowerCase()}
                    placeholder={label.replace("*", "")}
                    className="mt-2 w-full rounded-xl border border-black bg-white px-4 py-2 text-[18px] text-[#898989] outline-none placeholder:text-[18px] md:px-6 md:py-3"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="text-custom-grey flex w-full cursor-pointer items-center justify-center rounded-lg bg-black px-4 py-3 text-base font-medium lg:text-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="relative hidden h-[550px] w-full lg:block lg:w-1/2">
          <Image
            src={contact_mask}
            alt="Contact illustration"
            className="absolute end-0 top-0 left-72 h-full w-auto object-contain 2xl:left-96"
            width={600}
            height={550}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
