"use client";

import { FaArrowUp } from "react-icons/fa6";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopPage() {
  return (
    <button className="absolute bottom-0 p-10" onClick={scrollToTop}>
      <FaArrowUp/>
    </button>
  );
}
