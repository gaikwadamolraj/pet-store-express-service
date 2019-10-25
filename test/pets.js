
process.env.NODE_ENV = 'test';
// const helpers = require('../server/helpers/helper')
import { getNewId } from '../server/helpers/helper';
import { expect } from 'chai';
// let chaiHttp = require('chai-http');
// let server = require('../app');
// let file = './data/owners.json';
// chai.use(chaiHttp);

describe('Owner', () => {
	it('getNewId.js', () => {
		expect(getNewId([])).to.equal(1);
	})
});