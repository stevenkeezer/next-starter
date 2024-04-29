"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  urls: string[];
  product?: any;
}

const ImageSlider = ({ urls, product }: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      });
    });
  }, [swiper, urls]);

  const activeStyles = "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inactiveStyles = "hidden text-gray-400";

  return (
    <div className="group relative rounded-xl bg-slate-50 transition-color dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50  overflow-hidden">
      <div className="relative">
        <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
            className={cn(activeStyles, "right-3 transition", {
              [inactiveStyles]: slideConfig.isEnd,
              "hover:bg-primary-300 text-primary-800 opacity-100": !slideConfig.isEnd,
            })}
            aria-label="next image"
          >
            <ChevronRight className="h-4 w-4 text-zinc-700" />{" "}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
            className={cn(activeStyles, "left-3 transition", {
              [inactiveStyles]: slideConfig.isBeginning,
              "hover:bg-primary-300 text-primary-800 opacity-100": !slideConfig.isBeginning,
            })}
            aria-label="previous image"
          >
            <ChevronLeft className="h-4 w-4 text-zinc-700" />{" "}
          </button>
        </div>

        <div
          className="h-full w-full"
        >
          {urls.map((url, i) => (
            <div key={i} className="-z-10 relative group h-96 w-full aspect-video transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 ">
              <Image fill loading="eager" className="-z-10 h-full border-white aspect-video rounded-md bg-slate-50 w-full object-cover object-top" src={url} alt="Product image" />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="px-6 pb-6">
        <h3 className="font-medium text-sm text-gray-700 group-hover:text-primary">{product?.name}</h3>
        <p className="mt-1 font-medium text-sm text-gray-900">{product?.price}</p>
      </div> */}
    </div>
  );
};

export default ImageSlider;
