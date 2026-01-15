import Joi from "joi";


const registerController = {

    register (req, res, next){

        //CHECKLIST
        //[-] validate the request
        //[+] authorise the request
        //[+] check user is in the database already exists or not
        //[+] prepare model
        //[+] store in database
        //[+] generate jwt token
        //[+] send response

 const registerSchemma = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}")).required(),
    repeat_password:Joi.ref("password")
 });
 
   const{ error } = registerSchemma.validate(req.body)

 if(error){

    return next(error);
 }

        res.json({ msg:"Hello from json" });

    }

}


export default registerController