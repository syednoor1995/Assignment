import { Cart } from "@prisma/client"
import prisma from "@src/prisma/client"


// get all carrt
export const getAllCart = async (): Promise<Cart[]> => {
    const result = await prisma.cart.findMany({
        include: {
            Product: true,
           },
    })
    console.log(result)
    return result
}

//create cart
export const addToCart = async (quantity:string  ,productId:string) : Promise<Cart> => {
    const product = await prisma.cart.findFirst({ where: { productId:productId } ,include: {
      Product: true,
     },})
    
    
    if(product){
        //already in cart then update the quantity with the previous
        const quantityUpdated = product.quantity + parseInt(quantity)
        return prisma.cart.update({
            where: { productId:productId }
            ,include: {
              Product: true,
             },
            data: {
              quantity: quantityUpdated,
            },
          })

    }
    else {
        //not in cart then add the product with the quantity 
        return prisma.cart.create({
          include: {
            Product: true,
           },
            data: {
                quantity:parseInt(quantity),
                Product: {
                  connect: { id: productId},
                },
              },
            })
    }
   
    
}

//remove cart
export const removeFromCart = async (quantity:string  ,productId:string) : Promise<Cart|null> => {
  const product = await prisma.cart.findFirst({ where: { productId:productId } ,include: {
    Product: true,
   },})
  
  
  if(product){
      //already in cart then update the quantity with the previous
      const quantityUpdated = product.quantity - parseInt(quantity)
      if (quantityUpdated === 0 )
      {
        return prisma.cart.delete({
          where: { productId:productId },include: {
            Product: true,
           },
          
        })
      }
      return prisma.cart.update({
          where: { productId:productId },include: {
            Product: true,
           },
          data: {
            quantity: quantityUpdated,
          },
        })

  }else {
    
    return null
  }
  
 
  
}