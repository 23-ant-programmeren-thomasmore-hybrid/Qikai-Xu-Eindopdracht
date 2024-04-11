"use client"

import { backOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

//https://svg-path-visualizer.netlify.app/
//https://yqnn.github.io/svg-path-editor/
export default function Blob() {
    const one = (
        "M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,276Z"
      );
      const two = (
        "M408,284Q377,300,368,349Q372,373,364,386Q325,428,292,405Q248,405,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q50,366,41,337Q23,261,44,235Q56,207,72,173Q78,140,123,135Q134,95,169,84Q198,68,225,73Q269,65,300,81Q337,104,345,113Q388,143,386,142.5Q412,177,419,214Q452,242,426,268Z"
      );
      const three = (
        "M106,158Q99,123,103.5,79,108,35,143,10,178,-15,222,10,266,35,293.5,43.5,321,52,370,31.5,419,11,435,49.5,451,88,456,123.5,461,159,442.5,189.5,424,220,433.5,256.5,443,293,413.5,311,384,329,360.5,359,337,389,299,400,261,411,227.5,389.5,194,368,159,352,124,336,135,290.5,146,245,129.5,219,113,193,106,157Z"
      );
      const four = (
        <>
          <p>
            <a></a>
          </p>
        </>
      );
      const five = <a></a>;
    
      const items = [one, two, three];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [items.length]);

  return (
    <div
      className="example"
      style={{
        border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <motion.svg
        style={{ width: "80%", height: "80%" }}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >

        
        <motion.path
          initial={{ pathLength: 0}}
          animate={{ pathLength: 1}}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
          strokeWidth={5}
          strokeDasharray="0 1"
          fill="#fef3c7"
          d={items[currentIndex]}
          
        />
      </motion.svg>
      
    </div>
  );
}