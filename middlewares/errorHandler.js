import Joi from "joi";
import { DEBUG_MODE } from "../config/index.js";

const errorHandler = (err, req, res, next) => {

  let statusCode = 500;

  let data = {

    message: "Internal server error",
    
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };

  // Joi validation error
  if (err instanceof Joi.ValidationError) {

    statusCode = 422;

    data = {
      message: err.message,
    };

  }

  return res.status(statusCode).json(data);
};

export default errorHandler;
