//Our app, express
const app = require('../server.js');
//supertest library for testing API
const request = require('supertest');

const chai = require('chai');
const should = chai.should();

//body-parser for parsing req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ 
  extended: false
}));

//describe() declares a test suite
describe('GET routes', () => {

  describe('index', () => {

    it('should be status 200', (done) => {
      request(app)
      .get('/')
      .end((err, res) => {
        res.status.should.equal(200);
        done(err);
      });
    });

    it('should be status 200 and content: Hello', (done) => {
      request(app)
      .get('/')
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.equal("Hello");
        done(err);
      });
    });

  })

  // describe('about', () => {
  //   it('should be 200', (done) => {
  //     request(app)
  //       .get('/about')
  //       .expect(200,done);
  //   });
  // });

});

describe('POST routes', () => {

  it('should post name', (done) => {
    request(app)
      .post('/post')
      .type('form')
      .send({ name: "Jesper"})
      .end((err, res) => {
        res.body.should.be.json;
        res.body.should.equal('Jesper');
        res.status.should.equal(201);
        done(err);
    });
  });
});




