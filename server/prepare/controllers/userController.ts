"use strict"

import { Request, Response, NextFunction }  from 'express';
import UserModel from '../models/userSubscriber';

const getAllUsers =
  async (
    req: Request,
    res: Response,
  ) => {
    try {
      const result = await UserModel.find({});
      res.send(result);
    } catch (error) {
      console.log('error: ' + error);
      res.send([]);
    }
  }

const saveUser =
  async (
    req: Request,
    res: Response,
  ) => {
    try {
      const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        note: req.body.note ? req.body.note : 'none',
      });
      await newUser.save();
      res.send('user register success');
    } catch (error) {
      res.send(error);
    }
  }

export { getAllUsers, saveUser };
