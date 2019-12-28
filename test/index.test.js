import app from '../index.js'
import request from 'supertest'
import sinon from 'sinon'
import { expect } from 'chai'


it('should return a list with ids', (done) => {
	request(app)
		.get('/items')
		.send()
		.expect((response) => {
			// doesn't need to parse the body
			expect(response.body).to.be.an('array')
			expect(response.body).to.have.length(3)
		}).end(done)
})

it('should match the param id with model`s id', (done) => {
	const id = '5dbce9c64704602c61a831ac'

	request(app)
		.post(`/check/${id}`)
		.send()
		.expect((response) => {
			expect(response.body.message).to.be.a('boolean')
			expect(response.body.message).to.be.eql(true)
		}).end(done)
})
