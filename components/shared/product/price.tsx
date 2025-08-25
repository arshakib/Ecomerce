import { cn } from '@/lib/utils';
import React from 'react';

const Price = ({value, className}: {value: number; className?: string}) => {
    const numValue = Number(value); // convert to number
    const stringValue = numValue.toFixed(2);
    const [intValue, floatValue] = stringValue.split('.')

    return (
        <div>
            <p className={cn('text-2xl', className)}>
                <span className='text-xs align-super'>$</span>
                {intValue}
                <span className='text-xs align-super'>.{floatValue}</span>
            </p>
        </div>
    );
};

export default Price;