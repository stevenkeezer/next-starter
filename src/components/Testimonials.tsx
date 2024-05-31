import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Testimonials = () => {
    return (
        <MaxWidthWrapper className="pb-20 px-4 pt-16">
            <div className="m-auto text-slate-600">
                <div className="flex text-[#2a7ec8] text-xs font-bold sm:text-sm tracking-wide uppercase mb-3 sm:mb-6 rounded-full bg-teal-accent-400">
                    Testimonials
                </div>
                <h2 className="mb-12 text-left text-2xl text-slate-700 font-semibold md:text-4xl">What our customers say</h2>
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div className="row-span-2 p-6 border border-slate-100 bg-orange-50 text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <Image className="w-44 h-44 mx-auto rounded-full" src="/flapjack.svg" alt="user avatar" height={220} width={220} loading="lazy" />
                            <p className="text-slate-600 md:text-xl"> <span className="font-serif">"</span> Lorem ipsum dolort consectetur adipisicingepellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cumoribus. <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">Flapjack</h6>
                                <span className="text-xs text-slate-500">Product owner</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border border-slate-100 bg-[#f1f7fd] sm:flex sm:space-x-8 sm:p-8">
                        <Image className="w-20 h-20 mx-auto rounded-full bg-slate-900 p-2" src="/jaco-logo.svg" alt="user avatar" height={80} width={80} loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-slate-600"> <span className="font-serif">"</span>I had no idea what to expect working with Golden State Web Design. Steve was with me every step of the way and worked with me to get the design perfect for the customers I wanted to attract. All I can say is everybody I have sent this site to says WOW!<span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">Tony Simmons</h6>
                                <span className="text-xs text-slate-500">Jaco Party Rentals CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border border-slate-100 bg-[#f9eee9] sm:flex sm:space-x-8 sm:p-8">
                        <Image className="w-20 h-20 mx-auto rounded-full object-cover" src="/gremark.jpg" alt="user avatar" height={80} width={80} loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-slate-600"> <span className="font-serif">"</span>My website rocks! Seriously, they nailed it. It's slick, easy to use, and totally captures my vibe. Working with Steven was awesome, they just got what I was after and made it happen. Big thumbs up! <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">Marina Lerke</h6>
                                <span className="text-xs text-slate-500">Gremark Vineyards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Testimonials