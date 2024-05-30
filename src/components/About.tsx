// import React from "react";
// import Image from "next/image";

import Image from "next/image";
import { Badge } from "./ui/badge";

// export default function About() {
//   return (
//     <section id="about" className="bg-gray-1 pb-8 pt-16 dark:bg-dark-2 lg:py-6">
//       <div className="">
//         <div className="wow fadeInUp" data-wow-delay=".2s">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">
//               <div className="mb-12 max-w-[490px] lg:mb-0">
//                 <h2 className="text-4xl font-bold leading-tight text-slate-800 sm:leading-[1.2]">Who we are</h2>
//                 <div className="mt-2">
//                     <span className="inline-block w-40 h-1 rounded-full bg-blue-400"></span>
//                     <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-400"></span>
//                     <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-400"></span>
//                   </div>
//                 <p className="mb-10 pt-8 text-base leading-relaxed text-slate-600">
//                   My name is Steve, I am a distance athelete & web developer. 
//                   I currently work at <a className="text-orange-600 font-bold">Flapjack</a> in the bay area, where we are designing software to build next-level restaurant menus.
//                   <br/>
//                   <br/>
//                   I started this business to help provide for my family while still being able to be home and provide a needed service. I spent over 7 years working in Silicon Valley working at a multitude of start ups. Now after being in business professionally for over 7 years I have built hundreds of websites and have my method down to a science.
//                   <br/>
//                   <br/>
//                   We take a systematic and artistic approach to building SEO-effective websites that not only look great but also convert. Our team of experts will work with you to create a website that is built specific to your business needs and goals.

//                 </p>

//                 <a href="javascript:void(0)" className="inline-flex items-center justify-center border border-slate-200 bg-sky-600 px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
//                   Know More
//                 </a>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-1/2">
//               <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
//                 <div className="w-full">
//                   <div className="mb-4 sm:mb-8 w-full px-28">
//                     <Image width={300} height={300} src="/me2.jpeg" alt="about image" className="h-full w-full object-cover object-center" />
//                   </div>
//                 </div>


//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const UserCard = () => {
  return (
    <div className="sm:w-full bg-white sm:mx-0 mx-4 h-[29rem] shadow transform duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden" >
        <Image className="w-full object-cover" src="/mtn2.jpg" height={100} width={200} alt="" />
      </div>
      <div className="flex justify-center px-5  -mt-12">
        <Image className="h-32 w-32 bg-white p-1.5 rounded-full" height={200} width={200} src="/me2.jpeg" alt="" />

      </div>
      <div className="sm:pb-6 mx-auto flex justify-center">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">Steven Keezer</h2>
          {/* <a className="text-gray-400 mt-2 hover:text-blue-500">@stevenkeezer</a> */}
          <p className="mt-2 text-gray-500 text-xs mt-4 sm:text-sm max-w-sm">Software Engineer, Collegiete athlete, musician, spartan athlete, distance runner, cyclist and electronics nerd</p>
        </div>
        {/* <hr className="mt-8" />
          <div className="flex  bg-gray-50 text-slate-800">
            <div className="text-center w-full p-4 hover:bg-gray-100 cursor-pointer">
              <p><span className="font-semibold">8 years </span> Experience</p>
            </div>
            <div className="border"></div>
            <div className="text-center w-full p-4 hover:bg-gray-100 cursor-pointer">
              <p> <span className="font-semibold">10 </span> Following</p>
            </div>

          </div> */}

      </div>
      <div className="flex w-full p-6 flex-wrap gap-2 items-center justify-center max-w-md mx-auto">
        <Badge>Athlete</Badge>
        <Badge>Musician</Badge>
        <Badge>Distance Runner</Badge>
        <Badge>Football Player</Badge>
        <Badge>Cooking</Badge>
        <Badge>Swimming</Badge>
        <Badge>Electronics Hobbiest</Badge>
      </div>
    </div>

  )
}


export const About = () => {
  return (
    <div className="pb-8 mx-auto sm:px-0 md:max-w-full lg:pt-20 lg:pb-20 overflow-x-hidden">
      <div className="grid lg:grid-cols-2 space-x-6 gap-10">
        <div className="flex items-center justify-start w-full order-2 sm:order-1">
          {/* <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="me2.jpeg"
              alt=""
            />
            {/* <img
              className="object-cover w-20 h-20 shadow-lg sm:h-48 xl:h-56 sm:w-48 xl:w-56"
              src="me3.jpg"
              alt=""
            /> */}

          <div className="relative w-full">
            <UserCard />
            {/* <img
              className="object-cover w-full h-full shadow-lg"
              src="me2.jpeg"
              alt=""
            /> */}
            {/* <img
              className="object-cover mb-6 shadow-xl h-28 absolute -right-8 rounded-full  ring-2 ring-white -top-8 sm:h-48 xl:h-40 w-28 sm:w-48 xl:w-40"
              src="me3.jpg"
              alt=""
            /> */}
            {/* <img
              className="object-cover mb-6 shadow-xl h-28 absolute -right-20 rounded-full  ring-2 ring-white top-28 sm:h-48 xl:h-40 w-28 sm:w-48 xl:w-40"
              src="me4.jpg"
              alt=""
            /> */}
          </div>
        </div>
        <div className="flex flex-col justify-center xl:pr-0">
          <div className="max-w-xl mb-6">
            <div className="flex text-[#2a7ec8] font-bold tracking-wide uppercase mb-6 text-xs sm:text-sm rounded-full bg-teal-accent-400">
              WHO WE ARE
            </div>
            <h2 className="max-w-2xl mb-6 font-sans text-2xl font-semibold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
              Your web design specialists
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              My name is Steve. I am a professional software developer currently working for <a className="text-orange-600 font-bold" href="https://www.flapjack.co" target="blank">Flapjack</a>, designing software to build next-level, customizable restaurant menus. I am a former collegiate athlete, and in my free time, I love to run and ride my bike.
              <br />
              <br />
              I started this business to help provide for my family while still being able to be home. I spent over seven years working in Silicon Valley at a multitude of start-ups. Over the years, I have built hundreds of websites and have my method down to a science.
              We take a systematic and artistic approach to building SEO-effective websites that not only look great but also convert.
              <br />
              <br />
               Our team of experts will work with you to create a website that is built specifically for your business needs and goals.
            </p>

          </div>
          {/* <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors bg-blue-400 duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default About;