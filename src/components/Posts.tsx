"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { Product } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ProductListing from "./ProductListing";
import { Card } from "./ui/card";
import Image from "next/image";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

const Posts = (props: ProductReelProps) => {
  const { title, subtitle, href, query } = props;

  const { data: queryResults, isLoading } = trpc.getInfinitePosts.useInfiniteQuery(
    {
      limit: query.limit ?? FALLBACK_LIMIT,
      query,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  const products = queryResults?.pages.flatMap((page) => page.items);

  let map: (any | null)[] = [];
  if (products && products.length) {
    map = products;
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <section className="pb-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl lg:max-w-4xl lg:px-0">
          {/* {title ? <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1> : null} */}
          {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>

        {href ? (
          <Link href={href} className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {map.map((product, i) => {
          // Find the first 'upload' type block
          const firstImageBlock = product?.content?.find((block: { type: string }) => block.type === "upload");

          // If an 'upload' type block is found, get the image URL
          const imageUrl = firstImageBlock ? firstImageBlock.value.url : null;

          return (
            <Link key={product?.id} href={`/blog/${product?.id}`}>
              <Card className="p-0 border-none">
                {console.log(product, "product")}
                {imageUrl && (
                  <div className="w-full h-56">
                    <Image src={imageUrl} height={300} width={300} alt={product?.title} className="object-cover object-center shadow border rounded-lg w-full h-full" />
                  </div>
                )}
                <div>
                  <div className="pt-3 font-medium text-slate-900">{product?.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{product?.description}</div>
                </div>
              </Card>
            </Link>
          );
        })}

        {/* <div className="mt-6 flex items-center w-full justify-center">
          <div className="w-full">
            {map.map((product, i) => (
              <div key={product?.id}>{<BlogContent content={product?.content} />}</div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Posts;
