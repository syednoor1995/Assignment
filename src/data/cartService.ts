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
export const addToCart = async (quantity:string  ,productId:string,userId:string) : Promise<Cart> => {

    const product = await prisma.cart.findFirst({ where: { productId:productId,userId:userId } ,include: {
      Product: true,
      User:true
     },})
    console.log(product,userId)
    
    if(product){
        //already in cart then update the quantity with the previous
        const quantityUpdated = product.quantity + parseInt(quantity)
        return prisma.cart.update({
            where: { id:product.id  }
            ,include: {
              Product: true,
              User:true
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
            User:true
           },
            data: {
                quantity:parseInt(quantity),
                Product: {
                  connect: { id: productId},
                },
                User: {
                  connect: { id: userId},
                },
              },
            })
    }
   
    
}

//remove cart
export const removeFromCart = async (quantity:string  ,productId:string,userId:string) : Promise<Cart|null> => {
  const product = await prisma.cart.findFirst({ where: { productId:productId,userId:userId } ,include: {
    Product: true,
    User:true
   },})
  
  
  if(product){
      //already in cart then update the quantity with the previous
      const quantityUpdated = product.quantity - parseInt(quantity)
      if (quantityUpdated === 0 )
      {
        return prisma.cart.delete({
          where: { id:product.id },include: {
            Product: true,
            User:true
           },
          
        })
      }
      return prisma.cart.update({
          where: { id:product.id },include: {
            Product: true,
            User:true
           },
          data: {
            quantity: quantityUpdated,
          },
        })

  }else {
    
    return null
  }
  
 
  
}