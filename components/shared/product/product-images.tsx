'use client'
import Image from 'next/image';
import React from 'react';

const ProductImages = ({ images }: { images: string[] }) => {
    const [selectedImage, setSelectedImage] = React.useState<number>(0);
    return (
        <div>
            <div className='space-y-4'>
                <Image src={images[selectedImage]} width={600} height={600} alt='product image' className='min-h-[300px] object-cover object-center mt-10'></Image>
                <div className='flex justify-center items-center'>
                    {images.map((img, index) => (
                        <div key={index} className={`border ${selectedImage === index ? 'border-blue-500' : 'border-gray-300'} p-1 cursor-pointer mr-2.5`} onClick={() => setSelectedImage(index)}>
                            <Image src={img} width={100} height={100} alt='thumbnail' className='object-cover object-center'></Image>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductImages;