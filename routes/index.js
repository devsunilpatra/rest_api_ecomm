import express from "express"

const router = express.Router();

import registerController from "../controllers/auth/registerController.js";


router.get("/register", registerController.register);


export default router;