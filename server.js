import express from "express";
import cors from "cors";

import { APP_PORT } from "./config/index.js";

import routes from "./routes/index.js";

const app = express();

app.use(cors());

app.use("/api" , routes)

app.listen(APP_PORT, ()=>{

    console.log(`Server running on ${APP_PORT}`)
} );
