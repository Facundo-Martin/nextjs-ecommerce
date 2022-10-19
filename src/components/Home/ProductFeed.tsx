import React from "react";
import { Product } from "../../interfaces";

export default function ProductFeed({ products }: { products: Product[] }) {
  return (
    <section>
      {products.map((p) => (
        <p>{p.title}</p>
      ))}
    </section>
  );
}
