import chai from 'chai';
import chaiHttp from 'chai-http'
import server from '../server'

let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('User Account', () => {
    
    let fields;
    
    beforeEach(() => {
        fields = {
            name: "teste",
            lastname: "teste",
            email: 'teste@teste.com',
            password: 'mypassword'
        }
    });

    it('/POST it should to create a account user', (done) => {
        
        chai
            .request(server)
            .post('/api/v1/createAccount')
            .send(fields)
            .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(true);
                res.body.should.have.property('message').eql("User account created with successfull!");

                done();
            });
    });
    
    it('/POST testing user that already exists, do not create', (done) => {
        
        chai
            .request(server)
            .post('/api/v1/createAccount')
            .send(fields)
            .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(false);
                res.body.should.have.property('message').eql("User already exists");

                done();
            });
    });

});

describe('User login', () => {
    
    let fields;
    
    beforeEach(() => {
        fields = {
            email: 'teste@teste.com',
            password: 'mypassword'
        }
    });

    it('/POST it should to login user and return token user', (done) => {
        
        chai
            .request(server)
            .post('/api/v1/login')
            .send(fields)
            .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(true);
                res.body.should.have.property('message').eql("Login succesfull! Redirecting...");
                res.body.should.have.property('token').be.a('string');

                done();
            });
    });
    
});