import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Guides from "./Guides";

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div className={cn("mx-auto relative w-full max-w-[1280px] sm:px-4", className)}>
      {/* <Guides /> */}
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
