"use strict";

import { Request, Response, ErrorRequestHandler } from 'express';
import StatusCodes from 'http-status-codes';

const logErrors: ErrorRequestHandler =
  (
    error,
    req,
    res,
    next
  ) => {
    console.error(error.stack);
    next(error);
}

const respondNoResourceFound =
  (
    req: Request,
    res: Response
  ) => {
    const errorCode = StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The Page dose not exist!`);
}

const respondInternalError: ErrorRequestHandler =
  (
    error,
    req,
    res,
    next
  ) => {
    const errorCode = StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
}

export { logErrors, respondNoResourceFound, respondInternalError }
