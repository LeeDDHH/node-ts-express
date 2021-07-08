// import express from 'express';

import app from './prepare/index';

// const app = express();
const PORT = process.env.PORT || 8080;

app.set('port', PORT);

app.listen(app.get('port'),() => {
  console.log(`[server]: Server is running at https://localhost:${app.get('port')}`);
});
