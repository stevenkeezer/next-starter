import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

// export default function LogoCloud() {
//   return (
//     <div className="bg-slate-50 py-24">
//       <MaxWidthWrapper>
//         <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
//           <div className="mx-auto w-full max-w-xl lg:mx-0">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">Companies we work with</h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.</p>
//             <div className="mt-8 flex items-center gap-x-6">
//               <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                 Create account
//               </a>
//               <a href="#" className="text-sm font-semibold text-gray-900">
//                 Contact us <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
//             <Image alt="logo" className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="/nextjs.svg" height={200} width={200} />
//             <Image alt="logo" className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="/paypal.svg" height={200} width={200} />
//             <Image alt="logo" className="col-span-2 max-h-16 w-full object-contain lg:col-span-1" src="/google.svg" height={200} width={200} />
//             <Image alt="logo" className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="/shopify.svg" height={200} width={200} />
//             <Image alt="logo" className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="/shopify.svg" height={200} width={200} />

//             <Image alt="logo" className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="/stripe.svg" height={200} width={200} />
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// }

export default function LogoCloud() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-1 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-slate-400/10 p-8 sm:p-10">
            <img className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width={158} height={48} />
          </div>
          <div className="bg-slate-400/10 p-6 sm:p-10">
            <img className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width={158} height={48} />
          </div>
          <div className="bg-slate-400/10 p-6 sm:p-10">
            <img className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width={158} height={48} />
          </div>
          <div className="bg-slate-400/10 p-6 sm:p-10">
            <img className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg" alt="Laravel" width={158} height={48} />
          </div>
          <div className="bg-slate-400/10 p-6 sm:p-10">
            <img className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width={158} height={48} />
          </div>
          <div className="bg-slate-400/10 p-6 sm:p-10">
            <img className="max-h-12 w-full object-contain" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width={158} height={48} />
          </div>
        </div>
      </div>
    </div>
  );
}
