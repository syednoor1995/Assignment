import {   GraphQLInputObjectType,  GraphQLString } from "graphql";


 const CreateUserInput = new GraphQLInputObjectType({
     name : "CreateUserInput",
     description: "Create user input",
     fields: {
         
        
       name:{
        type:GraphQLString,
        description:"name of user"
       },
        email: {
            type:GraphQLString,
            description:"email of the user"
        },
        
     }
 })

 export default CreateUserInput