import { Product } from "@prisma/client"
import prisma from "@src/prisma/client"


// get all product
export const getAllProduct = async (): Promise<Product[]> => {
  const result=await prisma.product.findMany({
    include: {
      Category: true,
     },
 });
  

  return result
}

//create product
export const createProduct = async (name:string,description:string,categoryId:string,price:number) : Promise<Product> => {
   
    return prisma.product.create({
        data: {
          name,
          description,
          price,
          
          Category: {
            connect: [{ id: categoryId}],
          },
        },
      })
}