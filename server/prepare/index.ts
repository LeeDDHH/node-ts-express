import express from 'express';
// import cors from 'cors';

import { db } from './db/mongodbConnection';

import UserModel, { searchOneQuery } from './models/userSubscriber';

import * as homeController from './controllers/homeController';
import * as errorController from './controllers/errorController';
import * as userController from './controllers/userController';

// DBに接続できたらログを表示する
db.once('open', () => {
  console.log('MongoDB open Success with Mongoose');
});

const getData = async () => {
  try {
    const result = await searchOneQuery('kakaokamo2', 'test').exec();
    console.log('result: ' + result);
  } catch (error) {
    console.log('error: ' + error);
  }
}

getData();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get('/', homeController.indexGetRequest);

// app.use('/item/:itemName', (req, res, next) => {
//   console.log('item passed');
//   next();
// });

app.get('/item/:itemName', homeController.itemGetRequestParm);

app.get('/users',userController.getAllUsers);

app.post('/', homeController.indexPostRequest);

app.post('/userRegister', userController.saveUser);

app.post('/contact', homeController.contactPostRequest);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

export default app;
