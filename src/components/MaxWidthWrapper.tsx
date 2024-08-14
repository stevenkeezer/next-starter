import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Guides from "./Guides";

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div className={cn("mx-auto relative w-full  lg:max-w-[940px]  xl:max-w-[1140px] 2xl:max-w-[1260px] sm:px-8", className)}>
      {/* <Guides /> */}
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
