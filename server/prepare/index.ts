import express from 'express';
// import cors from 'cors';

import * as homeController from './homeController';
import * as errorController from './errorController';

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

app.post('/', homeController.indexPostRequest);

app.post('/contact', homeController.contactPostRequest);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

export default app;
