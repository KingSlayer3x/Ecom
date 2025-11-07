'use client';
import { CartITem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast, useSonner } from "sonner";
// import {SonnerToast}
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({item}: {item: CartITem}) => {
    const router = useRouter();
    const handleAddToCart = async () => {
        const res = await addItemToCart(item);
        if (!res.success){
            toast.error(res.message || 'failed!');
            return;
        }
        toast(`${item.name} added to cart`,{
            action:{ 
                label: "Got to cart",
                onClick: () => router.push('/cart')
            }
            
        });
        
    }
    return (
        <Button className="w-full " type="button" onClick={handleAddToCart}>
            <Plus /> Add to cart
        </Button> );
}
export default AddToCart;