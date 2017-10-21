import chai from 'chai';
import chaiHttp from 'chai-http'
import server from '../server'

let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Create Account', () => {
    
    let fields;
    
    beforeEach(() => {
        fields = {
            name: "Robisson",
            lastname: "Oliveira",
            email: 'robisson@robissonoliveira.com.br',
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
                res.body.user.should.have.property('_id');

                done();
            });
    });

});