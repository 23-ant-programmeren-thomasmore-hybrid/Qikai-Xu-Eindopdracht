"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EggFried, Settings } from "lucide-react";
import SlideInNotifications from "./notifcations";

import React, { forwardRef } from 'react';


const SpringModalButton = forwardRef<HTMLDivElement>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div ref={ref} className="mt-auto flex flex-col items-center gap-4 pl-2 pr-0 lg:px-2 sm:py-4">
      <button
        onClick={() => setIsOpen(true)}
        className="group flex h-9 w-9 items-center justify-center rounded-lg  focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
      >
        <Settings className="h-5 w-5 group-hover:animate-spin group-focus:animate-spin" />
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
});

SpringModalButton.displayName = 'SpringModalButton';

const SpringModal = ({ isOpen, setIsOpen }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur w-screen fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-amber-100 to-red-900 text-stone-800 p-6 rounded-lg w-11/12 max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <EggFried className="text-stone-800/10 rotate-12 h-[250px] w-[250px] absolute z-0 -top-20 -left-20" />
            <div className="relative z-10">
              <div className="bg-stone-800 w-16 h-16 mb-2 rounded-full text-3xl text-red-900 grid place-items-center mx-auto">
              
              <SlideInNotifications/>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Oh, hello there!
              </h3>
              <p className="text-center mb-6">
               You may have found an Easter egg, or have you? Either way, glad that you are here. Rest up. Take a seat. Grab a cup of tea. Get cozy.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-stone-800/10 transition-colors text-stone-800 font-semibold w-full py-2 rounded"
                >
                  Nah, back to work..
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-stone-800 hover:opacity-90 transition-opacity text-red-900 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModalButton;