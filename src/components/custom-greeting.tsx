"use client";

import React, { useState, useEffect } from "react";
// PUT ALL LANGUAGES IN THE CUSTOM GREETINGS SO THAT NO MATTER WHAT LANGUAGES THE LOCALE IS,
// THE GREETING WILL BE RANDOM AND IN ALL LANGUAGES.

export default function CustomGreeting() {
  const one = (
    <>
      <span className="flex flex-row items-end text-center xl:text-start">
        <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">Hello, my name is Qikai</h1>
      </span>
    </>
  );
  const two = (
    <>
      <span className="flex flex-row items-center text-center xl:text-start">
        <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold">Hoi, ik ben Qikai</h1>
      </span>
    </>
  );
  const three = (
    <>
      <span className="flex flex-row items-end text-center xl:text-start">
        <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">嗨, 我叫Qikai</h1>
      </span>
    </>
  );
  const four = (
    <>
    <span className="flex flex-row items-end text-center xl:text-start">
      <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">Hi, this is Qikai</h1>
    </span>
  </>
  );
  const five = (
    <>
    <span className="flex flex-row items-end text-center xl:text-start">
      <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">Hallo, mijn naam is Qikai</h1>
    </span>
  </>
  );
  const six = (
    <>
    <span className="flex flex-row items-end text-center xl:text-start">
      <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">你好， 我的名字是Qikai</h1>
    </span>
  </>
  );
  const seven = (
    <>
    <span className="flex flex-row items-end text-center xl:text-start">
      <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">Greetings, you may call me Qikai</h1>
    </span>
  </>
  );

  const items = [one, two, three, four, five, six, seven];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);
//{items[currentIndex]}
  return <div className="flex items-center h-[120px] justify-center lg:justify-normal">{items[currentIndex]}</div>;
}
