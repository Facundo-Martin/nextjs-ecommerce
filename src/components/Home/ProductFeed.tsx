import React from "react";
import { Product } from "../../interfaces";
import ProductCard from "./ProductCard";

export default function ProductFeed({ products }: { products: Product[] }) {
  console.log("INTHEPRODUCTFEED", products);
  return (
    <section className="z-30 mx-auto grid max-w-screen-xl grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
