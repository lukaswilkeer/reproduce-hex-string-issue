import mongoose from 'mongoose'
import bluebird from 'bluebird'

// Fixme: Remove mongo prod database before submit a response
const mongoURI = 'mongodb://localhost/blink'

const debugOption = process.env.MODE === 'dev' || false

const options = {
  promiseLibrary: bluebird,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set('useCreateIndex', true)
mongoose.set('debug', debugOption)

mongoose.connect(mongoURI, options)
