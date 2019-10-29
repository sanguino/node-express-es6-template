import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../lib/app';

chai.use(chaiHttp);
chai.should();

describe('Things', () => {
  describe('GET /', () => {
    it('should get all things record', done => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should get a single thing record', done => {
      const id = 1;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should get a 400 on string id', done => {
      const id = 'a';
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should not get a thing student record', done => {
      const id = 5;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('POST /', () => {
    it('should post record', done => {
      const id = 3;
      chai
        .request(app)
        .post(`/${id}`)
        .send({ data: 'thing 3' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should get a 400 on string id', done => {
      const id = 'a';
      chai
        .request(app)
        .post(`/${id}`)
        .send({ data: 'thing a' })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should get a 400 without data in body', done => {
      const id = 4;
      chai
        .request(app)
        .post(`/${id}`)
        .send({ bad_name: 'thing a' })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
