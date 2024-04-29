import Image from "next/image";

const icons = [
  { name: "React", url: "/react.svg", className: "h-16" },
  { name: "Next.js", url: "/nextjs.svg", className: "h-16" },
  { name: "Shopify", url: "/shopify.svg", className: "mt-1 h-16 mt-3" },
]

const icons2 = [
  { name: "React", url: "/react.svg", className: "h-16" },
  { name: "Next.js", url: "/nextjs.svg", className: "h-16" },
  { name: "Shopify", url: "/shopify.svg", className: "mt-1 h-16 mt-3" },
]

const Logos = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center space-x-8">

        {icons.map((icon) => (
          <div key={icon.name} className=" h-20 flex items-center justify-center w-20 p-2">
            <Image src={icon.url} alt={icon.name} className={icon.className} height={200} width={200} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-8">

        {icons2.map((icon) => (
          <div key={icon.name} className=" h-20 flex items-center justify-center w-20 p-2">
            <Image src={icon.url} alt={icon.name} className={icon.className} height={200} width={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
