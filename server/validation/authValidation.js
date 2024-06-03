const {z} = require("zod")



const signUpSchema = z.object({
    username:z.string({required_error:"Username is required"}).trim().min(4,{message:"Username must be 4 letters"}).max(10,{message:"Maximum 10 latters are allowed"}),
    email:z.string({required_error:"email is required"}).email().trim().min(4,{message:"email must be 4 letters"}).max(20,{message:"Maximum 20 latters are allowed"}),
    phone:z.string({required_error:"phone no is required"}).trim().min(10,{message:"Phone must be 10 digits"}).max(12,{message:"Maximum 12 latters are allowed"}),
    password:z.string({required_error:"Username is required"}).trim().min(4,{message:"Password must be 4 letters"}).max(15,{message:"Maximum 10 latters are allowed"}),

})

module.exports = signUpSchema;