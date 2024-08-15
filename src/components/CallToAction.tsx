"use client";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    const router = useRouter();

    const handleClick = () => {
        router.replace('/?open=dialog', {scroll: false});
    };

    return (
        <div onClick={handleClick} className="hover:underline flex items-center  cursor-pointer">
            <div className="text-4xl px-8 lg:px-0 text-4xl lg:text-5xl flex font-neue-kabel text-slate-900/80 items-center pt-14 pb-10 sm:py-24">
              Let's talk about your project idea! <ArrowRight className="text-blue-400 ml-3 sm:ml-6 sm:h-10 w-auto hidden sm:block" />
            </div>
        </div>
    );
}
