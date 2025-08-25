/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ProductCart from './productcart';
import { product } from '@/types';
const ProductList = ({data, title}: {data: product[]; title?: string}) => {
    const limit = data.slice(0, 4)
    return (
       <>
       <div className='my-10'>
              <h2 className='text-2xl font-bold mb-4'>{title}</h2>
                {data.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {limit.map((product: product) => {
                    //   console.log(product);
                      return (
                       <ProductCart key={product.slug} product={product} />
                      );
                    })}
                     </div>
                ): (
                    <div>
                        <p>No products found.</p>
                    </div>
                )}
       </div>
       </>
    );
};

export default ProductList;