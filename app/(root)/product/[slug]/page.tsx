// "use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ProductPrice from "@/components/shared/header/product/product-price";
import { getProductBySlug } from "@/lib/actions/products.actions";
import ProductImages from "@/components/shared/header/product/product-images";
import { notFound } from "next/navigation";
import AddToCart from "@/components/shared/header/product/add-to-cart";
import { getMyCart } from "@/lib/actions/cart.actions";
import { Star } from "lucide-react";

const ProductDetailsPage = async (props: {
    params: Promise<{slug: string}>
}) => {
    const {slug} = await props.params;
    const product = await getProductBySlug(slug);
    if(!product) notFound();

    const cart = await getMyCart();
   return (
        <>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Images column */}
                        <div className="space-y-6">
                            <ProductImages images={product.images} />
                        </div>

                        {/* Details column */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500 uppercase tracking-wider">
                                    {product.brand} • {product.category}
                                </p>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {product.name}
                                </h1>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <div className="flex items-center space-x-1">
                                        <span>{product.rating}</span>
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                                    </div>
                                    <span className="mx-1">|</span>
                                    <span>{product.numReviews} reviews</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Price</p>
                                        <ProductPrice value={Number(product.price)} className="text-3xl font-bold text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Status</p>
                                        {product.stock > 0 ? (
                                            <Badge variant="outline" className="text-green-800 border-green-200 bg-green-50">
                                                In Stock
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive" className="text-red-800 border-red-200 bg-red-50">
                                                Out Of Stock
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {product.stock > 0 && (
                                <div className="pt-4 border-t border-gray-100">
                                    <AddToCart
                                        cart={cart}
                                        item={{
                                            productId: product.id,
                                            name: product.name,
                                            slug: product.slug,
                                            price: product.price,
                                            qty: 1,
                                            image: product.images![0],
                                        }}/>
                                </div>
                            )}
                        </div>

                        {/* Description column */}
                        <div className="lg:col-span-2">
                            <Card className="border-none">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-gray-900">
                                        Product Description
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetailsPage;