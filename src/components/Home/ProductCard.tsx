import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { Product } from "../../interfaces";

export default function ProductCard({ product }: { product: Product }) {
  const maxRating = 5;
  const minRating = 1;
  const productRating = Math.floor(
    Math.random() * (maxRating - minRating + 1) + minRating
  );
  const hasPrime = Math.random() < 0.5;
  return (
    <div className="z-30 m-5 flex flex-col bg-white py-4 px-5">
      <p className="ml-2 mb-2 text-right text-xs italic text-gray-400">
        {product.category}
      </p>
      <Image
        src={product.image}
        height={200}
        width={200}
        objectFit="contain"
        alt={product.title}
      />
      <h4 className="my-3 line-clamp-2">{product.title}</h4>
      <div className="flex items-center">
        {Array(productRating)
          .fill(1)
          .map((_, i) => (
            <StarIcon key={i} className="w-5 fill-yellow-400" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{product.description}</p>
      <div className="">${product.price}</div>
      {hasPrime && (
        <div className="flex items-center space-x-2">
          <Image
            src="https://links.papareact.com/fdw"
            alt="Prime"
            width={70}
            height={70}
            objectFit="contain"
          />
          <p className="font- text-sm text-gray-500">Free delivery today</p>
        </div>
      )}
      <button className="button mt-4 md:mt-auto">Add to Cart</button>
    </div>
  );
}
