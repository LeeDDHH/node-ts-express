"use strict"

import { Schema, model, Document } from 'mongoose';

// スキーマの型
interface User extends Document {
  name: string;
  email: string;
}

// スキーマの定義
const subscriberSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true},
});

// スキーマをインスタンス化してモデルとして扱う
// コレクションとスキーマをmodelのコンストラクターに渡す
const UserModel = model('User', subscriberSchema);

export const searchOneQuery = (name: string, email: string) => {
  return UserModel.findOne({ name: name }).where("email", new RegExp(email) );
};

export default UserModel;
