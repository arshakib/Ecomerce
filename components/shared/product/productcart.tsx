/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Price from './price';
import { product } from '@/types';

const ProductCart = ({product}: {product: product}) => {
    return (
        <div>
<Card className="w-full max-w-sm">
  <CardHeader className= 'p-0 items-center'>
    <Link href={`/product/${product?.slug}`}>
    <Image
        src={product?.images[0] || '/images/placeholder.png'}
        alt={product?.name}
        width={300}
        height={300}
        priority={true}
        className='mx-auto'
        />
    </Link>
  </CardHeader>
  <CardContent className='p-4 grid gap-4 '>
    <div className='text-xs'>{product?.brand}</div>
    <Link href={`/product/${product.slug}`}>
    <h2 className='text-sm font-medium'>{product?.name}</h2>
    </Link>
    <div className='flex justify-between gap-4'>
        <p>
            {product?.rating} Stars
        </p>
                 {product?.stock > 0 ? (<span className='text-green-500'><Price value={product?.price} className='font-bold'></Price></span>) : (<span className='text-red-500'>Out of Stock</span>)}
    </div>
    </CardContent>
</Card>
        </div>
    );
};

export default ProductCart;