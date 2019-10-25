// import { create } from './owner';
// import { createPetOwnerId, getAllPetsByOwnerId, updatePetByIdAndOwnerId, deletePetByIdAndOwnerId } from './pet';
// import { expect } from 'chai';

// describe('pets model file file', () => {
//     let ownerData = {name : "amol", address: "add", email: "amol@amol.com", phone: "0123456789"};
//     let ownerId = 1, petId;
// 	it('create() should get the created object return', async () => {
//         let data =  await create(ownerData);
//         ownerId = data.id;
// 		expect(data.name).to.eql(ownerData.name);
//     });

//     let petData = {name : "pet1", colour: "white", age: "1", breed: "DOG"};
// 	it('create() should get the created object return', async () => {
//         let data =  await createPetOwnerId(petData, ownerId);
//         petId = data.id;
// 		expect(data.name).to.eql(petData.name);
//     });

//     it('getAllPetsByOwnerId() should get pets array', async () => {
//         let data =  await getAllPetsByOwnerId(ownerId);
// 		expect(data).to.be.an('object');
//     });

//     it('updatePetByIdAndOwnerId() should get updated pets data', async () => {
//         petData.name = 'pet1 updated';
//         let data =  await updatePetByIdAndOwnerId(petId, ownerId, petData);
// 		expect(data.name).to.eql(petData.name);
//     });

//     it('deletePetByIdAndOwnerId() should delete pet and get deleted pet data', async () => {
//         petData['id'] = petId;
//         let data =  await deletePetByIdAndOwnerId(petId, ownerId);
// 		expect(data.id).to.eql(petData.id);
//     });
// });