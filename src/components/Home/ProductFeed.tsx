import Image from "next/image";
import React from "react";
import { Product } from "../../interfaces";
import ProductCard from "./ProductCard";

export default function ProductFeed({ products }: { products: Product[] }) {
  console.log("INTHEPRODUCTFEED", products);
  return (
    <section className="z-30 mx-auto grid max-w-screen-xl grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="md:col-span-full">
        <Image
          src="https://links.papareact.com/dyz"
          width={1500}
          height={300}
          objectFit="contain"
        />
      </div>
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
