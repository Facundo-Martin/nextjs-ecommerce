import React from "react";
import { Product } from "../../interfaces";
import Banner from "./Banner";
import ProductFeed from "./ProductFeed";

export default function RenderHomepage({ products }: { products: Product[] }) {
  return (
    <>
      <Banner />
      <ProductFeed products={products} />
    </>
  );
}
