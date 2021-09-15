import { Order } from "@prisma/client"
import prisma from "@src/prisma/client"


// get all order
export const getOrderHistory = async (): Promise<Order[]> => {
    const result = await prisma.order.findMany({
        include: {
            Product: true,
           },
    })
   
    return result
}

//complete order
export const completeOrder = async (quantity:string  ,productId:string) : Promise<Order|null> => {
    const product = await prisma.cart.findFirst({ where: { productId:productId } ,include: {
        Product: true,
    },})
    if(product){
        //if product is present in cart complete the order
        const price = product.Product?.price || 0
        
        return prisma.order.create({
            data:{
                productId,
                totalPrice: 300
            }
        })
    }
    else {
        return null
    }
   
}
