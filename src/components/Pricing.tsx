'use client';

import clsx from "clsx";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const handleClick = () => {
  const params = new URLSearchParams(window.location.search)
  params.set('open', 'dialog')
  window.history.pushState(null, '', `?${params.toString()}`)
}

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 281 40" preserveAspectRatio="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

function CheckIcon({ className, ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" className={clsx("h-6 w-6 flex-none fill-current stroke-current", className)} {...props}>
      <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" strokeWidth={0} />
      <circle cx={12} cy={12} r={8.25} fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Plan({ name, price, description, href, features, featured = false }: { name: string; price: string; description: string; href: string; features: Array<string>; featured?: boolean }) {
  return (
    <section className={clsx("flex flex-col px-6 sm:px-8 sm:border-8 border-sky-50", featured ? "order-first shadow-xl shadow-slate-300 bg-[#2a7ec8] border-white sm:border-8 py-8 lg:order-none" : "py-8 bg-white shadow-sm backdrop-blur")}>
      <h3 className={clsx("mt-5 font-display text-lg ", featured ? "text-white" : "text-slate-900")}>{name}</h3>
      <p className={clsx("mt-2 text-base", featured ? "text-white" : "text-slate-500")}>{description}</p>
      <p className={clsx("order-first font-display text-5xl font-light tracking-tight", featured ? "text-white" : "text-slate-900")}>{price}</p>
      <ul role="list" className={clsx("order-last mt-10 flex flex-col gap-y-3 text-sm", featured ? "text-white" : "text-slate-900")}>
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? "text-white" : "text-slate-400"} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>

      <Button onClick={handleClick} variant={"default"} color="white" className={clsx("mt-8 bg-white hover:bg-slate-100 active:bg-slate-100 text-slate-700 w-full", !featured && "border bg-white border-slate-300/80")} aria-label={`Get started with the ${name} plan for ${price}`}>
        Contact us
      </Button>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-[#f2f8ff] pt-12 sm:pt-16 sm:pb-10">
      <MaxWidthWrapper >

        <div className="flex text-[#2a7ec8] font-bold text-xs text-center sm:text-sm tracking-wide justify-center uppercase mb-3 sm:mb-6  rounded-full bg-teal-accent-400">
          Pricing
        </div>
        <h2 className="text-left text-2xl text-slate-700 text-center font-semibold md:text-4xl">Cost-effective pricing plans</h2>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pb-10 z-40 border-slate-100/5 px-4 pt-6 sm:pt-0">
        <div className="-mx-4 sm:mt-12 grid max-w-2xl grid-cols-1 px-4 sm:px-0 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-4">
          <Plan
            name="E-Commerce"
            price="$8K"
            description="Kickstart your e-commerce businesses with a custom Shopify site."
            href="/register"
            features={[
              "Minimum $8,000 up-front cost",
              "Custom Designed",
              "Custom Shopify Integration",
              "Easy to Edit",
              "Product Management"
            ]}
          />
          <Plan
            featured
            name="Standard"
            price="$150/mo"
            description="Custom 5 page site for your small to medium-sized businesses."
            href="/register"
            features={[
              "Unlimited Edits",
              "Includes Hosting",
              "24/7 Customer Service",
              "Lifetime Updates",
              "Google Analytics"
            ]}
          />
          <Plan
            name="Logo & Graphic Design"
            price="$0"
            description="Professional free logo design with a standard web package."
            href="/register"
            features={[
              "Two Revisions",
              "Professionally Desgined",
              "All File Formats",
              "Ready to Use",
              "Free with Standard Subscription"
            ]}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Pricing;
