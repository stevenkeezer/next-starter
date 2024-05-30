// import HeaderDecorator from "./HeaderDecorator";

import MaxWidthWrapper from "./MaxWidthWrapper"

// const Testimonials = () => {
//     return (
//         <div className="min-w-screen hidden sm:flex items-center justify-center overflow-y-hidden bg-white border-t border-b border-slate-200 relative">
//                         <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-[45rem] h-64 opacity-20 object-cover object-fill sm:block hidden" />

//         <div className="w-full bg-slate-50/10 absolute px-5 py-16 md:py-1 text-gray-800">
//             <div className="w-full max-w-6xl mx-auto">
//                 <div className="text-center max-w-xl mx-auto">
//                     <h2 className="text-5xl font-bold mb-5 text-gray-600">What people are saying.</h2>
//                     <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
//                    {/* <HeaderDecorator center/> */}
//                 </div>
//                 <div className="-mx-3 md:flex items-start pt-8">
//                     <div className="px-3 md:w-1/3">
//                         <div className="w-full mx-auto rounded-lg bg-white border border-slate-200 p-5 text-gray-800 font-light mb-6">
//                             <div className="w-full flex mb-4 items-center">
//                                 <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-slate-200">
//                                     <img src="https://i.pravatar.cc/100?img=1" alt=""/>
//                                 </div>
//                                 <div className="flex-grow pl-3"> 
//                                     <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                             </div>
//                         </div>
//                         <div className="w-full mx-auto rounded-lg bg-white border border-slate-200 p-5 text-gray-800 font-light mb-6">
//                             <div className="w-full flex mb-4 items-center">
//                                 <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-slate-200">
//                                     <img src="https://i.pravatar.cc/100?img=2" alt=""/>
//                                 </div>
//                                 <div className="flex-grow pl-3">
//                                     <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="px-3 md:w-1/3">
//                         <div className="w-full mx-auto rounded-lg bg-white border border-slate-200 p-5 text-gray-800 font-light mb-6">
//                             <div className="w-full flex mb-4 items-center">
//                                 <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-slate-200">
//                                     <img src="https://i.pravatar.cc/100?img=3" alt=""/>
//                                 </div>
//                                 <div className="flex-grow pl-3">
//                                     <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                             </div>
//                         </div>
//                         <div className="w-full mx-auto rounded-lg bg-white border border-slate-200 p-5 text-gray-800 font-light mb-6">
//                             <div className="w-full flex mb-4 items-center">
//                                 <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-slate-200">
//                                     <img src="https://i.pravatar.cc/100?img=4" alt=""/>
//                                 </div>
//                                 <div className="flex-grow pl-3">
//                                     <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="px-3 md:w-1/3">
//                         <div className="w-full mx-auto rounded-lg bg-white border border-slate-200 p-5 text-gray-800 font-light mb-6">
//                             <div className="w-full flex mb-4 items-center">
//                                 <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-slate-200">
//                                     <img src="https://i.pravatar.cc/100?img=5" alt=""/>
//                                 </div>
//                                 <div className="flex-grow pl-3">
//                                     <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                             </div>
//                         </div>
//                         <div className="w-full mx-auto rounded-lg bg-white border border-slate-200 p-5 text-gray-800 font-light mb-6">
//                             <div className="w-full flex mb-4 items-center">
//                                 <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-slate-200">
//                                     <img src="https://i.pravatar.cc/100?img=6" alt=""/>
//                                 </div>
//                                 <div className="flex-grow pl-3">
//                                     <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }



// export default Testimonials;



const Testimonials = () => {
    return (
        <MaxWidthWrapper className="pb-20 px-4 pt-16">
            <div className="m-auto text-slate-600">
            <div className="flex text-[#2a7ec8] text-xs font-bold sm:text-sm tracking-wide uppercase mb-6 rounded-full bg-teal-accent-400">
        Testimonials
          </div>
                <h2 className="mb-12 text-left text-2xl text-slate-700 font-semibold md:text-4xl">What our customers say</h2>
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div className="row-span-2 p-6 border border-gray-100 bg-orange-50 text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                            <img className="w-44 h-44 mx-auto rounded-full" src="/flapjack.svg" alt="user avatar" height="220" width="220" loading="lazy" />
                            <p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> Lorem ipsum dolort consectetur adipisicingepellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cumoribus. <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">Flapjack</h6>
                                <span className="text-xs text-gray-500">Product owner</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border border-gray-100 bg-[#f1f7fd] sm:flex sm:space-x-8 sm:p-8">
                        <img className="w-20 h-20 mx-auto rounded-full bg-slate-900 p-2" src="/jaco-logo.svg" alt="user avatar" height="220" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-gray-600"> <span className="font-serif">"</span>I had no idea what to expect working with Golden State Web Design. Steve was with me every step of the way and worked with me to get the design perfect for the customers I wanted to attract. All I can say is everybody I have sent this site to says WOW!<span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">Tony Simmons</h6>
                                <span className="text-xs text-gray-500">Jaco Party Rentals CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 bg-purple-50 sm:flex sm:space-x-8 sm:p-8">
                        <img className="w-20 h-20 mx-auto rounded-full object-cover" src="/gremark.jpg" alt="user avatar" height="220" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p className="text-gray-600"> <span className="font-serif">"</span>My website rocks! Seriously, they nailed it. It's slick, easy to use, and totally captures my vibe. Working with Steven was awesome, they just got what I was after and made it happen. Big thumbs up! <span className="font-serif">"</span></p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">Marina Lerke</h6>
                                <span className="text-xs text-gray-500">Gremark Vineyards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Testimonials