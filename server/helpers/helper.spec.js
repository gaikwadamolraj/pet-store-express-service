import { getNewId, writeJSONFile, deleteById, getIndexById } from './helper';
import { expect } from 'chai';
import { fs } from 'fs';

describe('helper file', () => {
  it('getNewId() should get value 1', () => {
    expect(getNewId([])).to.equal(1);
  });

  it('getNewId() should  get value 2 when array contain value', () => {
    expect(getNewId([{ id: 1 }])).to.equal(2);
  });

  it('writeJSONFile()  writes data to file', () => {
    expect(writeJSONFile('./data/dummy.json', { name: 'Amol' }));
  });

  it('deleteById() should  get empty array when success', () => {
    expect(deleteById([{ id: 1 }], 1)).to.be.empty;
  });

  it('deleteById() should  get array when value not match', () => {
    expect(deleteById([{ id: 2 }], 1)).to.be.an('array');
  });

  it('getIndexById() should  get empty array when success', () => {
    expect(getIndexById([{ id: 1 }], 'id', 1)).to.equal(0);
  });

});