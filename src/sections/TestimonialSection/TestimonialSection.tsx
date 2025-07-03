"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

import { testimonials } from "@/constants";
import Image from "next/image";

import testimonial_vector from "@assets/images/testimonial_vector.png";
import testimonial_vector_green from "@assets/images/testimonial_vector_green.png";

function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex w-full flex-col items-center gap-8 text-center lg:items-start lg:gap-16 lg:text-start"
    >
      <div className="flex flex-col items-center justify-start gap-4 lg:flex-row">
        <h3 className="text-custom-dark text-[36px] font-medium md:text-[40px]">
          <span className="bg-custom-green rounded-lg px-2 py-0.5">
            Testimonials
          </span>
        </h3>

        <p className="w-full max-w-full text-[16px] leading-[28px] font-normal text-black lg:max-w-[580px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div
        className="relative w-[90vw] overflow-hidden rounded-3xl bg-[#191A23] p-6 lg:w-full lg:p-10"
        ref={emblaRef}
      >
        <div className="flex">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex min-w-full flex-1 cursor-grab flex-col items-start gap-6 px-2 py-6 text-left text-white select-none lg:px-6 lg:py-10"
            >
              <div className="relative rounded-[32px] border border-lime-400 px-6 py-6 text-lg leading-relaxed">
                <p className="text-[16px] text-white md:text-[18px]">
                  “{item.text}”
                </p>

                <div className="absolute bottom-[-10px] left-8 h-4 w-4 rotate-45 border-b border-l border-lime-400 bg-[#191A23]"></div>
              </div>

              <div className="mt-4">
                <h4 className="text-custom-green text-[18px] font-medium md:text-[20px]">
                  {item.author}
                </h4>

                <p className="text-[16px] text-white md:text-[18px]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8">
          <button
            onClick={scrollPrev}
            className="hover:text-custom-green cursor-pointer text-white transition"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-2">
            {[...Array(testimonials.length)].map((_, index) => (
              <Image
                key={index}
                src={
                  index === selectedIndex
                    ? testimonial_vector_green
                    : testimonial_vector
                }
                alt="Vector"
                className="h-auto w-[12px] object-cover transition-all duration-300 ease-in-out lg:w-[14px]"
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="hover:text-custom-green cursor-pointer text-white transition"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default TestimonialSection;
