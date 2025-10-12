import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className}: {value: number; className?: string}) => {
    // make sure it's two decimal places
    const stringValue = value.toFixed(2);
    // get intger/float
    const [intValue, floatValue] = stringValue.split('.')
    return ( <p className={cn('text-2xl', className) }>
        <span className="text-xs align-super">$</span>
        {intValue}
        <span className="text-xs align-super">{floatValue}</span>

    </p> );

}
 
export default ProductPrice;