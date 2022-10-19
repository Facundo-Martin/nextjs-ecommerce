import React from "react";
import { Product } from "../../interfaces";
import ProductCard from "./ProductCard";

export default function ProductFeed({ products }: { products: Product[] }) {
  return (
    <section>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
