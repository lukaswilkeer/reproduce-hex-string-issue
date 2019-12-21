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

const clockAnalyticsSchema = new mongoose.Schema({
  data: [{
    year: {type: Number, required: true, unique: true},
    months: {type: Array, required: true, default: []},
    clocks: {type: Array, required: true, default: []}
  }]
}, {collection: 'clockAnalytics'})

const userClocksTypeSchema = new mongoose.Schema({
  clock: {type: mongoose.Schema.ObjectId, required: true},
  itens: {type: Number, required: true, default: 0}
}, {_id: false})

const userAanalyticsSchema = new mongoose.Schema({
  users: [{
    user: {type: mongoose.Schema.ObjectId, required: true},
    clocks: [userClocksTypeSchema]
  }]
}, {collection: 'userAnalytics'})

/*
    Validations:
        analyticsSchema.clocks
        {
          year: {},
          months: [month, itens, income],
          clocks: [clock, itens, income]
          user: {user: [clock, quant]}
        }
*/

export const clockAnalyticsModel = mongoose.model('ClockAnalyticSchema', clockAnalyticsSchema)

export const userAnalyticsModel = mongoose.model('UserAnalyticsSchema', userAanalyticsSchema )

export const model = mongoose.model('ClockSchema', clockSchema)
