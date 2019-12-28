import express from 'express'
import bodyParser from 'body-parser'
import { model } from './model/model.js'
import './db-connection.js'

const router = express.Router()
const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.get('/items', async (req, res, next) => {
	const items = await model.find({}).catch(err => null)
	const getId = (item) => item._id

	return items !== null
		? res.status(200).send(items.map(getId))
		: res.status(500).send({'message': 'An error has occurred'})
})

router.post('/check/:id', async (req, res, next) => {
	const items = await model.find({}).catch(err => null)
	
	const filterItems = (item) => item.id == req.params.id
	const item = items.filter(filterItems)

	return item.length > 0
		? res.status(200).send({'message': true})
		: res.status(500).send({'message': 'No items matched'})
})

app.use(router)
app.listen(port, () => console.info(`App running on ${port}`))

export default app
