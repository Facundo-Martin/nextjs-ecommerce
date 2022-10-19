import React from "react";
import Banner from "./Banner";
import ProductFeed from "./ProductFeed";

export default function RenderHomepage({ products }: { products: string[] }) {
  return (
    <>
      <Banner />
      <ProductFeed products={products} />
    </>
  );
}
