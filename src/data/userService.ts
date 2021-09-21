import { User } from "@prisma/client"
import prisma from "@src/prisma/client"


// get all user
export const getAllUser = async (): Promise<User[]> => {
    return prisma.user.findMany()
}

//create user
export const createUser = async (name:string,email:string) : Promise<User> => {
    return prisma.user.create({
            data:{
                name,
                email
            }
        })
}