
process.env.NODE_ENV = 'test';
import { expect } from 'chai';
const server = require('../../server/server');
const request = require('supertest');

describe('Pet tests', () => {
    let owner = {
        name: "amol owner",
        address: "12 osier way",
        email: "gaikwadamolraj@gmail.com",
        phone: "1234567890"
    };

    let pet = {
        name: "amol",
        colour: "white",
        age: "1",
        breed: "DOG"
    };

    let ownerId = 1, petId = 1;

    describe('/GET pet', (done) => {
        it('it should throw error when owner not available', (done) => {
            request(server)
                .get(`/api/v1/owners/99999999/pets`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.eql(`Owner not found with id 99999999`);
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

    describe('/POST Pet', () => {
        it('it should throw validation error of min char len', (done) => {
            pet.name = '';
            request(server)
                .post(`/api/v1/owners/${ownerId}/pets`)
                .send(pet)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(422);
                    expect(res.body.errors[0].msg).to.equal('Min 3 chars');
                    done();
                });
        });

        it('it should throw validation error', (done) => {
            delete pet.name;
            request(server)
                .post(`/api/v1/owners/${ownerId}/pets`)
                .send(pet)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(422);
                    expect(res.body.errors[0].msg).to.equal('name is required');
                    pet['name'] = 'pet1';
                    done();
                });
        });

        it('it should throw validation error', (done) => {
            pet.breed = 'other';
            request(server)
                .post(`/api/v1/owners/${ownerId}/pets`)
                .send(pet)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(422);
                    expect(res.body.errors[0].msg).to.equal('Value must be DOG or CAT');
                    pet.breed = 'DOG';
                    done();
                });
        });

        it('it should sucessfully insert pet', (done) => {
            request(server)
                .post(`/api/v1/owners/${ownerId}/pets`)
                .send(pet)
                .end((err, res) => {
                    petId = res.body.pet.id;
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.success).to.equal(true);
                    done();
                });
        });

    });

    describe('/GET pets', (done) => {
        it('it should GET all the pets', (done) => {
            request(server)
                .get(`/api/v1/owners/${ownerId}/pets`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });

        it('it should GET pet by id', (done) => {
            request(server)
                .get(`/api/v1/owners/${ownerId}/pets/${petId}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.id).to.eql(petId);
                    done();
                });
        });

        it('it should GET pet not found message', (done) => {
            let id = 9999999999;
            request(server)
                .get(`/api/v1/owners/${ownerId}/pets/${id}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.eql(`Pet not found with id ${id}`);
                    done();
                });
        });

        it('it should GET invalid id error message', (done) => {
            let id = 'amol';
            request(server)
                .get(`/api/v1/owners/${ownerId}/pets/${id}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.eql('petId must be an integer');
                    done();
                });
        });

    });

    describe('/update pet', () => {
        it('it should update pet data', (done) => {
            pet.breed = 'CAT';
            request(server)
                .put(`/api/v1/owners/${ownerId}/pets/${petId}`)
                .send(pet)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.pet.breed).to.eql('CAT');
                    done();
                });
        });
    });

    describe('/Delete pet', () => {
        it('it should DELETE  the pet', (done) => {
            request(server)
                .delete(`/api/v1/owners/${ownerId}/pets/${petId}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });

        it('it should throw error for DELETE the pet for invalid id', (done) => {
            let id = 999999999999;
            request(server)
                .delete(`/api/v1/owners/${ownerId}/pets/${id}`)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal(`Pet not found with id ${id}`);
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