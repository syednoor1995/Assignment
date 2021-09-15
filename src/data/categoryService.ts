import { Category } from "@prisma/client"
import prisma from "@src/prisma/client"


// get all book
export const getAllCategory = async (): Promise<Category[]> => {
    return prisma.category.findMany()
}

//create book
export const createCategory = async (name:string) : Promise<Category> => {
    return prisma.category.create({
            data:{
                name
            }
        })
}