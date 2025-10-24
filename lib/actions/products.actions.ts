'use server';
import { prisma } from "@/db/prisma";

// import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { Product } from "@/types";
// get latest products 

export async function getLatestProducts(){
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is missing — check your .env or rename to .env.local");
      }
      
    // const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc'},
    });
    return convertToPlainObject(data) as unknown as Product[];
}

// get single product by it's slug

export async function getProductBySlug(slug: string){
return await prisma.product.findFirst({
    where: {slug: slug},
})
}