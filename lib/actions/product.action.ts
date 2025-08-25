 'use server';

import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";



 export async function getLatestProduct() {
    const prisma = new PrismaClient();
    const product = await prisma.product.findMany({
        take: 4,
        orderBy: {
            createdAt: 'desc',
        },
    });
     return convertToPlainObject(product.map((p) => ({
    ...p,
    price: Number(p.price),   // convert Decimal → number
    rating: Number(p.rating), // convert Decimal → number
  })));
}