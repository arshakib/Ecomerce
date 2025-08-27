
import NotFound from '@/app/not-found';
import Price from '@/components/shared/product/price';
import ProductImages from '@/components/shared/product/product-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.action';
import React from 'react';

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) {
        return <NotFound />;
    }
    return (
        <div>
            <section className='my-6'>

                <div className='grid grid-cols-1 md:grid-cols-5'>
                    <div className='col-span-2'>
                        <ProductImages images={product.images} />
                    </div>
                    <div className='col-span-2 p-5'>
                        <div className='flex flex-col gap-5'>
                            <p> {product.brand} {product.category}</p>
                            <h1 className='text-2xl font-bold'>{product.name}</h1>
                            <p>{product.rating} of {product.numReviews} Reviews</p>
                            <div className='flex flex-col sm:flex-row sm:items-center'>
                                <Price value={product.price}  className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'/>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-lg font-bold mb-3'>Description</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0 md:col-span-1 p-5'>
                        <Card>
                            <CardContent className='p-4'>
                                <div className='mb-2 flex justify-between'>
                                    <div>Price</div>
                                    <div><Price value={product.price} /></div>
                                </div>
                                <div className='mb-2 flex justify-between'>
                                    <div>Status</div>
                                    <div>{product.stock > 0 ? <Badge variant='outline'>In Stock</Badge> : <Badge variant='destructive'>Out of Stock</Badge>}</div>
                                </div>
                                {product.stock > 0 && (
                                    <Button className='w-full mt-5'>Add to Cart</Button>
                                )}
                                </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;