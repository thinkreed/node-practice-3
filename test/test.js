var app = require('../app');
var should = require('should');
var request = require('supertest');

describe('test/test.js', function () {

	it('should return correct json format', function (done) {
		this.timeout(150000);
		request(app)
			.get('/')
			.end(function (err, res) {
				res.status.should.equal(200);
				var topics = JSON.parse(res.text);
				topics.should.be.an.instanceOf(Array);

				topics.forEach(function (topic) {
					topic.should.have.keys(
						'title',
						'href',
						'comment1'
					);
				});
				done();
		});
	});
});