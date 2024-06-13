import Image from "next/image";
import { Badge } from "./ui/badge";

const UserCard = () => {
  return (
    <div className="sm:w-full bg-white sm:mx-0 sm:mx-4 h-[29rem] shadow transform duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden" >
        <Image className="w-full object-cover" src="/mtn2.jpg" height={100} width={200} alt="mountain landscape" />
      </div>
      <div className="flex justify-center px-5  -mt-12">
        <Image className="h-32 w-32 bg-white p-1.5 rounded-full" height={200} width={200} src="/me2.jpeg" alt="picture of steven keezer" />
      </div>
      <div className="sm:pb-6 mx-auto flex justify-center">
        <div className="text-center px-14">
          <h2 className="text-slate-800 text-3xl font-bold">Steven Keezer</h2>
          <p className="mt-2 text-slate-500 text-xs mt-4 sm:text-sm max-w-sm">Software Engineer, Collegiete athlete, musician, spartan athlete, distance runner, cyclist and electronics nerd. I recently just complete my first 10k Spartan Race.</p>
        </div>
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
    <div className="pb-8 mx-auto px-4 sm:px-0 md:max-w-full lg:pt-16 lg:pb-16 overflow-y-hidden overflow-x-hidden">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex items-center justify-start w-full order-2 sm:order-1">
          <div className="relative w-full">
            <UserCard />
          </div>
        </div>
        <div className="flex flex-col justify-start pt-8 sm:pt-0 xl:pr-0">
          <div className="max-w-xl mb-6">
            <div className="flex text-[#2a7ec8] font-bold tracking-wide uppercase mb-3 sm:mb-6 text-xs sm:text-sm rounded-full bg-teal-accent-400">
              WHO WE ARE
            </div>
            <h2 className="max-w-2xl mb-6 font-sans text-2xl font-semibold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
              Going the extra mile
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              <span className="text-sm sm:text-base text-slate-600">
                My name is Steve. I am a professional software developer currently working for <a className="text-orange-600 font-bold" href="https://www.flapjack.co" target="blank">Flapjack</a>, designing software to build next-level, customizable restaurant menus. I am a former collegiate athlete, and in my free time, I love to run and ride my bike.
              </span>
              <br />
              <br />
              I started this business to help provide for my family while still being able to be home. I spent over seven years working in Silicon Valley at a multitude of start-ups. Over the years, I have built hundreds of websites and have my method down to a science.
              <br />
              <br />
              We take a systematic and artistic approach to building SEO-effective websites that not only look great but also convert. Our philosophy is this: <br /> Let us handle your website so you can focus on what you do best– running your business!            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;