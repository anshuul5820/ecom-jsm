"use client";

import Image from "next/image";
import type { Product } from "@/db/schema";
import { useCartStore } from "@/store/cart-store";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
