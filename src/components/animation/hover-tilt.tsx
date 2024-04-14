"use client"
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import hero from "/public/images/hero-image.jpg";
import Image from "next/image";

const HoverTilt = () => {
  return (
    <div className="grid w-full place-content-center ">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLInputElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (!ref.current) return [0, 0];

    const rect = ref?.current?.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[235px] md:h-[330px] lg:h-[500px] w-[156.74px] md:w-[236.78px] lg:w-[363.5px] lg:-bottom-2 lg:left-36 rounded-xl bg-gradient-to-bl from-amber-100 to-red-900"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <Image //260px
              className="transition h-[235px] md:h-[355px] lg:h-[545px] w-auto lg:relative rounded-xl grayscale hover:grayscale-0 hover:scale-110 ease-in-out"
              src={hero}
              priority
              alt="Hero Image"
            />
      </div>
    </motion.div>
  );
};

export default HoverTilt;