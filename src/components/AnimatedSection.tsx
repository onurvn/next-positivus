"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  yOffset = 40,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
