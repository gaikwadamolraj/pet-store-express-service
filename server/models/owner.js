import owners from '../../data/owners.json';
import pets from '../../data/pets.json';
import helper from '../helpers/helper';
const OwnerFileName = '././data/owners.json';
const petFileName = '././data/pets.json';

var create = async (newOwner) => {
  try {
    const id = { id: helper.getNewId(owners) };
    newOwner = { ...id, ...newOwner };
    owners.push(newOwner);
    helper.writeJSONFile(OwnerFileName, owners);
    return newOwner;
  } catch (err) {
    console.log(err);
    throw new Error(error);
  }
}

var getOwners = async () => owners;
// var getOwner = async (id) => owners.find(o => o.id == id);
var getOwnerById = async (id) => (owners.find(o => o.id == id) || null );
// var getOwnerById = async (id) => {
//   try {
//     let owner = await getOwner(id);
//     console.log('Here', owner);
//     if (!owner) {
//       console.log('Here if ');
//       throw new Error({ status: 500, message: `No owner found with ${id} id`});
//     }
//     return owner;
//   } catch (err) {
//     console.error(err);
//     throw new Error({ status: 500, message: `Failed to fetch owner` });
//   }
// }

var updateOwnerById = async (owner, newOwner) => {
  try {
    const index = helper.getIndexById(owners, 'id', owner.id);
      let id = { id: owner.id };
      newOwner = { ...id, ...newOwner };
      owners[index] = newOwner;
      helper.writeJSONFile(OwnerFileName, owners);
    return owners[index];
  } catch (err) {
    console.error(err);
    throw new Error({ status: 500, message: `Failed to fetch owner` });
  }
}

var deleteOwnerById = async (owner) => {
  try {
    helper.writeJSONFile(OwnerFileName, helper.deleteById(owners, owner.id));
    helper.writeJSONFile(petFileName, pets.filter(p => parseInt(p.owner) !== parseInt(owner.id)));
    return owner;
  } catch (err) {
    console.error(err);
    throw new Error({ status: 500, message: `Failed to delete owner` });
  }
}

module.exports = {
  create,
  getOwners,
  getOwnerById,
  updateOwnerById,
  deleteOwnerById
}