import mongoose from 'mongoose';

// ローカルで動かすMongoDBのコネクションに使う定数
const DB_URL = 'mongodb://127.0.0.1:27017/';
const DB_NAME = 'comic_impressions_exchange_db';

const MONGO_URI = `${DB_URL}${DB_NAME}`;

// MongoDBコネクション時に使うオプション
const dbOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

// mongooseのコネクションが成功した場合にログを表示する
mongoose.connection.once('open', (e) => {
  console.log('mongoose connected mongodb');
})

// mongooseのコネクションでエラーが起きた場合
mongoose.connection.on('error', (e) => {
  // タイムアウトの場合、再コネクションする
  if (e.message.code === 'ETIMEDOUT') {
    console.log(e);
    mongoose.connect(MONGO_URI, dbOption)
  }
  console.log(e)
})

// MongoDBのURIをもとにDB接続をする
mongoose.connect(MONGO_URI, dbOption);

// mongooseをpromiseで使うための設定
mongoose.Promise = global.Promise

// DBを変数に代入する
const db = mongoose.connection;

export { db };
