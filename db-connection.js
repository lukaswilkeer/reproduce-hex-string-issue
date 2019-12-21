import mongoose from 'mongoose'
import bluebird from 'bluebird'

// Fixme: Add mongo deploy URI
const mongoURI = process.env.MODE === 'dev'
  ? 'mongodb://localhost/blink'
  : 'mongodb://lukaswilkeer:a9ewiPRYnY4o@ds145356.mlab.com:45356/blink'

const debugOption = process.env.MODE === 'dev'

const options = {
  promiseLibrary: bluebird,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set('useCreateIndex', true)
mongoose.set('debug', debugOption)

mongoose.connect(mongoURI, options)
