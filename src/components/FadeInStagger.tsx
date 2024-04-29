"use client";

import { createContext, useContext } from "react";
// import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

export function FadeIn() {


  return (
    <div/>
  );
}

export function FadeInStagger() {
  return (
    <div>
      {/* <motion.div initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: faster ? 0.12 : 0.05 }} {...props} /> */}
    </div>
  );
}
