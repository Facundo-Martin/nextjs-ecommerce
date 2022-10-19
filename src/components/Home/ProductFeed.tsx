import React from "react";

export default function ProductFeed({ products }: { products: string[] }) {
  return (
    <section>
      {products.map((p) => (
        <p>{p.title}</p>
      ))}
    </section>
  );
}
