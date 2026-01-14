
// const express = require("express");

import express from "express";

import { APP_PORT } from "./config";

const app = express();


// const PORT = APP_PORT || 8080;

app.listen(APP_PORT, ()=>{

    console.log(`Server running on ${APP_PORT}`)
} );
