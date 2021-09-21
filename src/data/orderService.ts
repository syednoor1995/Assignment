import { Order } from "@prisma/client"
import prisma from "@src/prisma/client"


// get all order
export const getOrderHistory = async (userId:string): Promise<Order[]> => {
    const result = await prisma.order.findMany({
        where:{
            userId:userId
        },
        include: {
            Product: true,
            User:true
           },
    })
   
    return result
}

//complete order
export const completeOrder = async (productId:string, userId:string) : Promise<Order|null> => {
    const product = await prisma.cart.findFirst({ where: { productId:productId,userId:userId } ,include: {
        Product: true,
        User:true
    },})
    if(product){
        //if product is present in cart complete the order
        const price = product.Product?.price || 0
        
        return prisma.order.create({
            data:{
                userId,
                productId,
                totalPrice: Number(price) * product.quantity
            }
        })
    }
    else {
        return null
    }
   
}
