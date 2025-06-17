"use client";

import React, { useEffect, useState } from "react";
import { getProducts } from "../service/api";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getProducts()
      .then((data) => {
        setProducts(data.products);
      })
      .catch(console.error);
  }, []);

  if (!isClient) {
    // Return a skeleton or loading state that matches the server render
    return (
      <div>
        <h1>This is the product page</h1>
        <div className="w-full bg-red-300 grid grid-cols-4 gap-4 p-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border p-2 w-full aspect-square bg-gray-200 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>This is the product page</h1>
      <div className="w-full bg-red-300 grid grid-cols-4 gap-4 p-4">
        {products.map((item, itemIndex) =>
          item.images.slice(0, 4).map((img, imgIndex) => (
            <div
              key={`${itemIndex}-${imgIndex}`}
              className="border p-2 w-full aspect-square cursor-pointer"
            >
              <Link href={`/products/${item.id}`}>
                <Image
                  src={img.imageUrl}
                  alt={`product-${item.name || itemIndex}-${imgIndex}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority={imgIndex < 4}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;