import Image from "next/image";

const icons = [
  { name: "React", url: "/react.svg", className: "h-28" },
  { name: "Next.js", url: "/nextjs.svg", className: "h-28" },
  { name: "Next.js", url: "/nextjs.svg", className: "h-28" },

]

const icons2 = [
  // { name: "React", url: "/react.svg", className: "h-28" },
  { name: "Next.js", url: "/nextjs.svg", className: "h-24 w-24" },
  { name: "Next.js", url: "/tailwind.svg", className: "h-44 w-auto mt-1" },
  { name: "Next.js", url: "/shopify.svg", className: "h-24 w-24 mt-4" },
]

const Logos = () => {
  return (
    <div className="flex  flex-col h-full rounded w-full bg-white shadow ">
      <div className="bg-blue-400">
      <h2 className="text-base font-bold text-slate-600 px-6 py-4 text-white text-left">Built with fast and modern technology!</h2>

      </div>

      {/* <div className="flex items-center justify-between space-x-8 w-full">

        {icons.map((icon) => (
          <div key={icon.name} className=" h-24 flex items-center justify-center w-24 p-2">
            <Image src={icon.url} alt={icon.name} className={icon.className} height={200} width={200} />
          </div>
        ))}
      </div> */}
      <div className="flex items-center space-x-8 border-t px-6 border-slate-200">

        {icons2.map((icon) => (
          <div key={icon.name} className=" h-24 flex items-center justify-center w-auto p-2">
            <Image src={icon.url} alt={icon.name} className={icon.className} height={200} width={200} />
          </div>
        ))}

      </div >
      <div className="flex items-center justify-between pb-8 sm:pb-2 px-6 py-2 max-w-sm">
        <ul className="text-slate-500 text-xs sm:text-sm space-y-3">
          <li><span className="text-green-500 pr-2">&#10003;</span> Mobile Responsive</li>
          <li><span className="text-green-500 pr-2">&#10003;</span> Fully Optimized</li>
          <li><span className="text-green-500 pr-2">&#10003;</span> Mobile First</li>
        </ul>
        <ul className="text-slate-500 text-xs sm:text-sm space-y-3">
          <li><span className="text-green-500 pr-2">&#10003;</span> Fast Loading</li>
          <li><span className="text-green-500 pr-2">&#10003;</span> User-Friendly</li>
          <li><span className="text-green-500 pr-2">&#10003;</span> Secure</li>
        </ul>
      </div>


    </div>
  );
};

export default Logos;
