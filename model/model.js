import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const clockSchema = new mongoose.Schema({
  name: {type: String, required: true}
  , brand: {type: String, required: true}
  , type: {type: String, required: true}
  , code: { type: Number, required: true, unique: true, dropDups: true}
  , category: { type: Array }
  , price: { type: Number, required: true }
  , itens: { type: Number, required: true, default: 0 }
  , images: { type: Array, required: true, default: []}
}, {
  strict: false
  , collection: 'clocks'
})

export const model = mongoose.model('ClockSchema', clockSchema)
