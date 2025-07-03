import { logoScrollItems } from "../constants/index";
import Marquee from "react-fast-marquee";
import Image from "next/image";

type LogoMarqueeProps = {
  direction: "left" | "right" | "up" | "down" | undefined;
};

const LogoMarquee = ({ direction }: LogoMarqueeProps) => (
  <Marquee
    pauseOnHover
    direction={direction}
    speed={30}
    gradient={false}
    className="w-full"
  >
    <div className="flex items-center gap-4 lg:gap-10">
      {logoScrollItems.map((item) => (
        <Image
          key={item.id}
          src={item.logo}
          alt={item.name}
          className="h-10 w-auto grayscale transition duration-300 hover:grayscale-0 md:h-12"
        />
      ))}
    </div>
  </Marquee>
);

export default LogoMarquee;
