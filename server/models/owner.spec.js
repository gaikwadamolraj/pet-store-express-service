// import { create, getOwners, updateOwnerById, getOwnerById, deleteOwnerById } from './owner';
// import { expect } from 'chai';

// describe('owner model', () => {
//     let ownerData = {name : "amol", address: "add", email: "amol@amol.com", phone: "0123456789"};
//     let id;
// 	it('create() should create owner and get created owner', async () => {
//         let data =  await create(ownerData);
//         id = data.id;
// 		expect(data.name).to.eql(ownerData.name);
//     });

//     it('getOwners() should get owners array', async () => {
//         let data =  await getOwners();
// 		expect(data).to.be.an('array');
//     });

//     it('updateOwnerById() should get updated owner data', async () => {
//         ownerData.name = 'amol updated';
//         let data =  await updateOwnerById(4, ownerData);
// 		expect(data.name).to.eql(ownerData.name);
//     });

//     it('getOwnerById() should get particular owner data', async () => {
//         let data =  await getOwnerById(1);
// 		expect(data).to.be.an('object');
//     });

//     it('deleteOwnerById() should delete owner and get deleted owner data', async () => {
//         ownerData['id'] = id;
//         let data =  await deleteOwnerById(ownerData);
// 		expect(data.id).to.eql(ownerData.id);
//     });
// });