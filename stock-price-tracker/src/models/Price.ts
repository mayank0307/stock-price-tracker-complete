// src/models/Price.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IPrice extends Document {
  symbol: string;
  rate: number;
  volume: number;
  cap: number;
  delta: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
  timestamp: string;
}

const priceSchema: Schema = new Schema({
  symbol: { type: String, required: true },
  rate: { type: Number, required: true },
  volume: { type: Number, required: true },
  cap: { type: Number, required: true },
  delta: {
    hour: { type: Number, required: false },
    day: { type: Number, required: false },
    week: { type: Number, required: false },
    month: { type: Number, required: false },
    quarter: { type: Number, required: false },
    year: { type: Number, required: false },
  },
  timestamp: {type: String, required: false}
});

const Price = mongoose.model<IPrice>('Price', priceSchema, 'prices');

export default Price;
