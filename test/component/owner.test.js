
process.env.NODE_ENV = 'test';
import { expect } from 'chai';
const server = require('../../server/server');
const request = require('supertest');

describe('Owner tests', () => {
    let owner = {
        name: "amol owner",
        address: "12 osier way",
        email: "gaikwadamolraj@gmail.com"
    };

    let ownerId = 1;
    describe('/POST owner', () => {
        it('it should throw error of mandatory field', (done) => {
            request(server)
                .post('/api/v1/owners')
                .send(owner)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(422);
                    expect(res.body.errors).to.be.an('array');
                    expect(res.body.errors[0].msg).to.eql('Phone is required');
                    done();
                });
        });
        it('it should POST a owner sucessfully', (done) => {
            owner.phone = '1234567890';
            request(server)
                .post('/api/v1/owners')
                .send(owner)
                .end((err, res) => {
                    ownerId = res.body.owner.id;
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
    });

    describe('/GET owners', (done) => {
        it('it should GET all the owners', (done) => {
            request(server)
                .get('/api/v1/owners')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });

        it('it should GET owner by id', (done) => {
            request(server)
                .get(`/api/v1/owners/${ownerId}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.id).to.eql(ownerId);
                    done();
                });
        });

        it('it should GET owner not found message', (done) => {
            let id = 9999999999;
            request(server)
                .get(`/api/v1/owners/${id}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.eql(`Owner not found with id ${id}`);
                    done();
                });
        });

        it('it should GET invalid id error message', (done) => {
            let id = 'amol';
            request(server)
                .get(`/api/v1/owners/${id}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.eql('ownerId must be an integer');
                    done();
                });
        });

    });

    describe('/update owners', () => {
        it('it should show updated owner data', (done) => {
            owner.phone = '9999999999';
            request(server)
                .put(`/api/v1/owners/${ownerId}`)
                .send(owner)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.owner.phone).to.eql('9999999999');
                    done();
                });
        });
    });

    describe('/Delete owners', () => {
        it('it should throw error for DELETE the owners for invalid id', (done) => {
            let id = 999999999999;
            request(server)
                .delete(`/api/v1/owners/${id}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal(`Owner not found with id ${id}`);
                    done();
                });
        });

        it('it should DELETE  the owner', (done) => {
            request(server)
                .delete(`/api/v1/owners/${ownerId}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.owner.id).to.equal(ownerId);
                    done();
                });
        });
    });

});