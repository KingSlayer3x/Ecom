"use client";

import { Button } from "@/components/ui/button";
import { Loader, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";
import { Cart, CartITem } from "@/types";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartITem }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleAddToCart = async () => {
        startTransition(async () => {
            const res = await addItemToCart(item);
            if (!res.success) {
                toast.error(res.message || 'Failed to add item');
                return;
            }
            toast.success(res.message, {
                action: {
                    label: "Go to cart",
                    onClick: () => router.push('/cart')
                }
            });
        });
    };

    const handleRemoveFromCart = async () => {
        startTransition(async () => {
            const res = await removeItemFromCart(item.productId);
            toast(res.message, {
                className: res.success ? 'default' : 'error',
            });
        });
    };

    const existItem = cart && cart.items.find((x) => x.productId === item.productId);

    if (existItem) {
        return (
            <div className="flex items-center gap-3">
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-lg border-gray-300 hover:bg-gray-100"
                    onClick={handleRemoveFromCart}
                    disabled={isPending}
                    aria-label="Remove item from cart"
                >
                    {isPending ? (
                        <Loader className="w-4 h-4 animate-spin text-gray-600" />
                    ) : (
                        <Minus className="h-5 w-5 text-gray-600" />
                    )}
                </Button>
                <span className="w-10 text-center font-semibold text-gray-700">
                    {existItem.qty}
                </span>
                <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-lg border-gray-300 hover:bg-gray-100"
                    onClick={handleAddToCart}
                    disabled={isPending}
                    aria-label="Add item to cart"
                >
                    {isPending ? (
                        <Loader className="w-4 h-4 animate-spin text-gray-600" />
                    ) : (
                        <Plus className="h-5 w-5 text-gray-600" />
                    )}
                </Button>
            </div>
        );
    }

    return (
        <Button
            className="w-full min-h-[44px] bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 p-2 text-sm"
            type="button"
            onClick={handleAddToCart}
            disabled={isPending}
        >
            {isPending ? (
                <span className="animate-spin text-green-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8.727 8.727L15.294 15.294"/>
                    </svg>
                </span>
            ) : (
                <Plus className="h-4 w-4" />
            )}
            <span>Add to cart</span>
        </Button>
    );
};

export default AddToCart;