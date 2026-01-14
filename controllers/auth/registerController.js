
const registerController = {

    register (req, res, next){


        //CHECKLIST
        //[-] validate the request
        //[+] authorise the request
        //[+] check user is in the database already
        //[+] prepare model
        //[+] store in database
        //[+] generate jwt token
        //[+] send response

        res.json({ msg:"Hello from json" });

    }

}


export default registerController