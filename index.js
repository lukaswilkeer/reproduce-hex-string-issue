import express from 'express'
import bodyParser from 'body-parser'
import { model } from './model.js'
import './db-connection.js'

const router = express.Router()
const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.get('/item', async (req, res, next) => {
	const items = await model.find({}).catch(err => null)
	const getId = (item) => item._id

	return items !== null
		? res.status(200).send(items.map(getId))
		: res.status(500).send({'message': 'An error has occurred'})
})

router.post('/check/:id', async (req, res, next) => {
	const items = await model.find({}).catch(err => null)
	const getId = (item) => item._id
	const match = (current) => (id) => current === id

	const item = items.filter(match)

	return item.lenght > 0
		? res.status(200).send(item)
		: res.status(500).send({'message': 'Not itens matched'})
})

app.listen(port, () => console.info(`App running on ${port}`))

export default app
