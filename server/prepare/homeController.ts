"use strict";

import { Request, Response, NextFunction }  from 'express';

const logRequestPaths =
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(`request made to: ${req.url}`);
    console.log(`request made to: ${JSON.stringify(req.params)}`);
    console.log(`request made to: ${req.protocol}`);
    console.log(`request made to: ${JSON.stringify(req.query)}`);
    console.log(`request made to: ${req.rawHeaders}`);
    next();
  }

const indexGetRequest =
  (
    req: Request,
    res: Response
  ) => {
    res.send('Express + TypeScript Server is work!');
  }

const itemGetRequestParm =
  (
    req: Request,
    res: Response
  ) => {
    res.send(req.params.itemName)
  }

const indexPostRequest =
  (
    req: Request,
    res: Response
  ) => {
    console.log(req.body);
    console.log(req.query);
    res.send('POST Successful!')
  }

const contactPostRequest =
  (
    req: Request,
    res: Response
  ) => {
    res.send('contact information submitted success')
  }

export {
  logRequestPaths,
  indexGetRequest,
  itemGetRequestParm,
  indexPostRequest,
  contactPostRequest
}
