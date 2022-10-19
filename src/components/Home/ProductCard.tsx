import React from "react";
import { Product } from "../../interfaces";

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) {
  return (
    <div className="p-4">
      <p>Category</p>
    </div>
  );
}
