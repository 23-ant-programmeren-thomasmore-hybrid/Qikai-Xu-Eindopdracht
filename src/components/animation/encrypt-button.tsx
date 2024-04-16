"use client"

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

const EncryptedButton = () => {
  return (
      <EncryptButton />
  );
};

const TARGET_TEXT = "Download CV";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef<any | null>(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden h-[40px] gap-x-2 px-4 py-2 transition-colors rounded-lg text-base bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800"
    >
      <Link
        href="/CurriculumVitae.pdf"
        target="_blank"
        rel="noopener noreferrer"
        locale={false}
        download
      >
        <div className="relative flex items-center gap-2">
          <span>{text}</span>
          <Download size={18} />
        </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 scale-125 bg-gradient-to-t from-red-800/0 from-40% via-red-800/100 to-red-800/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
      </Link>
    </motion.button>
  );
};

export default EncryptedButton;