'use client';
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <Image
                    src={images[current]}
                    alt="product image"
                    width={1000}
                    height={1000}
                    className="aspect-square w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setCurrent(index)}
                        tabIndex={0}
                        className={cn(
                            "h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
                            current === index
                                ? "border-green-600 shadow-md"
                                : "border-gray-200 hover:border-green-500 hover:shadow-sm"
                        )}
                        aria-label={`View product image ${index + 1}`}
                        aria-pressed={current === index}
                    >
                        <Image
                            src={image}
                            alt={`product thumbnail ${index + 1}`}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;