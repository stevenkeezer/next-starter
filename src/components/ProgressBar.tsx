"use client";

import * as React from "react";
import { Progress } from "./ui/progress";

export default function ProgressBar() {
  // const initialProgress = typeof window !== "undefined" ? Math.min(100, Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)) : 0;
  const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   let frameId: number | null = null;
  //   const onScroll = () => {
  //     if (typeof window !== "undefined") {
  //       const scrollProgress = Math.min(100, Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100));
  //       if (frameId) {
  //         cancelAnimationFrame(frameId);
  //       }
  //       frameId = requestAnimationFrame(() => setProgress(scrollProgress));
  //     }
  //   };

  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", onScroll);
  //   }
  //   return () => {
  //     if (typeof window !== "undefined") {
  //       window.removeEventListener("scroll", onScroll);
  //       if (frameId) {
  //         cancelAnimationFrame(frameId);
  //       }
  //     }
  //   };
  // }, []);

  return <Progress value={progress} className="w-full hidden sm:block rounded h-1" />;
}
