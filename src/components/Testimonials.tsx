import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Testimonials = () => {
    return (
        <MaxWidthWrapper className="py-12 sm:py-28 px-8 md:px-12 lg:px-4 xl:px-6 ">
            <div className="m-auto text-slate-600">
                {/* <div className="flex font-neue-kabel text-[#2a7ec8] text-xs font-bold sm:text-sm tracking-wide uppercase mb-3 sm:mb-6 rounded-full bg-teal-accent-400">
                    Testimonials
                </div> */}
                <h2 className="mb-8 sm:mb-16 text-left text-3xl text-[#3e4246] font-normal font-neue-kabel md:text-5xl">What our customers say</h2>
                <div className="grid gap-8 md:grid-rows-2 font-spartan lg:grid-cols-2">
                    <div className="row-span-2 p-6  bg-orange-50  text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center items-center space-y-4">
                            <Image className="w-20 h-20 sm:w-40 sm:h-40 mx-auto rounded-full bg-white p-1.5 /80 sm:px-6" src="/flapjack.svg" alt="user avatar" height={220} width={220} loading="lazy" />
                            <p className="text-slate-600 md:text-lg"> <span className="font-serif">"</span>Steve is a team player who just simply delivers results. On numerous occasions, he went above and beyond to make sure that our vision was executed exactly as we wanted—to the pixel. As a client of Golden State Web Design, you're not just a customer but valued partner, and that's not something you'll find from any other agency.<span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-normal leading-none">Flapjack</h6>
                                <span className="text-xs text-slate-500">Product owner</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6  bg-[#f1f7fd] sm:flex sm:space-x-8 sm:p-8 ">
                        <Image className="w-20 h-20 mx-auto rounded-full bg-slate-900 p-2" src="/jaco-logo.svg" alt="user avatar" height={80} width={80} loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-slate-600"> <span className="font-serif">"</span>I had no idea what to expect working with Golden State Web Design. Steve was with me every step of the way and worked with me to get the design perfect for the customers I wanted to attract. All I can say is everybody I have sent this site to says WOW!<span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-normal leading-none">Tony Simmons</h6>
                                <span className="text-xs text-slate-500">Jaco Party Rentals CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6  bg-[#f9eee9] sm:flex sm:space-x-8 sm:p-8 ">
                        <Image className="w-20 h-20 mx-auto rounded-full object-cover" src="/gremark.jpg" alt="user avatar" height={80} width={80} loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-slate-600"> <span className="font-serif">"</span>My website rocks! Seriously, they nailed it. It's slick, easy to use, and totally captures my vibe. Working with these guys was awesome, they just got what I was after and made it happen. Big thumbs up! <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-normal leading-none">Marina Lerke</h6>
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