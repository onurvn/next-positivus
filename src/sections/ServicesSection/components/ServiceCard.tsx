"use client";

import { ArrowUpRight } from "lucide-react";

import Image, { StaticImageData } from "next/image";

export interface ServiceCardProps {
  id: number;
  bg: string;
  color: string;
  btn_bg: string;
  btn_color: string;
  link_color: string;
  text: string;
  image: StaticImageData;
}

const bgClasses: Record<string, string> = {
  grey: "bg-custom-grey",
  green: "bg-custom-green",
  black: "bg-custom-dark",
};

const colorClasses: Record<string, string> = {
  white: "bg-custom-white",
  green: "bg-custom-green",
  dark: "bg-custom-dark",
};

const btnBgClasses: Record<string, string> = {
  white: "bg-custom-white",
  green: "bg-custom-green",
  dark: "bg-custom-dark",
};

const btnColorClasses: Record<string, string> = {
  white: "text-custom-white",
  green: "text-custom-green",
  dark: "text-custom-dark",
};

const linkColorClasses: Record<string, string> = {
  white: "text-custom-white",
  dark: "text-custom-dark",
};

function ServiceCard({
  bg,
  color,
  btn_bg,
  btn_color,
  link_color,
  text,
  image,
}: Omit<ServiceCardProps, "id">) {
  return (
    <div
      className={`border-custom-dark group cursor-pointer ${bgClasses[bg]} flex w-full items-end justify-between gap-4 rounded-3xl border p-4 text-start shadow-[0px_4px_0px_0px_#000] md:items-center lg:p-6`}
    >
      <div className="flex flex-col items-start gap-8">
        <h3 className="text-custom-dark max-w-sm space-y-3 text-[20px] font-medium md:text-[26px] lg:text-[30px]">
          <span className={`${colorClasses[color]} rounded-md px-1.5 py-0.5`}>
            {text}
          </span>
        </h3>

        <button className="flex items-center gap-4">
          <span
            className={`${btnColorClasses[btn_color]} ${btnBgClasses[btn_bg]} cursor-pointer rounded-full p-2`}
          >
            <ArrowUpRight className="h-6 w-6 transition-all duration-300 ease-in group-hover:rotate-45 md:h-10 md:w-10" />
          </span>

          <span
            className={`hidden cursor-pointer text-[20px] leading-[28px] ${linkColorClasses[link_color]} hover:underline lg:block`}
          >
            Learn more
          </span>
        </button>
      </div>

      <Image
        src={image}
        alt="Illustration"
        className="h-[150px] w-[160px] object-cover md:h-[210px] md:w-[210px]"
      />
    </div>
  );
}

export default ServiceCard;
