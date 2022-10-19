import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { Product } from "../../interfaces";

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}: Product) {
  const maxRating = 5;
  const minRating = 1;
  const productRating = Math.floor(
    Math.random() * (maxRating - minRating + 1) + minRating
  );
  const hasPrime = Math.random() < 0.5;

  console.log(image);
  return (
    <div className="p-4">
      <p>Category</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex items-center">
        {Array(productRating)
          .fill(1)
          .map((i) => (
            <StarIcon key={i} className="w-5 fill-yellow-400" />
          ))}
      </div>

      <p>{description}</p>
      <div>{price}</div>
      {hasPrime && (
        <>
          <Image
            src="https://links.papareact.com/fdw"
            alt="Prime"
            width={40}
            height={40}
            objectFit="contain"
          />
          <p>Free next-day delivery</p>
        </>
      )}
      <button>Add to basket</button>
    </div>
  );
}
