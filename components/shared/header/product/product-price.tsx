import { cn } from '@/lib/utils';

const ProductPrice = ({
    value,
    className
}: {
    value: number;
    className?: string;
}) => {
    const stringValue = value.toFixed(2);
    const [intValue, floatValue] = stringValue.split('.');

    return (
        <p className={cn('text-2xl font-bold text-gray-900', className)}>
            <span className="text-lg align-super text-green-600">$</span>
            {intValue}
            <span className="text-lg align-super text-green-600">{floatValue}</span>
        </p>
    );
};

export default ProductPrice;